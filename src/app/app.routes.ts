import { Routes } from '@angular/router';
import { Route } from './core/models/common';

export const routes: Routes = [
    {
        path: Route.ADMIN,
        loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
        children: [
            {
                path: Route.EMPTY,
                loadComponent: () => import('./modules/home/home.component').then(m => m.HomeComponent),
            },
            {
                path: Route.HOME,
                loadComponent: () => import('./modules/home/home.component').then(m => m.HomeComponent),
            },
            {
                path: '**',
                loadComponent: () => import('./modules/errors/not-found/not-found.component').then(m => m.NotFoundComponent),
            }
        ]
    },
    {
        path: Route.EMPTY,
        redirectTo: Route.SIGN_IN,
        pathMatch: 'full',
    },
    {
        path: Route.SIGN_IN,
        loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
    },
    {
        path: '**',
        loadComponent: () => import('./modules/errors/not-found/not-found.component').then(m => m.NotFoundComponent),
    }
];
