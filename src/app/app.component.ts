import { Component } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, ContentComponent, RouterOutlet],
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'CV Bastien LAHAYE';
}
