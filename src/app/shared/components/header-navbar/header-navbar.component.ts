import { Component, inject, signal } from '@angular/core';
import { LayoutService } from '@core/services/layout.service';
import { ButtonModule } from 'primeng/button';
import { LottieIconComponent } from '@shared/components/lottie-icon/lottie-icon.component';

@Component({
  selector: 'q-header-navbar',
  imports: [ButtonModule, LottieIconComponent],
  templateUrl: './header-navbar.component.html',
  styleUrl: './header-navbar.component.scss'
})
export class HeaderNavbarComponent {
    layoutService: LayoutService = inject(LayoutService);
    sidebarStatus = signal(true);

    handleClick() {
      this.sidebarStatus.update(value=>!value);
      this.layoutService.setSidebarStatus(this.sidebarStatus())
    }
}
