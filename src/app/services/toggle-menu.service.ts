import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
    providedIn: 'root'
})
export class ToggleMenuService implements OnDestroy {
    public toggle = new Subject<boolean>();

    ngOnDestroy() {
        this.toggle.complete();
    }
}
