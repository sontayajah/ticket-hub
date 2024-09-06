import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
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
    selector: 'app-event-detail-banner',
    standalone: true,
    imports: [
        ContainerComponent,
        LucideAngularModule,
        EventDetailBannerComponent,
    ],
    templateUrl: './event-detail-banner.component.html',
    styleUrl: './event-detail-banner.component.scss',
})
export class EventDetailBannerComponent {
    readonly FlameIcon = FlameIcon;
    readonly CalendarIcon = CalendarIcon;
    readonly MapPinIcon = MapPinIcon;
    readonly ClockIcon = ClockIcon;
    readonly CalendarCheck2Icon = CalendarCheck2Icon;
    readonly CircleDollarSignIcon = CircleDollarSignIcon;
    readonly TicketsIcon = TicketsIcon;
}
