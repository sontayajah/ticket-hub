import { NgClass } from '@angular/common';
import { AfterViewInit, Component, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from '../../../../shared/components/container/container.component';

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
            title: 'First slide',
            link: '/',
            imageUrl:
                'https://www.thaiticketmajor.com/img_event/highlight/prefix_1/2949/2949/highlight_ttmevent_2949-66b33c7d782e1.jpg',
        },
        {
            title: 'Second slide',
            link: '/',
            imageUrl:
                'https://www.thaiticketmajor.com/img_event/highlight/prefix_1/2947/2947/highlight_ttmevent_2947-66ad8fc5aa802.jpg',
        },
        {
            title: 'Third slide',
            link: '/',
            imageUrl:
                'https://www.thaiticketmajor.com/img_event/highlight/prefix_1/2966/2966/highlight_ttmevent_2966-66b49271b3cba.png',
        },
        {
            title: 'Fourth slide',
            link: '/',
            imageUrl:
                'https://www.thaiticketmajor.com/img_event/highlight/prefix_1/2439/2439/highlight_ttmevent_2439-66755432e1ef8.jpg',
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
