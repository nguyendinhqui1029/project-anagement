import { httpResource } from '@angular/common/http';
import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectModel } from '@core/models/project.model';
import { PrimeNgImportsModule } from '@core/modules/primeng.module';
import { BreadcrumbService } from '@core/services/breadcrumb.service';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '@shared/components/header/header.component';
import { LottieIconComponent } from '@shared/components/lottie-icon/lottie-icon.component';
import { TicketItemComponent } from '@shared/components/ticket-item/ticket-item.component';
import { environment } from 'environments/environment';
@Component({
  selector: 'q-overview',
  imports: [
    PrimeNgImportsModule,
    TranslateModule , 
    LottieIconComponent, 
    HeaderComponent, TicketItemComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private breadcrumbItems = inject(BreadcrumbService);

  requestOptions = {
      reportProgress: true,
      transferCache: true,
      keepalive: true,  
      mode: 'cors'
  };
  projectResource = httpResource<{status:number, data: ProjectModel}>(() => ({
      url:`${environment.apiUrl}/project/${this.activatedRoute.snapshot.params['id']}`,
      method: 'GET',
      ...this.requestOptions
    }));

  boardDefault = computed(() => this.projectResource.hasValue() ? this.projectResource.value().data.boards.find(board => board.isDefault) : null);
  ngOnInit(): void {
    this.breadcrumbItems.setBreadcrumbItems([{label:'Project name', routerLink: '/projects/1'}]);
  }
  handleNavigateClick(path: string) {
    this.router.navigate([path], { relativeTo: this.activatedRoute });
  }

  openDialogMembersManagement(){
    // Open dialog for managing project members
  }
}
