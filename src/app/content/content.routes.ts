import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'summary'
    },
    {
        path: 'summary',
        loadComponent: () =>
            import('./summary/summary.component').then(
                (m) => m.SummaryComponent
            )
    }
];
