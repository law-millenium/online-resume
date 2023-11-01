import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Subject, of } from 'rxjs';
import { ContentComponent } from './content.component';
import { AppState } from 'src/app/app.component';
import { Category } from 'src/app/core/category.enum';
import { selectCurrentCategory } from 'src/app/core/category.selectors';
import { CategoryState } from 'src/app/core/category.state';
import { ToggleMenuService } from 'src/app/services/toggle-menu.service';

class MockToggleMenuService {
    public toggle = new Subject<boolean>();

    ngOnDestroy() {
        // Do nothing
    }
}

describe('ContentComponent', () => {
    let fixture: ComponentFixture<ContentComponent>;
    let breakpointObserver: BreakpointObserver;
    let toggleMenuService: ToggleMenuService;
    let mockStore: MockStore<CategoryState>;
    let selectSelectedCategoryMockedSelector: MemoizedSelector<
        AppState,
        Category
    >;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ContentComponent, NoopAnimationsModule],
            providers: [
                provideMockStore(),
                BreakpointObserver,
                {
                    provide: ToggleMenuService,
                    useClass: MockToggleMenuService
                }
            ]
        });

        breakpointObserver = TestBed.inject(BreakpointObserver);
        toggleMenuService = TestBed.inject(ToggleMenuService);

        mockStore = TestBed.inject(MockStore);
        selectSelectedCategoryMockedSelector = mockStore.overrideSelector(
            selectCurrentCategory,
            Category.SUMMARY
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

                const attributes = fixture.debugElement.query(
                    By.css('.sidenav')
                ).nativeElement;
                expect(attributes.getAttribute('ng-reflect-mode')).toBe(
                    sidenavMode
                );
                expect(attributes.getAttribute('ng-reflect-opened')).toBe(
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

            const attributes = fixture.debugElement.query(
                By.css('.sidenav')
            ).nativeElement;
            expect(attributes.getAttribute('ng-reflect-opened')).toBe('false');

            toggleMenuService.toggle.next();
            fixture.detectChanges();

            expect(attributes.getAttribute('ng-reflect-opened')).toBe('true');
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
                htmlTag: 'app-professional-experiences'
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
                selectedCategory: Category.TRAINING_COURSES,
                expected: 'Formations'
            },
            {
                selectedCategory: Category.STUDIES,
                expected: 'Etudes'
            },
            {
                selectedCategory: Category.HOBBIES,
                expected: 'Hobbies'
            }
        ])(
            "should display '$expected' as changed state",
            ({ selectedCategory, expected }) => {
                selectSelectedCategoryMockedSelector.setResult(
                    selectedCategory
                );

                mockStore.refreshState();

                fixture = TestBed.createComponent(ContentComponent);
                fixture.detectChanges();

                const sidenavContentText = fixture.debugElement
                    .query(By.css('mat-sidenav-content'))
                    .nativeElement.textContent.trim();
                const selectedCategoryText = fixture.debugElement
                    .query(By.css('.selected'))
                    .nativeElement.textContent.trim();
                expect(sidenavContentText).toBe(expected);
                expect(selectedCategoryText).toBe(expected);
            }
        );
    });
});
