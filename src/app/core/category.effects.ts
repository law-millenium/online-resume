import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { ToggleMenuService } from '../services/toggle-menu.service';
import { changeCategory } from './category.actions';

export const toggleSidenavEffect = createEffect(
    (
        actions$ = inject(Actions),
        toggleMenuService = inject(ToggleMenuService)
    ) => {
        return actions$.pipe(
            ofType(changeCategory),
            tap(() => toggleMenuService.toggle.next())
        );
    },
    { functional: true, dispatch: false }
);
