import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-summary',
    standalone: true,
    imports: [],
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent {}
