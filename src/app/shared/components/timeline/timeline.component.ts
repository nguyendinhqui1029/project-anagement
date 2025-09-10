import { CdkDrag, CdkDragDrop, CdkDragEnd, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { LottieIconComponent } from '@shared/components/lottie-icon/lottie-icon.component';

 interface TimelineEvent {
  id: number;         // id của event
  title: string;      // tên event
  left: number;       // vị trí ngang (px)
  width: number;  
  top: number;
}

 interface TimelineResource {
  id: number;               // id của resource (row)
  name: string;             // tên resource
  events: TimelineEvent[];  // danh sách event thuộc resource
}

@Component({
  selector: 'q-timeline',
  imports: [LottieIconComponent, CdkDropList, CdkDrag],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
 days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  resources = [
    { id: 0, name: 'Resource A', events: [{id:1, title: 'Event 1',top: 0, left: 100, width: 300 }, {id:2, title: 'Event 2', top: 40,left: 160, width: 150 }] },
    { id: 1, name: 'Resource B', events: [] },
    { id: 2, name: 'Resource C', events: [] },
    { id: 3, name: 'Resource D', events: [] },
  ];

  rowHeight = 80;  // chiều cao mỗi resource

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

  onEventDragEnd(event: CdkDragEnd, resource: TimelineResource, draggedEvent: TimelineEvent, eventIndex: number) {
    const { x, y } = event.distance;
    console.log(x,y)
     // kiểm tra overlap trong cùng resource
    if (this.isOverlapItem(resource.events, draggedEvent)) {
      console.log('isOverlapItem')
      return;
    }
      console.log('NO-isOverlapItem')

    //  draggedEvent.left += x; // quay về vị trí cũ
    //   draggedEvent.top += y; // quay về vị trí cũ
      resource.events[eventIndex].top =0;
      resource.events[eventIndex].left += x;
    // reset drag state
    // event.source.reset();

  }

  // Check overlap
  isOverlapItem(events: TimelineEvent[], current: TimelineEvent): boolean {
    const currentTop = current.top;
    const eventOverlap = events.filter(event=>{
      const totalWidth = current.width + event.width;
      const tempTotalWidth = Math.min(current.left,event.left) + Math.max(current.left+current.width, event.left+event.width);
      return event.top === currentTop && totalWidth > tempTotalWidth
    });
    return !!eventOverlap;
  }
    
  connectedDropLists(resourceId: string): string[] {
      return this.resources.filter(col => col.id.toString() !== resourceId)
        .map(col => col.id.toString());
  }
}
// import { ResizeEvent } from 'angular-resizable-element';