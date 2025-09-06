import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from '@core/services/user.service';
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
  private userService: UserService = inject(UserService);

  constructor() {
    afterNextRender(()=>{
      if(isPlatformBrowser(this.platformId)) {
        this.translate.setFallbackLang('en');
        this.translate.use('en');
        this.userService.setUserModelStatus({
                id: 5,
                username: 'qa01',
                email: 'qa01@example.com',
                fullName: 'QA Engineer',
                avatar: 'https://i.pravatar.cc/150?img=5',
                role: 'QA',
                status: 'Active'
            });
      }
    })
  }
}
