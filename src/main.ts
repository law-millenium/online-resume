import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import {
    provideRouter,
    withPreloading,
    PreloadAllModules
} from '@angular/router';
import { APP_ROUTES } from './app/app.routes';

bootstrapApplication(AppComponent, {
    providers: [
        provideAnimations(),
        provideRouter(APP_ROUTES, withPreloading(PreloadAllModules))
    ]
}).catch((err) => console.error(err));
