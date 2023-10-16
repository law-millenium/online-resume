import { Component } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { CategoryState } from './core/category.state';

export interface AppState {
    categoryState: CategoryState;
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, ContentComponent],
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'CV Bastien LAHAYE';
}
