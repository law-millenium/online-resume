import { fakeAsync, tick } from '@angular/core/testing';
import { createAction } from '@ngrx/store';
import { of } from 'rxjs';
import { changeCategory } from './category.actions';
import { toggleSidenavEffect } from './category.effects';
import { Category } from './category.enum';

describe('CategoryEffects', () => {
    it('Do nothing if not a category change action', fakeAsync(() => {
        const actionsMock$ = of(createAction('[TEST] TEST'));

        let result = null;
        toggleSidenavEffect(actionsMock$).subscribe({
            next: (action) => (result = action),
            error: (error) => (result = error)
        });

        tick();

        expect(result).toBe(null);
    }));

    it('Do nothing if sould not toggle sidenav', fakeAsync(() => {
        const props = {
            currentCategory: Category.HOBBIES,
            isSidenavOpened: true,
            shouldToggleSidenav: false
        };
        const actionsMock$ = of(changeCategory(props));

        let result = null;
        toggleSidenavEffect(actionsMock$).subscribe({
            next: (action) => (result = action),
            error: (error) => (result = error)
        });

        tick();

        expect(result).toBe(null);
    }));

    it('toggles sidenav if category change', (done) => {
        expect.assertions(1);

        const props = {
            currentCategory: Category.SUMMARY,
            isSidenavOpened: true,
            shouldToggleSidenav: true
        };
        const actionsMock$ = of(changeCategory(props));

        toggleSidenavEffect(actionsMock$).subscribe((action) => {
            expect(action).toEqual({
                isSidenavOpened: true,
                type: '[Header Component] Toggle sidenav'
            });
            done();
        });
    });
});
