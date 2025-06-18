import { inject, makeStateKey, PLATFORM_ID, TransferState } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CookieService } from '../core/services/cookie.service';
import { Router } from 'express';
import { isPlatformServer } from '@angular/common';
import { Route, StorageKey } from '../core/models/common';

const IS_AUTHORIZED_KEY = makeStateKey<boolean>('isAuthorized');

export const authGuardGuard: CanActivateFn = () => {
  const cookieService = inject(CookieService);
  const transferState = inject(TransferState);
  const platformId = inject(PLATFORM_ID);
  const router = inject(Router);

  if (isPlatformServer(platformId)) {
    const isAuthorized = cookieService.exist(StorageKey.AT) && cookieService.exist(StorageKey.RT);
    transferState.set(IS_AUTHORIZED_KEY, isAuthorized);

    return isAuthorized;
  }

  const isAuthorized = transferState.get(IS_AUTHORIZED_KEY, false);

  if (!isAuthorized) {
    return router.parseUrl(Route.SIGN_IN);
  }

  return isAuthorized;
};
