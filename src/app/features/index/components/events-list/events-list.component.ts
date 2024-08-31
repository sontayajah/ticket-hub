import { Component } from '@angular/core';
import { ContainerComponent } from '../../../../shared/components/container/container.component';
import {
    CalendarIcon,
    FlameIcon,
    LucideAngularModule,
    MapPinIcon,
} from 'lucide-angular';
import { NgClass } from '@angular/common';
import { EventCardComponent } from '../../../../shared/components/event-card/event-card.component';
import { Event } from '../../../../core/models';
import { DelayedHideDirective } from '../../../../shared/directives/delayed-hide.directive';

enum Tabs {
    HOT = 'HOT EVENTS',
    SOON = 'COMING SOON',
}

@Component({
    selector: 'app-events-list',
    standalone: true,
    imports: [
        ContainerComponent,
        LucideAngularModule,
        NgClass,
        EventCardComponent,
        DelayedHideDirective,
    ],
    templateUrl: './events-list.component.html',
    styleUrl: './events-list.component.scss',
})
export class EventsListComponent {
    readonly FlameIcon = FlameIcon;
    readonly CalendarIcon = CalendarIcon;
    readonly MapPinIcon = MapPinIcon;

    tabsList: {
        key: string;
        value: string;
    }[] = [
        {
            key: Object.keys(Tabs)[Object.values(Tabs).indexOf(Tabs.HOT)],
            value: Tabs.HOT,
        },
        {
            key: Object.keys(Tabs)[Object.values(Tabs).indexOf(Tabs.SOON)],
            value: Tabs.SOON,
        },
    ];

    activeTab: string = 'HOT';

    eventsList: Event[] = [
        {
            id: 1,
            title: 'Knock Knock Knock: BUS 1st THAILAND FANCON TOUR',
            date: '29 SEP 2024 - 27 OCT 2024',
            imageUrl:
                'https://www.thaiticketmajor.com/img_poster/prefix_1/0049/6049/knock-knock-knock-bus-1st-thailand-fancon-tour-66d2c5d931827-l.jpg',
            location:
                'Khon Kaen / Korat / Hat Yai, Songkhla / Si Racha, Chonburi / Chiang Mai',
            status: 3,
            bookingLink: '',
            detailLink: 'concert/bus-1st-thailand-fancon-tour-2024-en.html',
        },
        {
            id: 2,
            title: 'Stray Kids World Tour < dominATE BANGKOK >',
            date: '14 DEC 2024',
            imageUrl:
                'https://www.thaiticketmajor.com/img_poster/prefix_1/0038/6038/stray-kids-world-tour-dominate-bangkok-66b471403c3e2-l.png',
            location: 'National Stadium',
            status: 2,
            bookingLink: 'booking/3m/zones.php?query=489',
            detailLink:
                'concert/stray-kids-world-tour-dominate-bangkok-2024-en.html',
        },
        {
            id: 3,
            title: '2024 YUGYEOM TOUR [TRUSTY] IN BANGKOK',
            date: '12 OCT 2024 - 13 OCT 2024',
            imageUrl:
                'https://www.thaiticketmajor.com/img_poster/prefix_1/0050/6050/2024-yugyeom-tour-trusty-in-bangkok-66b2f1a741b31-l.png',
            location: 'Impact Arena, Muang Thong Thani',
            status: 1,
            bookingLink: 'booking/3m/zones.php?query=490',
            detailLink: 'concert/2024-yugyeom-tour-trusty-in-bangkok-en.html',
        },
        {
            id: 4,
            title: 'Best of Fujii Kaze 2020-2024 ASIA TOUR in Bangkok',
            date: '9 NOV 2024 - 10 NOV 2024',
            imageUrl:
                'https://www.thaiticketmajor.com/img_poster/prefix_1/0067/6067/best-of-fujii-kaze-2020-2024-asia-tour-in-bangkok-66cb036fade70-l.jpg',
            location: 'Impact Arena, Muang Thong Thani',
            status: 1,
            bookingLink: '',
            detailLink:
                'concert/best-of-fujii-kaze-2020-2024-asia-tour-en.html',
        },
        {
            id: 5,
            title: `Bangkok's 26th International Festival of Dance & Music`,
            date: '7 SEP 2024 - 20 OCT 2024',
            imageUrl:
                'https://www.thaiticketmajor.com/img_poster/prefix_1/2959/5959/bangkoks-26th-international-festival-of-dance-and-music-666c5d499c20a-l.jpg',
            location: 'Thailand Cultural Centre, Main Hall',
            status: 2,
            bookingLink: 'booking/3m/zones.php?query=320',
            detailLink:
                'concert/bangkoks-26th-international-festival-of-dance-and-music-en.html',
        },
        {
            id: 6,
            title: 'AEE Asia Entertainment Expo 2024',
            date: '22 NOV 2024 - 24 NOV 2024',
            imageUrl:
                'https://www.thaiticketmajor.com/img_poster/prefix_1/0056/6056/aee-asia-entertainment-expo-2024-66c1b1476ae36-l.jpg',
            location: 'IMPACT Forum Hall 4',
            status: 1,
            bookingLink: '',
            detailLink: 'concert/aee-asia-entertainment-expo-2024-en.html',
        },
    ];

    hotEvents: Event[] = this.eventsList.filter(
        (event) => event.status === 2 || event.status === 3,
    );

    soonEvents: Event[] = this.eventsList.filter((event) => event.status === 1);

    setActiveTab(tab: string) {
        this.activeTab = tab;
    }
}
