import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from './card';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
    @Input()
    public cardContent!: Card;

    protected isContentHidden = true;
    protected isFolded = true;

    protected toggleCard() {
        this.isFolded = !this.isFolded;
    }
}
