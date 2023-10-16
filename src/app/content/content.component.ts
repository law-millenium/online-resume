import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.component';
import { changeCategory } from '../core/category.actions';
import { Category } from '../core/category.enum';
import { selectCurrentCategory } from '../core/category.selectors';
import { ToggleMenuService } from '../services/toggle-menu.service';
import { SummaryComponent } from './summary/summary.component';

@Component({
    selector: 'app-content',
    standalone: true,
    imports: [MatSidenavModule, MatListModule, CommonModule, SummaryComponent],
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent {
    protected currentCategory$ = new Observable<Category>();

    protected categories = Object.values(Category);
    protected modeSideNav: MatDrawerMode = 'side';
    protected isSidenavOpened!: boolean;

    public constructor(
        private breakpointObserver: BreakpointObserver,
        private toggleMenuService: ToggleMenuService,
        private store: Store<AppState>
    ) {
        this.breakpointObserver
            .observe(['(max-width: 600px)'])
            .subscribe((breakpointState: BreakpointState) => {
                const isMobile = breakpointState.matches;
                this.modeSideNav = isMobile ? 'over' : 'side';
                this.isSidenavOpened = !isMobile;

                if (isMobile) {
                    this.toggleMenuService.toggle.subscribe(() => {
                        this.isSidenavOpened = !this.isSidenavOpened;
                    });
                }
            });

        this.currentCategory$ = this.store.select(selectCurrentCategory);
    }

    protected selectCategory(selectedCategory: Category) {
        const state = { currentCategory: selectedCategory };
        this.store.dispatch(changeCategory(state));
    }
}
