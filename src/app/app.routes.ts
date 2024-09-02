import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./features/index/pages/index.component').then(
                (module) => module.IndexComponent,
            ),
        title: 'TICKETHUB: ซื้อบัตรคอนเสิร์ต งานแสดง โชว์ กิจกรรม',
    },
    {
        path: 'concert/:slug',
        loadComponent: () =>
            import('./features/event-detail/pages/event-detail.component').then(
                (module) => module.EventDetailComponent,
            ),
        title: 'TICKETHUB: ซื้อบัตรคอนเสิร์ต งานแสดง โชว์ กิจกรรม',
    },
    {
        path: '**',
        loadComponent: () =>
            import(
                './features/errors/not-found/pages/not-found.component'
            ).then((module) => module.NotFoundComponent),
        title: 'TICKETHUB | Not Found',
    },
];
