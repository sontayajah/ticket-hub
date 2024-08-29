import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ChevronDownIcon } from 'lucide-angular';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink, LucideAngularModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    readonly ChevronDownIcon = ChevronDownIcon;
}
