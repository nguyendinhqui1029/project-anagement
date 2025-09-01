import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketPriority, TicketStatus, TicketType } from '@core/enums/project.enum';
import { BreadcrumbService } from '@core/services/breadcrumb.service';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '@shared/components/header/header.component';
import { LottieIconComponent } from '@shared/components/lottie-icon/lottie-icon.component';
import { TicketItemComponent } from '@shared/components/ticket-item/ticket-item.component';
import { ProgressBarModule } from 'primeng/progressbar';
@Component({
  selector: 'q-overview',
  imports: [
    ProgressBarModule, 
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
  taskItems = computed(() =>[
  {
    id: '1',
    title: 'Task 1',
    status: 'Backlog' as TicketStatus,
    description: 'Task 1 description',
    type: 'Task' as TicketType,
    priority: 'Medium' as TicketPriority,
    reported: {
      id: 'u1',
      name: 'John Doe',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    },
    assignee: {
      id: 'u2',
      name: 'Jane Smith',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    }
  },
  {
    id: '2',
    title: 'Task 2',
    status: 'Open'  as TicketStatus,
    description: 'Task 2 description',
    type: 'Bug' as TicketType,
    priority: 'High' as TicketPriority,
    reported: {
      id: 'u1',
      name: 'John Doe',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    },
    assignee: {
      id: 'u3',
      name: 'Alice Lee',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    }
  },
  {
    id: '3',
    title: 'Task 3',
    status: 'ToDo'  as TicketStatus,
    description: 'Task 3 description',
    type: 'Story' as TicketType,
    priority: 'Low' as TicketPriority,
    reported: {
      id: 'u2',
      name: 'Jane Smith',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    },
    assignee: {
      id: 'u4',
      name: 'Bob Johnson',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    }
  },
  {
    id: '4',
    title: 'Task 4',
    status: 'In_Progress'  as TicketStatus,
    description: 'Task 4 description',
    type: 'Task' as TicketType,
    priority: 'Medium' as TicketPriority,
    reported: {
      id: 'u1',
      name: 'John Doe',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    },
    assignee: {
      id: 'u5',
      name: 'Carol King',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    }
  },
  {
    id: '5',
    title: 'Task 5',
    status: 'In_Review'  as TicketStatus,
    description: 'Task 5 description',
    type: 'Bug' as TicketType,
    priority: 'High' as TicketPriority,
    reported: {
      id: 'u2',
      name: 'Jane Smith',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    },
    assignee: {
      id: 'u1',
      name: 'John Doe',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    }
  },
  {
    id: '6',
    title: 'Task 6',
    status: 'In_Testing'  as TicketStatus,
    description: 'Task 6 description',
    type: 'Story' as TicketType,
    priority: 'Medium' as TicketPriority,
    reported: {
      id: 'u3',
      name: 'Alice Lee',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    },
    assignee: {
      id: 'u4',
      name: 'Bob Johnson',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    }
  },
  {
    id: '7',
    title: 'Task 7',
    status: 'Blocked'  as TicketStatus,
    description: 'Task 7 description',
    type: 'Task' as TicketType,
    priority: 'Highest' as TicketPriority,
    reported: {
      id: 'u1',
      name: 'John Doe',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    },
    assignee: {
      id: 'u5',
      name: 'Carol King',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    }
  },
  {
    id: '8',
    title: 'Task 8',
    status: 'Resolved'  as TicketStatus,
    description: 'Task 8 description',
    type: 'Bug' as TicketType,
    priority: 'Low' as TicketPriority,
    reported: {
      id: 'u2',
      name: 'Jane Smith',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    },
    assignee: {
      id: 'u1',
      name: 'John Doe',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    }
  },
  {
    id: '9',
    title: 'Task 9',
    status: 'Done'  as TicketStatus,
    description: 'Task 9 description',
    type: 'Story' as TicketType,
    priority: 'Medium' as TicketPriority,
    reported: {
      id: 'u3',
      name: 'Alice Lee',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    },
    assignee: {
      id: 'u4',
      name: 'Bob Johnson',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    }
  },
  {
    id: '10',
    title: 'Task 10',
    status: 'Closed'  as TicketStatus,
    description: 'Task 10 description',
    type: 'Task' as TicketType,
    priority: 'Highest' as TicketPriority,
    reported: {
      id: 'u1',
      name: 'John Doe',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    },
    assignee: {
      id: 'u5',
      name: 'Carol King',
      avatarUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    }
  }
]);
  progress = 10;
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
