import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ChevronDownIcon } from 'lucide-angular';
import { ContainerComponent } from '../container/container.component';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink, LucideAngularModule, ContainerComponent],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    readonly ChevronDownIcon = ChevronDownIcon;
}
