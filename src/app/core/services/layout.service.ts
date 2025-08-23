import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private toggleSidebar = new BehaviorSubject<boolean>(true);
  sidebar$ = this.toggleSidebar.asObservable();

  setSidebarStatus(value: boolean) {
    this.toggleSidebar.next(value);
  }
}
