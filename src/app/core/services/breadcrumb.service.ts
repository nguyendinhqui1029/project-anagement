import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbItems = new BehaviorSubject<MenuItem[]>([]);
  breadcrumbItems$ = this.breadcrumbItems.asObservable();

  setBreadcrumbItems(items: MenuItem[]) {
    this.breadcrumbItems.next(items);
  }
}
