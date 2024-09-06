import { NgClass } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from '../container/container.component';

@Component({
    selector: 'app-carousel',
    standalone: true,
    imports: [NgClass, RouterLink, ContainerComponent],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements AfterViewInit {
    currentSlide = 0;
    carouselItems = [
        {
            title: 'Fourth slide',
            link: '/',
            imageUrl:
                '/assets/img-event-highlight/highlight_ttmevent_2979-66bf0a4898958.png',
        },
        {
            title: 'First slide',
            link: '/',
            imageUrl:
                '/assets/img-event-highlight/highlight_ttmevent_2439-66755432e1ef8.jpg',
        },
        {
            title: 'Second slide',
            link: '/',
            imageUrl:
                '/assets/img-event-highlight/highlight_ttmevent_2843-6648361a01c93.jpg',
        },
        {
            title: 'Third slide',
            link: '/',
            imageUrl:
                '/assets/img-event-highlight/highlight_ttmevent_2870-6661227a1742c.jpg',
        },
        {
            title: 'Fourth slide',
            link: '/',
            imageUrl:
                '/assets/img-event-highlight/highlight_ttmevent_2895-66d03f1ed80a4.png',
        },
        {
            title: 'Fourth slide',
            link: '/',
            imageUrl:
                '/assets/img-event-highlight/highlight_ttmevent_2908-667e8f5183a7f.png',
        },
        {
            title: 'Fourth slide',
            link: '/',
            imageUrl:
                '/assets/img-event-highlight/highlight_ttmevent_2947-66ad8fc5aa802.jpg',
        },
        {
            title: 'Fourth slide',
            link: '/',
            imageUrl:
                '/assets/img-event-highlight/highlight_ttmevent_2966-66b49271b3cba.png',
        },
        {
            title: 'Fourth slide',
            link: '/',
            imageUrl:
                '/assets/img-event-highlight/highlight_ttmevent_2976-66bc2e0453805.png',
        },
        {
            title: 'Fourth slide',
            link: '/',
            imageUrl:
                '/assets/img-event-highlight/highlight_ttmevent_3010-66d960086eac4.png',
        },
    ];
    intervalId: NodeJS.Timeout | undefined;

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.autoLoop();
        }, 500); // Short delay before starting the auto-loop
    }

    // loop through the carousel items
    nextSlide(): void {
        this.currentSlide = (this.currentSlide + 1) % this.carouselItems.length;
    }

    // loop through the carousel items
    prevSlide(): void {
        this.currentSlide =
            (this.currentSlide - 1 + this.carouselItems.length) %
            this.carouselItems.length;
    }

    // set the current slide
    setCurrentSlide(index: number): void {
        this.currentSlide = index;

        // reset the auto loop delay
        clearInterval(this.intervalId);
        this.autoLoop();
    }

    // auto loop through the carousel items
    autoLoop(): void {
        this.intervalId = setInterval(() => {
            this.nextSlide();
        }, 5000); // 10 seconds interval
    }
}
