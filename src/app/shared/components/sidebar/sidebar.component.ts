import { CommonModule } from '@angular/common';
import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '@core/services/layout.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LottieIconComponent } from '@shared/components/lottie-icon/lottie-icon.component';

@Component({
  selector: 'q-sidebar',
  imports: [CommonModule,TranslateModule, RouterLink, LottieIconComponent, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{
  private destroyRef: DestroyRef = inject(DestroyRef);
  private translationService = inject(TranslateService);
  layoutService: LayoutService = inject(LayoutService);
  sidebarStatus = signal(true);
  
  ngOnInit(): void {
   this.layoutService.sidebar$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value: boolean)=>this.sidebarStatus.update(()=>value))
  }
  menuItems = computed(()=>[
    {
      id: 'PROJECTS',
      iconUrl: '/assets/icons/animation/project.json',
      name: this.translationService.instant('projects'),
      path: 'projects'
    },
    {
      id: 'MEETINGS',
      iconUrl: '/assets/icons/animation/community.json',
      name: this.translationService.instant('meetings'),
      path: 'meetings'
    },
    {
      id: 'SETTINGS',
      iconUrl: '/assets/icons/animation/setting.json',
      name: this.translationService.instant('settings'),
      path: 'settings'
    },
    {
      id: 'MINI_GAMES',
      iconUrl: '/assets/icons/animation/gamepad.json',
      name: this.translationService.instant('mini_game'),
      path: 'mini-games'
    }
  ])
}
