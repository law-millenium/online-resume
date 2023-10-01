import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { ToggleMenuService } from '../services/toggle-menu.service';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-content',
    standalone: true,
    imports: [MatSidenavModule, MatListModule, CommonModule, RouterOutlet],
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent {
    protected modeSideNav: MatDrawerMode = 'side';
    protected isSidenavOpened = true;

    public constructor(
        private breakpointObserver: BreakpointObserver,
        private toggleMenuService: ToggleMenuService
    ) {
        this.breakpointObserver
            .observe(['(max-width: 600px)'])
            .subscribe((breakpointState: BreakpointState) => {
                this.modeSideNav = breakpointState.matches ? 'over' : 'side';
                this.isSidenavOpened = !breakpointState.matches;
            });

        this.toggleMenuService.toggle.subscribe(() => {
            this.isSidenavOpened = !this.isSidenavOpened;
        });
    }
}
