import { Component } from '@angular/core';
import {
    CalendarIcon,
    FlameIcon,
    LucideAngularModule,
    MapPinIcon,
} from 'lucide-angular';
import { NgClass } from '@angular/common';
import { ContainerComponent } from '../container/container.component';
import { EventCardComponent } from '../event-card/event-card.component';
import { Event } from '../../shared/models';

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
            imageUrl:
                '/assets/img-posters/knock-knock-knock-bus-1st-thailand-fancon-tour-66d2c5d931827-l.jpg',
            location:
                'Khon Kaen / Korat / Hat Yai, Songkhla / Si Racha, Chonburi / Chiang Mai',
            status: 2,
            bookingLink: 'booking/zones.php?query=488',
            detailLink: 'concert/bus-1st-thailand-fancon-tour-2024-en',
            publicSaleDate: '1 SEP 2024, 10:00',
            eventDate: '29 SEP 2024 - 27 OCT 2024',
        },
        // {
        //     id: 2,
        //     title: 'Stray Kids World Tour < dominATE BANGKOK >',
        //     imageUrl:
        //         '/assets/img-posters/stray-kids-world-tour-dominate-bangkok-66b471403c3e2-l.png',
        //     location: 'National Stadium',
        //     status: 2,
        //     bookingLink: 'booking/3m/zones.php?query=489',
        //     detailLink:
        //         'concert/stray-kids-world-tour-dominate-bangkok-2024-en',
        //     publicSaleDate: '1 NOV 2024, 12:00',
        //     eventDate: '14 DEC 2024',
        // },
        // {
        //     id: 3,
        //     title: '2024 YUGYEOM TOUR [TRUSTY] IN BANGKOK',
        //     imageUrl:
        //         '/assets/img-posters/2024-yugyeom-tour-trusty-in-bangkok-66b2f1a741b31-l.png',
        //     location: 'Impact Arena, Muang Thong Thani',
        //     status: 1,
        //     bookingLink: 'booking/3m/zones.php?query=490',
        //     detailLink: 'concert/2024-yugyeom-tour-trusty-in-bangkok-en',
        //     publicSaleDate: '7 SEP 2024, 10:00',
        //     eventDate: '12 OCT 2024 - 13 OCT 2024',
        // },
        // {
        //     id: 4,
        //     title: 'Best of Fujii Kaze 2020-2024 ASIA TOUR in Bangkok',
        //     imageUrl:
        //         '/assets/img-posters/best-of-fujii-kaze-2020-2024-asia-tour-in-bangkok-66cb036fade70-l.jpg',
        //     location: 'Impact Arena, Muang Thong Thani',
        //     status: 1,
        //     bookingLink: '',
        //     detailLink: 'concert/best-of-fujii-kaze-2020-2024-asia-tour-en',
        //     publicSaleDate: '15 SEP 2024, 11:00',
        //     eventDate: '9 NOV 2024 - 10 NOV 2024',
        // },
        // {
        //     id: 5,
        //     title: `Bangkok's 26th International Festival of Dance & Music`,
        //     imageUrl:
        //         '/assets/img-posters/bangkoks-26th-international-festival-of-dance-and-music-666c5d499c20a-l.jpg',
        //     location: 'Thailand Cultural Centre, Main Hall',
        //     status: 2,
        //     bookingLink: 'booking/3m/zones.php?query=320',
        //     detailLink:
        //         'concert/bangkoks-26th-international-festival-of-dance-and-music-en',
        //     publicSaleDate: '10 SEP 2024, 12:00',
        //     eventDate: '22 NOV 2024 - 24 NOV 2024',
        // },
        // {
        //     id: 6,
        //     title: 'AEE Asia Entertainment Expo 2024',
        //     imageUrl:
        //         '/assets/img-posters/aee-asia-entertainment-expo-2024-66c1b1476ae36-l.jpg',
        //     location: 'IMPACT Forum Hall 4',
        //     status: 1,
        //     bookingLink: '',
        //     detailLink: 'concert/aee-asia-entertainment-expo-2024-en',
        //     publicSaleDate: '10 SEP 2024, 12:00',
        //     eventDate: '22 NOV 2024 - 24 NOV 2024',
        // },
        // {
        //     id: 7,
        //     title: '2024 (G)I-DLE WORLD TOUR [iDOL] IN BANGKOK',
        //     imageUrl:
        //         '/assets/img-posters/2024-g-i-dle-world-tour-idol-in-bangkok-66bac95b60b47-l.png',
        //     location: 'Impact Arena, Muang Thong Thani',
        //     status: 2,
        //     bookingLink: 'booking/3m/zones.php?query=491&rdId=78889',
        //     detailLink: 'concert/2024-g-i-dle-world-tour-idol-in-bangkok',
        //     publicSaleDate: '12 AUG 2024, 12:00',
        //     eventDate: '19 OCT 2024',
        // },
    ];

    hotEvents: Event[] = this.eventsList.filter(
        (event) =>
            event.status === 1 || event.status === 2 || event.status === 3,
    );

    soonEvents: Event[] = this.eventsList.filter((event) => event.status === 1);

    setActiveTab(tab: string) {
        this.activeTab = tab;
    }
}
