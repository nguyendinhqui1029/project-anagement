import { DatePipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, computed, inject, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectModel } from '@core/models/project.model';
import { BreadcrumbService } from '@core/services/breadcrumb.service';
import { TranslateModule } from '@ngx-translate/core';
import { LottieIconComponent } from '@shared/components/lottie-icon/lottie-icon.component';
import { environment } from 'environments/environment';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddProjectComponent } from '@shared/components/dialogs/add-project/add-project.component';
import { PrimeNgImportsModule } from '@core/modules/primeng.module';
import { ApiResponse } from '@core/models/common.model';
import { ProjectService } from '@core/services/project.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'q-projects',
  imports: [
    TranslateModule, 
    LottieIconComponent, 
    DatePipe,
    PrimeNgImportsModule
    ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  providers: [ConfirmationService]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private breadcrumbItems = inject(BreadcrumbService);
  private dialogService = inject(DialogService);
  private projectService = inject(ProjectService);
  private confirmationService = inject(ConfirmationService);
  
  dynamicDialogRef!: DynamicDialogRef;

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

  handleNavigateToProjectDetail(event: MouseEvent,id: number) {
    event.stopPropagation();
    this.router.navigate(['/projects', id]);
  }

  handleOpenDialogAddProject() {
    this.dynamicDialogRef = this.dialogService.open(AddProjectComponent, {
            showHeader: false,
            width: '55vw',
            modal: true,
            contentStyle: { overflow: 'auto' },
            breakpoints: {
                '960px': '63vw',
                '750px': '85vw',
                '600px': '90vw'
            }
      });

    this.dynamicDialogRef.onClose.subscribe((data: ApiResponse<ProjectModel>) => {
      if(data?.statusCode === 200) {
        this.projectListResource.reload();
      }
    });
  }

  handleDeleteProject(event: MouseEvent,id: number) {
    event.stopPropagation();
    this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure that you want to proceed?',
            closable: false,
            closeOnEscape: true,
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true,
            },
            acceptButtonProps: {
                label: 'Delete',
            },
            accept: () => {
              this.projectService.deleteProject(id).subscribe(response => {
                if(response?.statusCode === 200) {
                  this.projectListResource.reload();
                }
              })
            }
    });
  }

  ngOnDestroy() {
    if (this.dynamicDialogRef) {
      this.dynamicDialogRef.close();
    }
  }
}
