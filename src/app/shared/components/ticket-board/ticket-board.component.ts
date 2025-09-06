import { Component, ElementRef, ViewChild, AfterViewInit, inject, PLATFORM_ID, signal, computed, OnInit } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDragMove, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { isPlatformBrowser } from '@angular/common';
import { TicketPriority, TicketStatus, TicketType } from '@core/enums/project.enum';
import { TicketCardComponent } from '@shared/components/ticket-card/ticket-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { TicketModel } from '@core/models/ticket.model';
import { UserModel } from '@core/models/user.model';

@Component({
  selector: 'q-ticket-board',
  imports: [CdkDropList, CdkDrag, TicketCardComponent, TranslateModule],
  templateUrl: './ticket-board.component.html',
  styleUrl: './ticket-board.component.scss'
})
export class TicketBoardComponent implements AfterViewInit, OnInit {
  
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
            id: 1,
            username: 'johndoe',
            fullName: 'John Doe',
            status: 'Active',
            avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
          } as UserModel,
          assignee: {
            id: 2,
            username: 'janesmith',
            fullName: 'Jane Smith',
            status: 'active',
            avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
          } as UserModel
        },
        {
          id: '2',
          title: 'Task 2',
          status: 'Backlog' as TicketStatus,
          description: 'Task 2 description',
          type: 'Bug' as TicketType,
          priority: 'High' as TicketPriority,
          reported: {
            id: 1,
            username: 'johndoe',
            fullName: 'John Doe',
            status: 'active',
            avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
          } as UserModel,
          assignee: {
            id: 3,
            username: 'alicelee',
            fullName: 'Alice Lee',
            status: 'active',
            avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
          } as UserModel
        }
      ] as TicketModel[]
    },
    {
      status: TicketStatus.Done,
      items: [
        {
          id: '3',
          title: 'Task 3',
          status: 'ToDo' as TicketStatus,
          description: 'Task 3 description',
          type: 'Story' as TicketType,
          priority: 'Low' as TicketPriority,
          reported: {
            id: 3,
            username: 'alicelee',
            fullName: 'Alice Lee',
            status: 'active',
            avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
          } as UserModel,
          assignee: {
            id: 4,
            username: 'bobjohnson',
            fullName: 'Bob Johnson',
            status: 'active',
            avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
          } as UserModel
        }
      ] as TicketModel[]
    },
    {
      status: TicketStatus.InProgress,
      items: [
        {
          id: '4',
          title: 'Task 4',
          status: 'In_Progress' as TicketStatus,
          description: 'Task 4 description',
          type: 'Task' as TicketType,
          priority: 'Medium' as TicketPriority,
          reported: {
            id: 1,
            username: 'johndoe',
            fullName: 'John Doe',
            status: 'active',
            avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
          } as UserModel,
          assignee: {
            id: 5,
            username: 'carolking',
            fullName: 'Carol King',
            status: 'active',
            avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
          } as UserModel
        }
      ] as TicketModel[]
    },
    {
      status: TicketStatus.Blocked,
      items: [
        {
          id: '7',
          title: 'Task 7',
          status: 'Blocked' as TicketStatus,
          description: 'Task 7 description',
          type: 'Task' as TicketType,
          priority: 'Highest' as TicketPriority,
          reported: {
            id: 1,
            username: 'johndoe',
            fullName: 'John Doe',
            status: 'active',
            avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
          } as UserModel,
          assignee: {
            id: 5,
            username: 'carolking',
            fullName: 'Carol King',
            status: 'active',
            avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
          } as UserModel
        }
      ] as TicketModel[]
    },
    {
      status: TicketStatus.Closed,
      items: [
        {
          id: '10',
          title: 'Task 10',
          status: 'Closed' as TicketStatus,
          description: 'Task 10 description',
          type: 'Task' as TicketType,
          priority: 'Highest' as TicketPriority,
          reported: {
            id: 1,
            username: 'johndoe',
            fullName: 'John Doe',
            status: 'active',
            avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
          } as UserModel,
          assignee: {
            id: 5,
            username: 'carolking',
            fullName: 'Carol King',
            status: 'active',
            avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
          } as UserModel
        }
      ] as TicketModel[]
    },
    {
      status: TicketStatus.InTesting,
      items: [
        {
          id: '6',
          title: 'Task 6',
          status: 'In_Testing' as TicketStatus,
          description: 'Task 6 description',
          type: 'Story' as TicketType,
          priority: 'Medium' as TicketPriority,
          reported: {
            id: 3,
            username: 'alicelee',
            fullName: 'Alice Lee',
            status: 'active',
            avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
          } as UserModel,
          assignee: {
            id: 4,
            username: 'bobjohnson',
            fullName: 'Bob Johnson',
            status: 'active',
            avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
          } as UserModel
        }
      ] as TicketModel[]
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

  calculateContainerHight() {
    if (isPlatformBrowser(this.platformId)) {
      const marginTopBottom = 118;
      const boundingClientRect = this.boardContainer.nativeElement.getBoundingClientRect();
      this.containerTop.update(() => boundingClientRect.top + marginTopBottom);
    }
  }
  ngOnInit(): void {
    this.calculateContainerHight();
  }

  ngAfterViewInit() {
    this.calculateContainerHight();
  }
}
