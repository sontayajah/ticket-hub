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
        path: 'booking/zones',
        loadComponent: () =>
            import('./pages/event-booking/event-booking.component').then(
                (module) => module.EventBookingComponent,
            ),
        title: 'เลือกโซนที่นั่ง | TICKETHUB',
    },
    {
        path: 'organizer/event/create',
        loadComponent: () =>
            import('./pages/event-create/event-create.component').then(
                (module) => module.EventCreateComponent,
            ),
        title: 'TICKETHUB ORGANIZER: สร้างงานคอนเสิร์ต งานแสดง โชว์ กิจกรรม',
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
