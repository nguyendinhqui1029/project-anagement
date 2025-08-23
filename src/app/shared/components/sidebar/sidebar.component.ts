import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LottieIconComponent } from '@shared/components/lottie-icon/lottie-icon.component';

@Component({
  selector: 'q-sidebar',
  imports: [CommonModule,TranslateModule, RouterLink, LottieIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private translationService = inject(TranslateService);
  menuItems = computed(()=>[
    {
      id: 'DASHBOARD',
      iconUrl: '/assets/icons/animation/dashboard.json',
      name: this.translationService.instant('dashboard'),
      path: ''
    },
    {
      id: 'PROJECTS',
      iconUrl: '/assets/icons/animation/project.json',
      name: this.translationService.instant('projects'),
      path: ''
    },
    {
      id: 'MEETINGS',
      iconUrl: '/assets/icons/animation/community.json',
      name: this.translationService.instant('meetings'),
      path: ''
    },
    {
      id: 'SETTINGS',
      iconUrl: '/assets/icons/animation/setting.json',
      name: this.translationService.instant('settings'),
      path: ''
    },
    {
      id: 'MINI_GAMES',
      iconUrl: '/assets/icons/animation/gamepad.json',
      name: this.translationService.instant('mini_game'),
      path: ''
    }
  ])
}
