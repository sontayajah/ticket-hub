import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { EventDetailBannerComponent } from '../../components/event-detail-banner/event-detail-banner.component';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
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
    selector: 'app-event-create',
    standalone: true,
    imports: [
        ContainerComponent,
        EventDetailBannerComponent,
        ReactiveFormsModule,
        LucideAngularModule,
    ],
    templateUrl: './event-create.component.html',
    styleUrl: './event-create.component.scss',
})
export class EventCreateComponent {
    // event = {
    //     title: 'Knock Knock Knock: <br/> BUS 1st THAILAND FANCON TOUR',
    //     poster_url:
    //         'knock-knock-knock-bus-1st-thailand-fancon-tour-66d2c5d931827-l.jpg',
    //     type: 'คอนเสิร์ต',
    //     eventDate:
    //         'วันอาทิตย์ที่ 29 กันยายน 2567 - วันอาทิตย์ที่ 27 ตุลาคม 2567',
    //     location:
    //         'ขอนแก่น / โคราช / สงขลา (หาดใหญ่) / ชลบุรี (ศรีราชา) / เชียงใหม่',
    //     doorOpen: 1,
    //     publicSale: 'วันเสาร์ที่ 31 สิงหาคม 2567, 10:00 น.',
    //     ticketPrice:
    //         '3,500 / 3,500 / 3,000 / 3,000 / 2,500 / 2,500 / 2,000 / 2,000 / 1,200 / 1,200',
    //     ticketStatus: 2,
    // };

    readonly FlameIcon = FlameIcon;
    readonly CalendarIcon = CalendarIcon;
    readonly MapPinIcon = MapPinIcon;
    readonly ClockIcon = ClockIcon;
    readonly CalendarCheck2Icon = CalendarCheck2Icon;
    readonly CircleDollarSignIcon = CircleDollarSignIcon;
    readonly TicketsIcon = TicketsIcon;

    addEventForm: FormGroup = new FormGroup({});

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.setDefaultEventState();
    }

    setDefaultEventState() {
        this.addEventForm = this.fb.group({
            title: [null, Validators.required],
            type: ['', Validators.required],
            eventDateStart: [null, Validators.required],
            eventDateEnd: [null, Validators.required],
            location: [null, Validators.required],
            doorOpen: [0, Validators.required],
            publicSale: [null, Validators.required],
            ticketPrice: [null, Validators.required],
            ticketStatus: [null, Validators.required],
            eventSchedule: this.fb.array([]),
        });
    }
}
