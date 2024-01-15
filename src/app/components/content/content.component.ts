import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../app.component';
import { changeCategory } from '../../core/category/category.actions';
import { Category } from '../../core/category/category.enum';
import { selectCurrentCategory } from '../../core/category/category.selectors';
import { toggleSidenav } from '../../core/sidenav/sidenav.actions';
import { initialSidenavState } from '../../core/sidenav/sidenav.reducers';
import { selectIsSidenavOpened } from '../../core/sidenav/sidenav.selectors';
import { CardComponent } from '../../shared/card/card.component';
import { hobbies } from './hobbies/hobbies';
import { professionalExperiences } from './professional-experiences/professional-experiences';
import { studies } from './studies/studies';
import { SummaryComponent } from './summary/summary.component';
import { trainingCourses } from './training-courses/training-courses';

@Component({
    selector: 'app-content',
    standalone: true,
    imports: [
        MatSidenavModule,
        MatListModule,
        CommonModule,
        SummaryComponent,
        CardComponent
    ],
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnDestroy {
    protected currentCategory$ = new Observable<Category>();
    protected isSidenavOpened = initialSidenavState.isSidenavOpened;
    protected professionalExperiences = professionalExperiences;
    protected trainingCourses = trainingCourses;
    protected studies = studies;
    protected hobbies = hobbies;
    protected categories = Object.values(Category);
    protected modeSideNav: MatDrawerMode = 'side';

    private isPortaitOrientedMobile = false;
    private subscription = new Subscription();

    public constructor(
        private breakpointObserver: BreakpointObserver,
        private store: Store<AppState>
    ) {
        this.currentCategory$ = this.store.select(selectCurrentCategory);
        this.subscription.add(
            this.store
                .select(selectIsSidenavOpened)
                .subscribe((isSidenavOpened) => {
                    this.isSidenavOpened = isSidenavOpened;
                })
        );

        this.breakpointObserver
            .observe(['(max-width: 600px)'])
            .subscribe((breakpointState: BreakpointState) => {
                this.isPortaitOrientedMobile = breakpointState.matches;
                this.modeSideNav = this.isPortaitOrientedMobile
                    ? 'over'
                    : 'side';
                this.isSidenavOpened = !this.isPortaitOrientedMobile;
                const props = {
                    isSidenavOpened: this.isSidenavOpened
                };
                this.store.dispatch(toggleSidenav(props));
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    protected selectCategory(selectedCategory: Category) {
        const props = {
            currentCategory: selectedCategory,
            isSidenavOpened: !this.isSidenavOpened,
            shouldToggleSidenav: this.isPortaitOrientedMobile
        };
        this.store.dispatch(changeCategory(props));
    }

    protected closeSidenav() {
        const props = {
            isSidenavOpened: !this.isSidenavOpened
        };
        this.store.dispatch(toggleSidenav(props));
    }
}
