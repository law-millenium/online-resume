import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { AppState } from '../../app.component';
import { Category } from '../../core/category/category.enum';
import { selectCurrentCategory } from '../../core/category/category.selectors';
import { CategoryState } from '../../core/category/category.state';
import { initialSidenavState } from '../../core/sidenav/sidenav.reducers';
import { selectIsSidenavOpened } from '../../core/sidenav/sidenav.selectors';
import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
    let fixture: ComponentFixture<ContentComponent>;
    let breakpointObserver: BreakpointObserver;
    let mockStore: MockStore<CategoryState>;
    let selectSelectedCategoryMockedSelector: MemoizedSelector<
        AppState,
        Category
    >;
    let selectIsSidenavOpenedMockedSelector: MemoizedSelector<
        AppState,
        boolean
    >;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ContentComponent, NoopAnimationsModule],
            providers: [provideMockStore(), BreakpointObserver]
        });

        breakpointObserver = TestBed.inject(BreakpointObserver);

        mockStore = TestBed.inject(MockStore);
        selectSelectedCategoryMockedSelector = mockStore.overrideSelector(
            selectCurrentCategory,
            Category.SUMMARY
        );
        selectIsSidenavOpenedMockedSelector = mockStore.overrideSelector(
            selectIsSidenavOpened,
            initialSidenavState.isSidenavOpened
        );
    });

    describe('Sidenav rendering', () => {
        it.each([
            {
                devices: 'mobiles',
                matches: true,
                sidenavMode: 'over',
                isSidenavOpened: 'false'
            },
            {
                devices: 'tablets or desktops',
                matches: false,
                sidenavMode: 'side',
                isSidenavOpened: 'true'
            }
        ])(
            'should render sidenav for $devices',
            ({ matches, sidenavMode, isSidenavOpened }) => {
                jest.spyOn(breakpointObserver, 'observe').mockReturnValue(
                    of({ matches: matches } as BreakpointState)
                );

                fixture = TestBed.createComponent(ContentComponent);
                fixture.detectChanges();

                const sidenav = fixture.debugElement.query(
                    By.css('.sidenav')
                ).nativeElement;
                expect(sidenav.getAttribute('ng-reflect-mode')).toBe(
                    sidenavMode
                );
                expect(sidenav.getAttribute('ng-reflect-opened')).toBe(
                    isSidenavOpened
                );
            }
        );

        it('should open/close sidenav when burger menu clicked', () => {
            jest.spyOn(breakpointObserver, 'observe').mockReturnValue(
                of({ matches: true } as BreakpointState)
            );

            fixture = TestBed.createComponent(ContentComponent);
            fixture.detectChanges();

            const sidenav = fixture.debugElement.query(
                By.css('.sidenav')
            ).nativeElement;
            expect(sidenav.getAttribute('ng-reflect-opened')).toBe('false');

            selectIsSidenavOpenedMockedSelector.setResult(true);
            mockStore.refreshState();
            fixture.detectChanges();

            expect(sidenav.getAttribute('ng-reflect-opened')).toBe('true');
        });
    });

    describe('Category selection', () => {
        it.each([
            {
                label: 'the summary',
                stateStatus: 'initial',
                selectedCategory: undefined,
                htmlTag: 'app-summary'
            },
            {
                label: 'professional experiences',
                stateStatus: 'changed',
                selectedCategory: Category.PROFESSIONAL_EXPERIENCES,
                htmlTag: 'app-card'
            },
            {
                label: 'training courses',
                stateStatus: 'changed',
                selectedCategory: Category.TRAINING_COURSES,
                htmlTag: 'app-card'
            },
            {
                label: 'studies',
                stateStatus: 'changed',
                selectedCategory: Category.STUDIES,
                htmlTag: 'app-card'
            },
            {
                label: 'hobbies',
                stateStatus: 'changed',
                selectedCategory: Category.HOBBIES,
                htmlTag: 'app-card'
            }
        ])(
            'should display $label as $stateStatus state',
            ({ stateStatus, selectedCategory, htmlTag }) => {
                selectSelectedCategoryMockedSelector.setResult(
                    selectedCategory
                );
                mockStore.refreshState();

                fixture = TestBed.createComponent(ContentComponent);
                fixture.detectChanges();

                const sidenavContentText = fixture.debugElement.query(
                    By.css('mat-sidenav-content ' + htmlTag)
                );
                expect(sidenavContentText).toBeTruthy();

                if (stateStatus === 'changed') {
                    const selectedCategoryText = fixture.debugElement
                        .query(By.css('.selected'))
                        .nativeElement.textContent.trim();
                    expect(selectedCategoryText).toBe(selectedCategory);
                }
            }
        );

        it.each([
            {
                isMobile: true,
                shouldBeDisabled: false
            },
            {
                isMobile: false,
                shouldBeDisabled: true
            }
        ])(
            'should disable button for current category if sidenav is not togglable',
            ({ isMobile, shouldBeDisabled }) => {
                jest.spyOn(breakpointObserver, 'observe').mockReturnValue(
                    of({ matches: isMobile } as BreakpointState)
                );

                selectSelectedCategoryMockedSelector.setResult(
                    Category.HOBBIES
                );
                mockStore.refreshState();

                fixture = TestBed.createComponent(ContentComponent);
                fixture.detectChanges();

                const selectedButton = fixture.debugElement.query(
                    By.css('.selected')
                ).nativeElement;
                expect(selectedButton.disabled).toBe(shouldBeDisabled);
            }
        );
    });
});
