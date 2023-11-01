import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { professionalExperiences } from './professional-experiences';

@Component({
    selector: 'app-professional-experiences',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './professional-experiences.component.html',
    styleUrls: ['./professional-experiences.component.scss']
})
export class ProfessionalExperiencesComponent {
    protected professionalExperiences = professionalExperiences;
    protected isContentHidden = true;
    protected selectedCompanyName?: string;

    protected toggleContentForExperience(companyName: string) {
        this.selectedCompanyName =
            this.selectedCompanyName == companyName ? undefined : companyName;
    }
}
