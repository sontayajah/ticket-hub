import { Component } from '@angular/core';
import { EventDetailBannerComponent } from '../../components/event-detail-banner/event-detail-banner.component';
import { EventDetailScheduleComponent } from '../../components/event-detail-schedule/event-detail-schedule.component';

@Component({
    selector: 'app-event-detail',
    standalone: true,
    imports: [EventDetailBannerComponent, EventDetailScheduleComponent],
    templateUrl: './event-detail.component.html',
    styleUrl: './event-detail.component.scss',
})
export class EventDetailComponent {
    event = {
        title: 'Knock Knock Knock: <br/> BUS 1st THAILAND FANCON TOUR',
        poster_url:
            'knock-knock-knock-bus-1st-thailand-fancon-tour-66d2c5d931827-l.jpg',
        type: 'คอนเสิร์ต',
        eventDate:
            'วันอาทิตย์ที่ 29 กันยายน 2567 - วันอาทิตย์ที่ 27 ตุลาคม 2567',
        location:
            'ขอนแก่น / โคราช / สงขลา (หาดใหญ่) / ชลบุรี (ศรีราชา) / เชียงใหม่',
        doorOpen: 1,
        publicSale: 'วันเสาร์ที่ 31 สิงหาคม 2567, 10:00 น.',
        ticketPrice:
            '3,500 / 3,500 / 3,000 / 3,000 / 2,500 / 2,500 / 2,000 / 2,000 / 1,200 / 1,200',
        ticketStatus: 1,
    };
}
