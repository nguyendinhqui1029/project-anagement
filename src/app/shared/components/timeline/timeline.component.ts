import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { LottieIconComponent } from '@shared/components/lottie-icon/lottie-icon.component';

 interface TimelineEvent {
  id: number;         // id của event
  title: string;      // tên event
  left: number;       // vị trí ngang (px)
  width: number;      // chiều rộng (px)
}

//  interface TimelineResource {
//   id: number;               // id của resource (row)
//   name: string;             // tên resource
//   events: TimelineEvent[];  // danh sách event thuộc resource
// }

@Component({
  selector: 'q-timeline',
  imports: [LottieIconComponent, CdkDropList, CdkDrag],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
 days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  resources = [
    { id: 1, name: 'Resource A', events: [{id:1, title: 'Event 1', left: 150, width: 300 }] },
    { id: 2, name: 'Resource B', events: [{id:2, title: 'Event 2', left: 450, width: 150 }] },
    { id: 3, name: 'Resource C', events: [] },
    { id: 4, name: 'Resource D', events: [] },
  ];

  onEventDropped(event: CdkDragDrop<TimelineEvent[]>) {
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

  connectedDropLists(statusColumn: string): string[] {
      return this.resources.filter(col => col.id.toString() !== statusColumn)
        .map(col => col.id.toString());
  }
}
// import { ResizeEvent } from 'angular-resizable-element';