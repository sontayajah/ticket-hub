import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/index/index.component').then(
                (module) => module.IndexComponent,
            ),
        title: 'TICKETHUB: ซื้อบัตรคอนเสิร์ต งานแสดง โชว์ กิจกรรม',
    },
    {
        path: 'concert/:slug',
        loadComponent: () =>
            import('./pages/event-detail/event-detail.component').then(
                (module) => module.EventDetailComponent,
            ),
        title: 'TICKETHUB: ซื้อบัตรคอนเสิร์ต งานแสดง โชว์ กิจกรรม',
    },
    {
        path: '**',
        loadComponent: () =>
            import('./components/not-found/not-found.component').then(
                (module) => module.NotFoundComponent,
            ),
        title: 'TICKETHUB | Not Found',
    },
];
