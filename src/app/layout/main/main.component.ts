import { Component, computed, inject, OnInit, signal, DestroyRef, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbService } from '@core/services/breadcrumb.service';
import { LayoutService } from '@core/services/layout.service';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { HeaderNavbarComponent } from '@shared/components/header-navbar/header-navbar.component';
import { SidebarComponent } from '@shared/components/sidebar/sidebar.component';
import { MenuItem } from 'primeng/api';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'q-main',
  imports: [RouterOutlet, SidebarComponent, HeaderNavbarComponent, BreadcrumbComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  private destroyRef: DestroyRef = inject(DestroyRef);
  breadcrumbItems = inject(BreadcrumbService);
  layoutService: LayoutService = inject(LayoutService);
  sidebarStatus = signal<boolean>(true);
  items = signal<MenuItem[]>([]);
  containerLeft = signal<number>(288);
  gridTemplate = computed(()=> this.sidebarStatus() ? '18rem 1fr' : '4.25rem 1fr');

  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.layoutService.sidebar$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value=> this.sidebarStatus.update(()=>value));
    this.breadcrumbItems.breadcrumbItems$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value=> this.items.update(()=>value));
  }

  // initGridTemplate() {
  //   const marginLeftRight = 24;
  //   const boundingClientRect=  this.mainContainer.nativeElement.getBoundingClientRect();
  //   this.containerLeft.update(() => boundingClientRect.left + marginLeftRight);
  // }

  // ngAfterViewInit() {
  //   if(isPlatformBrowser(this.platformId)) {
  //     this.initGridTemplate();
  //   }
  // }
}
