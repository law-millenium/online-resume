import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { hobbies } from '../../components/content/hobbies/hobbies';
import { professionalExperiences } from '../../components/content/professional-experiences/professional-experiences';
import { CardComponent } from './card.component';
import { ChangeDetectionStrategy } from '@angular/core';

describe('CardComponent', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;
    const standardExperience = professionalExperiences[0];
    const experienceWithoutAttachedSkillsAndPeriod = hobbies[2];
    const experienceWithGifs = hobbies[0];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CardComponent]
        }).overrideComponent(CardComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
        });
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
    });

    it('should create a folded card', () => {
        component.cardContent = standardExperience;

        fixture.detectChanges();

        const unfoldedClassesElements = fixture.debugElement.query(
            By.css('.unfolded')
        );
        const headingGifs = fixture.debugElement.query(By.css('.heading-gif'));
        const durationAndSeparator = fixture.debugElement.queryAll(
            By.css('h3:not(.name)')
        );
        const descriptionParagraph = fixture.debugElement.query(
            By.css('.description')
        );
        const skillsParagraph = fixture.debugElement.query(By.css('.skills'));

        expect(unfoldedClassesElements).toBeFalsy();
        expect(headingGifs).toBeFalsy();
        expect(durationAndSeparator.length).toBe(2);
        expect(descriptionParagraph).toBeFalsy();
        expect(skillsParagraph).toBeFalsy();
    });

    it('should unfold card', () => {
        component.cardContent = standardExperience;

        component['toggleCard']();

        fixture.detectChanges();

        const unfoldedButtonText = fixture.debugElement.query(
            By.css('button.unfolded')
        ).nativeElement.textContent;
        const headingGifs = fixture.debugElement.query(By.css('.heading-gif'));
        const durationAndSeparator = fixture.debugElement.queryAll(
            By.css('h3:not(.name)')
        );
        const chevron = fixture.debugElement.query(By.css('.chevron.unfolded'));
        const descriptionParagraph = fixture.debugElement.query(
            By.css('.description')
        );
        const skillsParagraph = fixture.debugElement.query(By.css('.skills'));

        expect(unfoldedButtonText).toContain(standardExperience.name);
        expect(headingGifs).toBeFalsy();
        expect(durationAndSeparator.length).toBe(2);
        expect(chevron).toBeTruthy();
        expect(descriptionParagraph).toBeTruthy();
        expect(skillsParagraph).toBeTruthy();
    });

    it('should fold an unfolded card', () => {
        component.cardContent = standardExperience;

        component['toggleCard']();

        fixture.detectChanges();

        const unfoldedButtonText = fixture.debugElement.query(
            By.css('button.unfolded')
        ).nativeElement.textContent;
        const headingGifs = fixture.debugElement.query(By.css('.heading-gif'));
        const durationAndSeparator = fixture.debugElement.queryAll(
            By.css('h3:not(.name)')
        );
        const chevron = fixture.debugElement.query(By.css('.chevron.unfolded'));
        let descriptionParagraph = fixture.debugElement.query(
            By.css('.description')
        );
        let skillsParagraph = fixture.debugElement.query(By.css('.skills'));

        expect(unfoldedButtonText).toContain(standardExperience.name);
        expect(headingGifs).toBeFalsy();
        expect(durationAndSeparator.length).toBe(2);
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

    it('should unfold card without skills and period', () => {
        component.cardContent = experienceWithoutAttachedSkillsAndPeriod;

        component['toggleCard']();

        fixture.detectChanges();

        const unfoldedButtonText = fixture.debugElement.query(
            By.css('button.unfolded')
        ).nativeElement.textContent;
        const headingGifs = fixture.debugElement.query(By.css('.heading-gif'));
        const durationAndSeparator = fixture.debugElement.query(
            By.css('h3:not(.name)')
        );
        const chevron = fixture.debugElement.query(By.css('.chevron.unfolded'));
        const descriptionParagraph = fixture.debugElement.query(
            By.css('.description')
        );
        const skillsParagraph = fixture.debugElement.query(By.css('.skills'));

        expect(unfoldedButtonText).toContain(
            experienceWithoutAttachedSkillsAndPeriod.name
        );
        expect(headingGifs).toBeFalsy();
        expect(durationAndSeparator).toBeFalsy();
        expect(chevron).toBeTruthy();
        expect(descriptionParagraph).toBeTruthy();
        expect(skillsParagraph).toBeFalsy();
    });

    it('should unfold card with gifs', () => {
        component.cardContent = experienceWithGifs;

        component['toggleCard']();

        fixture.detectChanges();

        const unfoldedButtonText = fixture.debugElement.query(
            By.css('button.unfolded')
        ).nativeElement.textContent;
        const headingGifs = fixture.debugElement.queryAll(
            By.css('.heading-gif')
        );
        const durationAndSeparator = fixture.debugElement.queryAll(
            By.css('h3:not(.name)')
        );
        const chevron = fixture.debugElement.query(By.css('.chevron.unfolded'));
        const descriptionParagraph = fixture.debugElement.query(
            By.css('.description')
        );
        const skillsParagraph = fixture.debugElement.query(By.css('.skills'));

        expect(unfoldedButtonText).toContain(experienceWithGifs.name);
        expect(headingGifs.length).toBe(2);
        expect(durationAndSeparator.length).toBe(2);
        expect(chevron).toBeTruthy();
        expect(descriptionParagraph).toBeTruthy();
        expect(skillsParagraph).toBeTruthy();
    });
});
