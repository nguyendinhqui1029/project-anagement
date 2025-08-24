import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from '@core/services/layout.service';
import { SidebarComponent } from '@shared/components/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'q-main',
  imports: [RouterOutlet, ButtonModule, SidebarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  layoutService: LayoutService = inject(LayoutService);
  sidebarStatus = signal(true);
  gridTemplate = computed(()=> this.sidebarStatus() ? '18rem 1fr' : '4.25rem 1fr');

  ngOnInit(): void {
    this.layoutService.sidebar$.subscribe(value=> this.sidebarStatus.update(()=>value));
  }

  handleClick() {
    this.layoutService.setSidebarStatus(!this.sidebarStatus())
  }
}
