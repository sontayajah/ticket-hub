import { Component } from '@angular/core';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { EventsListComponent } from '../components/events-list/events-list.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';

@Component({
    selector: 'app-index',
    standalone: true,
    imports: [CarouselComponent, EventsListComponent, ContainerComponent],
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss',
})
export class IndexComponent {}
