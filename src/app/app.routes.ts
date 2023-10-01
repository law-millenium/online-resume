import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: ContentComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./content/content.routes').then(
                        (m) => m.CONTENT_ROUTES
                    )
            }
        ]
    }
];
