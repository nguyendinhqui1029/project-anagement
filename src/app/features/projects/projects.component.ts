import { DatePipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, computed, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectModel } from '@core/models/project.model';
import { BreadcrumbService } from '@core/services/breadcrumb.service';
import { TranslateModule } from '@ngx-translate/core';
import { LottieIconComponent } from '@shared/components/lottie-icon/lottie-icon.component';
import { environment } from 'environments/environment';
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

  projectListResource = httpResource<{status:number, data: ProjectModel[]}>(() => ({
    url:`${environment.apiUrl}/project`,
    method: 'GET',
    reportProgress: true,
    transferCache: true,
    keepalive: true,  
    mode: 'cors', 
  }));

  ngOnInit(): void {
    this.breadcrumbItems.setBreadcrumbItems([]);
  }

  handleNavigateToProjectDetail(id: string) {
    this.router.navigate(['/projects', id]);
  }

  handleOpenDialogAddProject() {
    // Open dialog to add new project
  }
}
