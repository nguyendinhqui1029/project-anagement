import { Component, input } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { LottieIconComponent } from '@shared/components/lottie-icon/lottie-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'q-breadcrumb',
  imports: [BreadcrumbModule, LottieIconComponent, RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
items = input<MenuItem[]>();
home: MenuItem = { icon: '/assets/icons/animation/home.json', routerLink: '/projects' };
    
}
