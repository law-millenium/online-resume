import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map } from 'rxjs';
import { toggleSidenav } from '../sidenav/sidenav.actions';
import { changeCategory } from './category.actions';

export const toggleSidenavEffect = createEffect(
    (actions$ = inject(Actions)) => {
        return actions$.pipe(
            ofType(changeCategory),
            filter((action) => action.shouldToggleSidenav),
            map((action) =>
                toggleSidenav({
                    isSidenavOpened: action.isSidenavOpened
                })
            )
        );
    },
    { functional: true, dispatch: true }
);
