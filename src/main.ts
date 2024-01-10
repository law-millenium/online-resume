import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import * as categoryEffects from './app/core/category/category.effects';
import { selectedCategoryReducer } from './app/core/category/category.reducers';
import { isSidenavOpenedReducer } from './app/core/sidenav/sidenav.reducers';

bootstrapApplication(AppComponent, {
    providers: [
        provideAnimations(),
        provideStore({
            categoryState: selectedCategoryReducer,
            sidenavState: isSidenavOpenedReducer
        }),
        provideStoreDevtools({
            maxAge: 25, // Retains last 25 states
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
            trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
            traceLimit: 75 // maximum stack trace frames to be stored (in case trace option was provided as true)
        }),
        provideEffects(categoryEffects)
    ]
}).catch((err) => console.error(err));
