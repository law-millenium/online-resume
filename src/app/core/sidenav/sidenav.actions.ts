import { createAction, props } from '@ngrx/store';

export const toggleSidenav = createAction(
    '[Header Component] Toggle sidenav',
    props<{
        isSidenavOpened: boolean;
    }>()
);
