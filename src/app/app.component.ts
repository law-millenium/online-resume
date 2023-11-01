import { Component } from '@angular/core';
import { CategoryState } from './core/category.state';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';

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
