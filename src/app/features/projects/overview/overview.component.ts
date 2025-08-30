import { Component, computed } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { LottieIconComponent } from '@shared/components/lottie-icon/lottie-icon.component';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'q-overview',
  imports: [ProgressBarModule, TranslateModule ,BreadcrumbComponent, LottieIconComponent, HeaderComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  items = computed(()=>[{label:'Project name', routerLink: '/projects/1'}]);
  
  handleNavigateClick(path: string) {
    console.log(path)
  }
}
