import { httpResource } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiResponse, CommonOption } from '@core/models/common.model';
import { DateRangeModel } from '@core/models/date-range.model';
import { ProjectModel, ProjectRequestBody } from '@core/models/project.model';
import { UserModel } from '@core/models/user.model';
import { PrimeNgImportsModule } from '@core/modules/primeng.module';
import { ProjectService } from '@core/services/project.service';
import { UserService } from '@core/services/user.service';
import { DateRangeComponent } from '@shared/components/date-range/date-range.component';
import { environment } from 'environments/environment';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'q-add-project',
  imports: [PrimeNgImportsModule, DateRangeComponent],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.scss'
})
export class AddProjectComponent {
  private dynamicDialogRef: DynamicDialogRef = inject(DynamicDialogRef);
  private projectService: ProjectService = inject(ProjectService);
  private userService: UserService = inject(UserService);

  dateRange: DateRangeModel = {
    startDate: undefined,
    endDate: undefined,
    isUnlimited: false
  };

  allUserOptions = httpResource<ApiResponse<CommonOption<number,{avatar: string}>[]>>(() => ({
    url:`${environment.apiUrl}/user?limit=999999&page=1&status=Active`,
    method: 'GET',
    reportProgress: true,
    transferCache: true,
    keepalive: true,  
    mode: 'cors', 
  }),
  {
    defaultValue: {
      statusCode: 200,
      data: []
    },
    parse: (value) => {
      return {
        statusCode: (value as  ApiResponse<{filterResult: UserModel[]}>).statusCode,
        data: (value as  ApiResponse<{filterResult: UserModel[]}>).data.filterResult.map(item=>{
          return {
          label: item.fullName,
          value: item.id,
          record: {
            avatar: item.avatar || ''
          }
        }
        })
      }
    }
  }); 
  addProjectForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    projectTime: new FormControl<DateRangeModel>({startDate: undefined, endDate: undefined, isUnlimited: false}),
    participants: new FormControl([])
  });

  closeDialog(result?: ApiResponse<ProjectModel>) {
    this.dynamicDialogRef.close(result);
  }

  handleSubmit() {
    if(this.addProjectForm.valid) {
      const body:ProjectRequestBody = {
            name: this.addProjectForm.value.name || '',
            description: this.addProjectForm.value.description || '',
            startDate: this.addProjectForm.value.projectTime?.startDate?.getTime(),
            endDate:this.addProjectForm.value.projectTime?.endDate?.getTime(),
            isUnlimited: this.addProjectForm.value.projectTime?.isUnlimited || false,
            participants: this.addProjectForm.value.participants?.map(id=>({id})) || [],
            owner: { id: this.userService.getUserLoginValue()!.id}
      }
      this.projectService.createProject(body).subscribe(response=>response.statusCode === 200 && this.closeDialog(response));
    }
  }
}
