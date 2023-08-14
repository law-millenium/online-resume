import { Component } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, ContentComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'online-resume';
}
