import { createReducer, on } from '@ngrx/store';
import { changeCategory } from './category.actions';
import { Category } from './category.enum';
import { CategoryState } from './category.state';

const initialState: CategoryState = {
    currentCategory: Category.SUMMARY
};

const changeCategoryReducer = (
    state: CategoryState,
    action: ReturnType<typeof changeCategory>
): CategoryState => ({
    ...state,
    currentCategory: action.currentCategory
});

export const selectedCategoryReducer = createReducer(
    initialState,
    on(changeCategory, changeCategoryReducer)
);
