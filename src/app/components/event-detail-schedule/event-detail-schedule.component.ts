import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { LucideAngularModule, MapPinIcon } from 'lucide-angular';

@Component({
    selector: 'app-event-detail-schedule',
    standalone: true,
    imports: [ContainerComponent, LucideAngularModule],
    templateUrl: './event-detail-schedule.component.html',
    styleUrl: './event-detail-schedule.component.scss',
})
export class EventDetailScheduleComponent {
    readonly MapPinIcon = MapPinIcon;
}
