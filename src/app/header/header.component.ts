import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleMenuService } from '../services/toggle-menu.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(private toggleMenuService: ToggleMenuService) {}

    toggleMenu() {
        this.toggleMenuService.toggle.next();
    }
}
