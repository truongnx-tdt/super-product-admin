import { RenderMode, ServerRoute } from '@angular/ssr';
import { Route } from './core/models/common';

export const serverRoutes: ServerRoute[] = [
  {
    path: Route.ADMIN,
    renderMode: RenderMode.Server,
  },
  {
    path: Route.SIGN_IN,
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
    status: 301,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    },
  }
];
