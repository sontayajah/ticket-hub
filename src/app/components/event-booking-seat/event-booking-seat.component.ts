import { Component } from '@angular/core';

@Component({
    selector: 'app-event-booking-seat',
    standalone: true,
    imports: [],
    templateUrl: './event-booking-seat.component.html',
    styleUrl: './event-booking-seat.component.scss',
})
export class EventBookingSeatComponent {
    selectedSeats: string[] = [];

    constructor() {}

    onSeatSelect($event: any) {
        console.log($event.target.dataset.seatId);

        // add class to selected
        if ($event.target.classList.contains('selected')) {
            $event.target.classList.remove('selected');
            this.selectedSeats = this.selectedSeats.filter(
                (seat) => seat !== $event.target.dataset.seatId,
            );
        } else {
            $event.target.classList.add('selected');
            this.selectedSeats.push($event.target.dataset.seatId);
        }
    }
}
