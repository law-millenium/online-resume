import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
    providedIn: 'root'
})
export class ToggleMenuService implements OnDestroy {
    public toggle = new Subject<void>();

    ngOnDestroy() {
        this.toggle.complete();
    }
}
