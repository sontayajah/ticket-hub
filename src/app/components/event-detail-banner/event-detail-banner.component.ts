import { Component, Input } from '@angular/core';
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
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
    @Input({ required: true }) title: string = '';
    @Input({ required: true }) poster_url: string = '';
    @Input({ required: true }) type: string = '';
    @Input({ required: true }) eventDate: string = '';
    @Input({ required: true }) location: string = '';
    @Input({ required: true }) doorOpen: number = 0;
    @Input({ required: true }) publicSale: string = '';
    @Input({ required: true }) ticketPrice: string = '';
    @Input({ required: true }) ticketStatus: number = 0;

    readonly FlameIcon = FlameIcon;
    readonly CalendarIcon = CalendarIcon;
    readonly MapPinIcon = MapPinIcon;
    readonly ClockIcon = ClockIcon;
    readonly CalendarCheck2Icon = CalendarCheck2Icon;
    readonly CircleDollarSignIcon = CircleDollarSignIcon;
    readonly TicketsIcon = TicketsIcon;

    // Safe HTML properties
    safeTitle: SafeHtml;

    constructor(private sanitizer: DomSanitizer) {
        // Sanitize HTML
        this.safeTitle = this.sanitize(this.title);
    }

    // Method to sanitize the content
    sanitize(content: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }

    getBreadcrumbEventTitle(): string {
        return this.title.replace(/<br\/>/g, ' ');
    }
}
