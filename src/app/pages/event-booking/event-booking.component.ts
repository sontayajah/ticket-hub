import { Component } from '@angular/core';
import { EventBookingBannerComponent } from '../../components/event-booking-banner/event-booking-banner.component';
import { ContainerComponent } from '../../components/container/container.component';
import { EventBookingSelectionComponent } from '../../components/event-booking-selection/event-booking-selection.component';

@Component({
    selector: 'app-event-booking',
    standalone: true,
    imports: [
        EventBookingBannerComponent,
        ContainerComponent,
        EventBookingSelectionComponent,
    ],
    templateUrl: './event-booking.component.html',
    styleUrl: './event-booking.component.scss',
})
export class EventBookingComponent {
    constructor() {}

    isZoneSelected(): boolean {
        return this.selectedZone !== '';
    }

    selectedZone: string = '';

    selectZone(zone: string) {
        this.selectedZone = zone;
    }

    clearZone() {
        this.selectedZone = '';
    }
}
