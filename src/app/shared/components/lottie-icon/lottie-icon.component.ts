import { Component, input, NgZone, signal } from '@angular/core';
import { AnimationItem, BMCompleteEvent, BMDestroyEvent, BMSegmentStartEvent } from 'lottie-web';
import { AnimationOptions, BMCompleteLoopEvent, LottieComponent, BMEnterFrameEvent, BMRenderFrameErrorEvent, BMConfigErrorEvent } from 'ngx-lottie';


@Component({
  selector: 'q-lottie-icon',
  imports: [LottieComponent],
  templateUrl: './lottie-icon.component.html',
  styleUrl: './lottie-icon.component.scss'
})
export class LottieIconComponent {
  width = input<string>('50px');
  height = input<string>('50px');
  options = input<AnimationOptions&{trigger: 'click'|'hover'|'loop-hover'}>({
    path: '/assets/icons/animation/Loading.json',
    loop: true,
    autoplay: false,
    trigger: 'hover'
  });

  styles = input<Partial<CSSStyleDeclaration>>({
    maxWidth: '50px',
    margin: '0 auto',
    cursor: 'pointer'
  });
  class= input<string>();
  optionsConfig = signal<AnimationOptions&{trigger: 'click'|'hover'|'loop-hover'}>(this.options());

  private animationItem!: AnimationItem;
  private isAnimationCompleted = signal<boolean>(true);

  private play() {
    this.animationItem.play();
  }
  private pause() {
    this.animationItem.pause();
  }

  private stop() {
    this.animationItem.stop();
  }

  private restart() {
    this.stop();
    this.play();
  }

  onMouseOver() {    
    if(!this.isAnimationCompleted()){
      return;
    }
    if(['hover', 'loop-hover'].includes(this.options().trigger)) {
      this.animationItem.setLoop(this.options().trigger === 'loop-hover');
      this.isAnimationCompleted.update(()=>false);
      this.play();
    }
  }

  onMouseLeave() {
    if(['loop-hover'].includes(this.options().trigger)) {
      this.stop();
    }
    this.isAnimationCompleted.update(()=>true);
  }
  
  onLottieClick() {
    if(this.options().trigger === 'click') {
      if(this.animationItem.loop) {
        this.animationItem.setLoop(false);
      }
      this.play();
    }
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }


  updateAnimation(): void {
    // this.options.;
  }

  onLoopComplete(event: BMCompleteLoopEvent): void {
    console.log('event',event)
    NgZone.assertNotInAngularZone();
}

  configReady() {
    console.log('configReady')
  }

  dataReady() {
      console.log('dataReady')
  }

  domLoaded() {
      console.log('domLoaded')
  }

  enterFrame(event: BMEnterFrameEvent) {
      // console.log('enterFrame', event)
  }

  segmentStart(event: BMSegmentStartEvent) {
      console.log('segmentStart', event)
  }

  complete(event: BMCompleteEvent) {
    if( ['click','hover'].includes(this.options().trigger)) {
      this.stop();
      return;
    }
    this.isAnimationCompleted.update(()=>true);
      console.log('complete', event)  
  }

  destroy(event: BMDestroyEvent) {
      console.log('destroy', event)
  }

  error(event: BMRenderFrameErrorEvent | BMConfigErrorEvent) {
      console.log('error', event)
  }
}
