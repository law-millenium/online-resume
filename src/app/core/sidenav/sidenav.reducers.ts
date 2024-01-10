import { createReducer, on } from '@ngrx/store';
import { toggleSidenav } from './sidenav.actions';
import { SidenavState } from './sidenav.state';

export const initialSidenavState: SidenavState = {
    isSidenavOpened: false
};

const toggleSidenavReducer = (
    state: SidenavState,
    action: ReturnType<typeof toggleSidenav>
): SidenavState => ({
    ...state,
    isSidenavOpened: action.isSidenavOpened
});

export const isSidenavOpenedReducer = createReducer(
    initialSidenavState,
    on(toggleSidenav, toggleSidenavReducer)
);
