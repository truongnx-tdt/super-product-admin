import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, REQUEST } from '@angular/core';
import { StorageKey } from '../models/common';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
 private platformId = inject(PLATFORM_ID);
  private request = inject(REQUEST, { optional: true });

  exist(key: StorageKey): boolean {
    return this.get(key) !== null;
  }

  get(key: StorageKey): string | null {
    const regExp = new RegExp(`(^| )${key}=([^;]+)`);
    const cookie = this.platformCookie.match(regExp);

    return cookie ? decodeURIComponent(cookie[1]) : null;
  }

  private get platformCookie(): string {
    if (isPlatformBrowser(this.platformId)) {
      return document.cookie;
    }

    return this.request?.headers?.get('cookie') ?? '';
  }
}
