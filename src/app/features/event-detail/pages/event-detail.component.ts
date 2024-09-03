import { Component } from '@angular/core';
import { EventDetailBannerComponent } from '../components/event-detail-banner/event-detail-banner.component';
import { EventDetailScheduleComponent } from '../components/event-detail-schedule/event-detail-schedule.component';

@Component({
    selector: 'app-event-detail',
    standalone: true,
    imports: [EventDetailBannerComponent, EventDetailScheduleComponent],
    templateUrl: './event-detail.component.html',
    styleUrl: './event-detail.component.scss',
})
export class EventDetailComponent {}
