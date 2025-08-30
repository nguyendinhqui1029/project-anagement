import { Component, EventEmitter, input, Output } from '@angular/core';
import { LottieIconComponent } from '@shared/components/lottie-icon/lottie-icon.component';

@Component({
  selector: 'q-header',
  imports: [LottieIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = input.required<string>();
  isShowNavigate = input<boolean>(true);
  @Output() handleNavigateClick = new EventEmitter();
}
