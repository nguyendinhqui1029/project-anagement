import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectStatus } from '@core/enums/project.enum';
import { ProjectModel } from '@core/models/project.model';
import { BreadcrumbService } from '@core/services/breadcrumb.service';
import { TranslateModule } from '@ngx-translate/core';
import { LottieIconComponent } from '@shared/components/lottie-icon/lottie-icon.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'q-projects',
  imports: [
    TranslateModule, 
    ProgressBarModule, 
    LottieIconComponent, 
    TooltipModule, 
    DatePipe
    ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  private router = inject(Router);
  private breadcrumbItems = inject(BreadcrumbService);

  projectStatusOptions = computed(()=>({
    OnTrack: {
      icon: '😃',
      description: 'Tiến độ ổn định'
    },
    AtRisk: {
      icon: '😐',
      description: 'Có vấn đề cần chú ý'
    },
    Delayed: {
      icon: '😫',
      description: 'Căng thẳng, bị chậm deadline'
    },
    Initiating: {
      icon: '🤔',
      description: 'Đang suy nghĩ lên kế hoạch.'
    },
    Pending: {
      icon: '😴',
      description: 'Tạm dừng, chờ ngày tiếp tục.'
    },
    Completed: {
      icon: '🥳',
      description: 'Hoàn tất dự án'
    }
  }));

  projectList = signal<ProjectModel[]>([{
  id: '1222',
  name: 'Project name 1',
  status: ProjectStatus.Initiating,
  memberCount: 3,
  startDate: new Date('2025-08-08'),
  endDate: new Date('2026-03-08'),
  projectProgress: 20
},
{
  id: '1223',
  name: 'Project name 3',
  status: ProjectStatus.Delayed,
  memberCount: 3,
  startDate: new Date('2025-08-08'),
  endDate: new Date('2026-03-08'),
  projectProgress: 10
},
{
  id: '1224',
  name: 'Project name 2',
  status: ProjectStatus.Pending,
  memberCount: 3,
  startDate: new Date('2025-08-08'),
  endDate: new Date('2026-03-08'),
  projectProgress: 5
}]);


  ngOnInit(): void {
    this.breadcrumbItems.setBreadcrumbItems([]);
  }

handleNavigateToProjectDetail(id: string) {
  this.router.navigate(['/projects', id]);
}
}
