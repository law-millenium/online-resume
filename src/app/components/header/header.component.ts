import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../app.component';
import { toggleSidenav } from '../../core/sidenav/sidenav.actions';
import { initialSidenavState } from '../../core/sidenav/sidenav.reducers';
import { selectIsSidenavOpened } from '../../core/sidenav/sidenav.selectors';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnDestroy {
    private isSidenavOpened = initialSidenavState.isSidenavOpened;
    private subscription = new Subscription();

    constructor(private store: Store<AppState>) {
        this.subscription.add(
            this.store
                .select(selectIsSidenavOpened)
                .subscribe(
                    (isSidenavOpened) =>
                        (this.isSidenavOpened = isSidenavOpened)
                )
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    protected toggleSidenav() {
        const props = {
            isSidenavOpened: !this.isSidenavOpened
        };
        this.store.dispatch(toggleSidenav(props));
    }
}
