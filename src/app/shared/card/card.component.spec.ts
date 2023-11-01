import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { CardComponent } from './card.component';
import { professionalExperiences } from '../../components/content/professional-experiences/professional-experiences';
import { trainingCourses } from '../../components/content/training-courses/training-courses';

describe('CardComponent', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;
    const inetumExperience = professionalExperiences[0];
    const experienceWithoutAttachedSkills = trainingCourses[2];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CardComponent]
        });
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
    });

    it('should create a folded card', () => {
        component.cardContent = inetumExperience;

        fixture.detectChanges();

        const unfoldedClassesElements = fixture.debugElement.query(
            By.css('.unfolded')
        );
        const descriptionParagraph = fixture.debugElement.query(
            By.css('.description')
        );
        const skillsParagraph = fixture.debugElement.query(By.css('.skills'));
        expect(unfoldedClassesElements).toBeFalsy();
        expect(descriptionParagraph).toBeFalsy();
        expect(skillsParagraph).toBeFalsy();
    });

    it('should unfold card', () => {
        component.cardContent = inetumExperience;

        component['toggleCard']();

        fixture.detectChanges();

        const unfoldedButtonText = fixture.debugElement.query(
            By.css('button.unfolded')
        ).nativeElement.textContent;
        const chevron = fixture.debugElement.query(By.css('.chevron.unfolded'));
        const descriptionParagraph = fixture.debugElement.query(
            By.css('.description')
        );
        const skillsParagraph = fixture.debugElement.query(By.css('.skills'));

        expect(unfoldedButtonText).toContain(inetumExperience.name);
        expect(chevron).toBeTruthy();
        expect(descriptionParagraph).toBeTruthy();
        expect(skillsParagraph).toBeTruthy();
    });

    it('should fold an unfolded card', () => {
        component.cardContent = inetumExperience;

        component['toggleCard']();

        fixture.detectChanges();

        const unfoldedButtonText = fixture.debugElement.query(
            By.css('button.unfolded')
        ).nativeElement.textContent;
        const chevron = fixture.debugElement.query(By.css('.chevron.unfolded'));
        let descriptionParagraph = fixture.debugElement.query(
            By.css('.description')
        );
        let skillsParagraph = fixture.debugElement.query(By.css('.skills'));

        expect(unfoldedButtonText).toContain(inetumExperience.name);
        expect(chevron).toBeTruthy();
        expect(descriptionParagraph).toBeTruthy();
        expect(skillsParagraph).toBeTruthy();

        component['toggleCard']();

        fixture.detectChanges();

        const unfoldedClassesElements = fixture.debugElement.query(
            By.css('.unfolded')
        );
        descriptionParagraph = fixture.debugElement.query(
            By.css('.description')
        );
        skillsParagraph = fixture.debugElement.query(By.css('.skills'));
        expect(unfoldedClassesElements).toBeFalsy();
        expect(descriptionParagraph).toBeFalsy();
        expect(skillsParagraph).toBeFalsy();
    });

    it('should unfold card without attached skills', () => {
        component.cardContent = experienceWithoutAttachedSkills;

        component['toggleCard']();

        fixture.detectChanges();

        const unfoldedButtonText = fixture.debugElement.query(
            By.css('button.unfolded')
        ).nativeElement.textContent;
        const chevron = fixture.debugElement.query(By.css('.chevron.unfolded'));
        const descriptionParagraph = fixture.debugElement.query(
            By.css('.description')
        );
        const skillsParagraph = fixture.debugElement.query(By.css('.skills'));

        expect(unfoldedButtonText).toContain(
            experienceWithoutAttachedSkills.name
        );
        expect(chevron).toBeTruthy();
        expect(descriptionParagraph).toBeTruthy();
        expect(skillsParagraph).toBeFalsy();
    });
});
