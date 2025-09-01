import { Component } from '@angular/core';
import { TicketBoardComponent } from '@shared/components/ticket-board/ticket-board.component';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { LottieIconComponent } from '@shared/components/lottie-icon/lottie-icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { TreeSelectModule } from 'primeng/treeselect';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'q-task-management',
  imports: [
    FormsModule,
    LottieIconComponent,TicketBoardComponent,
    InputTextModule, ButtonModule,
    TreeSelectModule,
    IconFieldModule, InputIconModule, TranslateModule],
  templateUrl: './task-management.component.html',
  styleUrl: './task-management.component.scss'
})
export class TaskManagementComponent {
  nodes = [{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
}];
  selectedNodes: Record<string,boolean>[] = [];

  handleResetFilter() {
    console.log(this.selectedNodes);
    this.selectedNodes = [];
  }
}
