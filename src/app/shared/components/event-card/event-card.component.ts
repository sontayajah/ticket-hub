import { Component, Input } from '@angular/core';
import { LucideAngularModule, MapPinIcon } from 'lucide-angular';
import { Event } from '../../../core/models';

@Component({
    selector: 'app-event-card',
    standalone: true,
    imports: [LucideAngularModule],
    templateUrl: './event-card.component.html',
    styleUrl: './event-card.component.scss',
})
export class EventCardComponent {
    @Input() event: Event = {
        id: 0,
        title: '',
        date: '',
        imageUrl: '',
        location: '',
        status: 1,
        bookingLink: '',
        detailLink: '',
    };
    @Input() isHot: boolean = false;

    readonly MapPinIcon = MapPinIcon;
}
