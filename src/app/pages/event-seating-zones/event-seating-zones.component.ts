import { Component } from '@angular/core';
import { EventSeatingBannerComponent } from '../../components/event-seating-banner/event-seating-banner.component';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
    selector: 'app-event-seating-zones',
    standalone: true,
    imports: [EventSeatingBannerComponent, ContainerComponent],
    templateUrl: './event-seating-zones.component.html',
    styleUrl: './event-seating-zones.component.scss',
})
export class EventSeatingZonesComponent {
    constructor() {}

    selectedZone: string = '';

    selectZone(zone: string) {
        this.selectedZone = zone;
        alert(`Zone ${zone} selected`);
    }
}
