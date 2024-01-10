import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.component';
import { SidenavState } from './sidenav.state';

const selectSidenav = (appState: AppState) => appState.sidenavState;

export const selectIsSidenavOpened = createSelector(
    selectSidenav,
    (sidenavState: SidenavState) => sidenavState.isSidenavOpened
);
