import { Component, ElementRef, ViewChild, AfterViewInit, inject, PLATFORM_ID, signal, computed } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDragMove, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { isPlatformBrowser } from '@angular/common';
import { TicketPriority, TicketStatus, TicketType } from '@core/enums/project.enum';
import { TicketCardComponent } from '@shared/components/ticket-card/ticket-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { TicketModel } from '@core/models/ticket.model';

@Component({
  selector: 'q-ticket-board',
  imports: [CdkDropList, CdkDrag, TicketCardComponent, TranslateModule],
  templateUrl: './ticket-board.component.html',
  styleUrl: './ticket-board.component.scss'
})
export class TicketBoardComponent implements AfterViewInit {
  @ViewChild('boardContainer', { static: false }) boardContainer!: ElementRef<HTMLDivElement>;
  private platformId = inject(PLATFORM_ID);
  statusColumns = computed(() => [
    {
      status: TicketStatus.Backlog,
      items: [
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
      ] as TicketModel[]
    },
    {
      status: TicketStatus.Done,
      items: []  as TicketModel[]
    },
    {
      status: TicketStatus.InProgress,
      items: []  as TicketModel[]
    },
    {
      status: TicketStatus.Blocked,
      items: []  as TicketModel[]
    },
    {
      status: TicketStatus.Closed,
      items: []  as TicketModel[]
    },
    {
      status: TicketStatus.InTesting,
      items: []  as TicketModel[]
    }
  ]);

  containerTop = signal<number>(100);
  scrollSpeed = 10; 
  edgeSize = 150;    

  drop(event: CdkDragDrop<TicketModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  
  connectedDropLists(statusColumn: TicketStatus): string[] {
    return this.statusColumns().filter(col => col.status !== statusColumn)
      .map(col => col.status);
  }



  onDragMoved(event: CdkDragMove<TicketModel[]>, scrollContainer: HTMLElement) {
  const { x, y } = event.pointerPosition;
  const rect = scrollContainer.getBoundingClientRect();

  // scroll dọc
  if (y < rect.top + this.edgeSize) {
    scrollContainer.scrollTop -= this.scrollSpeed;
  } else if (y > rect.bottom - this.edgeSize) {
    scrollContainer.scrollTop += this.scrollSpeed;
  }

  // scroll ngang
  if (x < rect.left + this.edgeSize) {
    scrollContainer.scrollLeft -= this.scrollSpeed;
  } else if (x > rect.right - this.edgeSize) {
    scrollContainer.scrollLeft += this.scrollSpeed;
  }
}

  ngAfterViewInit() {
    if(isPlatformBrowser(this.platformId)) {
      const marginTopBottom = 118;
      const boundingClientRect=  this.boardContainer.nativeElement.getBoundingClientRect();
      this.containerTop.update(() => boundingClientRect.top + marginTopBottom);
    }
  }
}
