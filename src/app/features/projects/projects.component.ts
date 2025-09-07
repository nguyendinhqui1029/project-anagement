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
  projectListResource = httpResource<ApiResponse<ProjectModel[]>>(() => ({
    url:`${environment.apiUrl}/project`,
    method: 'GET',
    reportProgress: true,
    transferCache: true,
    keepalive: true,  
    mode: 'cors'
  }), 
  {
    parse: (value)=>({
      statusCode: (value as ApiResponse<ProjectModel[]>).statusCode,
      data: (value as ApiResponse<ProjectModel[]>).data.sort((firstItem,secondeItem)=> new Date(secondeItem.createdAt).getTime() -  new Date(firstItem.createdAt).getTime())
    })
  });

  ngOnInit(): void {
    this.breadcrumbItems.setBreadcrumbItems([]);
  }

  handleNavigateToProjectDetail(event: MouseEvent,id: number) {
    event.stopPropagation();
    this.router.navigate(['/projects', id]);
  }

  handleOpenDialogUpsertProject(event: MouseEvent, project?: ProjectModel) {
    event.stopPropagation();
    this.dynamicDialogRef = this.dialogService.open(AddProjectComponent, {
            showHeader: false,
            width: '55vw',
            modal: true,
            contentStyle: { overflow: 'auto' },
            breakpoints: {
                '960px': '63vw',
                '750px': '85vw',
                '600px': '90vw'
            },
            data: {
                project
            },
      });

    this.dynamicDialogRef.onClose.subscribe((data: ApiResponse<ProjectModel>) => {
      if(data?.statusCode === 200) {        
        this.projectListResource.update((value)=>{
          const index = value!.data?.findIndex(item=>item.id === data.data.id);
          if(index >= 0 && project) {
            value?.data.splice(index,1, data.data);
          }
          if(!project) {
            value?.data?.unshift(data.data)
          }
          
          return {
          statusCode: data.statusCode, 
          data: value!.data
        }
        });
      }
    });
  }

  handleDeleteProject(event: MouseEvent,id: number) {
    event.stopPropagation();
    this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure that you want to proceed?',
            icon: 'alert',
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
                 this.projectListResource.update((value)=>({
                    statusCode: value!.statusCode, 
                    data: value!.data.filter(project=>project.id !== id)
                  }));
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
