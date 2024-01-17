import { Component } from '@angular/core';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryState } from './core/category/category.state';
import { SidenavState } from './core/sidenav/sidenav.state';

export interface AppState {
    categoryState: CategoryState;
    sidenavState: SidenavState;
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, ContentComponent],
    templateUrl: './app.component.html'
})
export class AppComponent {}
