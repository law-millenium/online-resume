import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleMenuService } from 'src/app/services/toggle-menu.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(private toggleMenuService: ToggleMenuService) {}

    protected toggleMenu() {
        this.toggleMenuService.toggle.next();
    }
}
