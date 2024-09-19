import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';

@Component({
    selector: 'app-event-booking-banner',
    standalone: true,
    imports: [ContainerComponent],
    templateUrl: './event-booking-banner.component.html',
    styleUrl: './event-booking-banner.component.scss',
})
export class EventBookingBannerComponent {}
