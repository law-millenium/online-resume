import { createAction, props } from '@ngrx/store';
import { Category } from './category.enum';

export const changeCategory = createAction(
    '[Content Component] Change selected category',
    props<{
        currentCategory: Category;
        isSidenavOpened: boolean;
        shouldToggleSidenav: boolean;
    }>()
);
