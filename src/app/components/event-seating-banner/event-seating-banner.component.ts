import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';

@Component({
    selector: 'app-event-seating-banner',
    standalone: true,
    imports: [ContainerComponent],
    templateUrl: './event-seating-banner.component.html',
    styleUrl: './event-seating-banner.component.scss',
})
export class EventSeatingBannerComponent {}
