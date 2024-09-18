import { Component } from '@angular/core';
import { EventSeatingBannerComponent } from '../../components/event-seating-banner/event-seating-banner.component';
import { ContainerComponent } from '../../components/container/container.component';
import { EventSeatingSelectionComponent } from '../../components/event-seating-selection/event-seating-selection.component';

@Component({
    selector: 'app-event-seating-zones',
    standalone: true,
    imports: [
        EventSeatingBannerComponent,
        ContainerComponent,
        EventSeatingSelectionComponent,
    ],
    templateUrl: './event-seating-zones.component.html',
    styleUrl: './event-seating-zones.component.scss',
})
export class EventSeatingZonesComponent {
    constructor() {}

    isZoneSelected(): boolean {
        return this.selectedZone !== '';
    }

    selectedZone: string = 'A2';

    selectZone(zone: string) {
        this.selectedZone = zone;
        document.body.style.overflow = 'hidden';
    }

    clearZone() {
        this.selectedZone = '';
        document.body.style.overflow = '';
    }
}
