import { Component } from '@angular/core';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import {
    CalendarCheck2Icon,
    CalendarIcon,
    CircleDollarSignIcon,
    ClockIcon,
    FlameIcon,
    LucideAngularModule,
    MapPinIcon,
    TicketsIcon,
} from 'lucide-angular';

@Component({
    selector: 'app-event-detail',
    standalone: true,
    imports: [ContainerComponent, LucideAngularModule],
    templateUrl: './event-detail.component.html',
    styleUrl: './event-detail.component.scss',
})
export class EventDetailComponent {
    readonly FlameIcon = FlameIcon;
    readonly CalendarIcon = CalendarIcon;
    readonly MapPinIcon = MapPinIcon;
    readonly ClockIcon = ClockIcon;
    readonly CalendarCheck2Icon = CalendarCheck2Icon;
    readonly CircleDollarSignIcon = CircleDollarSignIcon;
    readonly TicketsIcon = TicketsIcon;
}
