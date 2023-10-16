import { createSelector } from '@ngrx/store';
import { AppState } from '../app.component';
import { CategoryState } from './category.state';

const selectCategory = (appState: AppState) => appState.categoryState;

export const selectCurrentCategory = createSelector(
    selectCategory,
    (categoryState: CategoryState) => categoryState.currentCategory
);
