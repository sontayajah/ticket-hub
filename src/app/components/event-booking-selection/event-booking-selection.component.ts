import { DatePipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { EventBookingSeatComponent } from '../event-booking-seat/event-booking-seat.component';
import { ContainerComponent } from '../container/container.component';

@Component({
    selector: 'app-event-booking-selection',
    standalone: true,
    imports: [DatePipe, EventBookingSeatComponent, ContainerComponent],
    templateUrl: './event-booking-selection.component.html',
    styleUrl: './event-booking-selection.component.scss',
})
export class EventBookingSelectionComponent implements OnDestroy {
    // countdown for the timer, 3 minutes
    timeRemaining: number = 180;
    timeRemainingInterval: NodeJS.Timeout | undefined;

    constructor() {
        this.startTimer();
    }

    ngOnDestroy(): void {
        // cleanup
        this.timeRemaining = 0;
        clearInterval(this.timeRemainingInterval);
    }

    // countdown timer
    startTimer() {
        this.timeRemainingInterval = setInterval(() => {
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
