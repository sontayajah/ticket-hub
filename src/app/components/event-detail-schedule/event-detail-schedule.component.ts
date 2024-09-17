import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { LucideAngularModule, MapPinIcon } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-event-detail-schedule',
    standalone: true,
    imports: [ContainerComponent, LucideAngularModule, RouterLink],
    templateUrl: './event-detail-schedule.component.html',
    styleUrl: './event-detail-schedule.component.scss',
})
export class EventDetailScheduleComponent {
    readonly MapPinIcon = MapPinIcon;
}
