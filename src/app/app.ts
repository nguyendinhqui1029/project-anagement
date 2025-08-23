import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'q-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('project-management');
  private translate = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(()=>{
      if(isPlatformBrowser(this.platformId)) {
        this.translate.setFallbackLang('en');
        this.translate.use('en');
      }
    })
  }
}
