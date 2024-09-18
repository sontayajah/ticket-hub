import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-event-seating-selection',
    standalone: true,
    imports: [DatePipe],
    templateUrl: './event-seating-selection.component.html',
    styleUrl: './event-seating-selection.component.scss',
})
export class EventSeatingSelectionComponent {
    // countdown for the timer, 3 minutes
    timeRemaining: number = 180;

    constructor() {
        this.startTimer();
    }

    // countdown timer
    startTimer() {
        setInterval(() => {
            if (this.timeRemaining > 0) {
                this.timeRemaining -= 1;
            }

            if (this.timeRemaining === 0) {
                // reload the page
                window.location.reload();
            }
        }, 1000);
    }
}
