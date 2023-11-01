import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { ProfessionalExperiencesComponent } from './professional-experiences.component';

describe('ProfessionalExperiencesComponent', () => {
    let component: ProfessionalExperiencesComponent;
    let fixture: ComponentFixture<ProfessionalExperiencesComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ProfessionalExperiencesComponent]
        });
        fixture = TestBed.createComponent(ProfessionalExperiencesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create a component with folded cards', () => {
        const foldedClassesElements = fixture.debugElement.query(
            By.css('.folded')
        );
        const descriptionParagraph = fixture.debugElement.query(
            By.css('.description')
        );
        const skillsParagraph = fixture.debugElement.query(By.css('.skills'));

        expect(foldedClassesElements).toBeFalsy();
        expect(descriptionParagraph).toBeFalsy();
        expect(skillsParagraph).toBeFalsy();
    });

    it.each([
        {
            selectedCompanyName: 'Inetum'
        },
        {
            selectedCompanyName: 'Capgemini'
        }
    ])('should unfold $selectedCompanyName card', ({ selectedCompanyName }) => {
        component['toggleContentForExperience'](selectedCompanyName);

        fixture.detectChanges();

        const foldedButtonText = fixture.debugElement.query(
            By.css('button.folded')
        ).nativeElement.textContent;
        const chevron = fixture.debugElement.query(By.css('.chevron.folded'));
        const descriptionParagraph = fixture.debugElement.query(
            By.css('.description')
        );
        const skillsParagraph = fixture.debugElement.query(By.css('.skills'));

        expect(foldedButtonText).toContain(selectedCompanyName);
        expect(chevron).toBeTruthy();
        expect(descriptionParagraph).toBeTruthy();
        expect(skillsParagraph).toBeTruthy();
    });

    it('should fold an unfolded card', () => {
        component['toggleContentForExperience']('Inetum');

        fixture.detectChanges();

        const foldedButtonText = fixture.debugElement.query(
            By.css('button.folded')
        ).nativeElement.textContent;
        const chevron = fixture.debugElement.query(By.css('.chevron.folded'));
        let descriptionParagraph = fixture.debugElement.query(
            By.css('.description')
        );
        let skillsParagraph = fixture.debugElement.query(By.css('.skills'));

        expect(foldedButtonText).toContain('Inetum');
        expect(chevron).toBeTruthy();
        expect(descriptionParagraph).toBeTruthy();
        expect(skillsParagraph).toBeTruthy();

        component['toggleContentForExperience']('Inetum');

        fixture.detectChanges();

        const foldedClassesElements = fixture.debugElement.query(
            By.css('.folded')
        );
        descriptionParagraph = fixture.debugElement.query(
            By.css('.description')
        );
        skillsParagraph = fixture.debugElement.query(By.css('.skills'));
        expect(foldedClassesElements).toBeFalsy();
        expect(descriptionParagraph).toBeFalsy();
        expect(skillsParagraph).toBeFalsy();
    });
});
