import { Component, computed, input, NgZone, signal } from '@angular/core';
import { AnimationItem, BMCompleteEvent, BMDestroyEvent, BMSegmentStartEvent } from 'lottie-web';
import { AnimationOptions, BMCompleteLoopEvent, LottieComponent, BMEnterFrameEvent, BMRenderFrameErrorEvent, BMConfigErrorEvent } from 'ngx-lottie';


@Component({
  selector: 'q-lottie-icon',
  imports: [LottieComponent],
  templateUrl: './lottie-icon.component.html',
  styleUrl: './lottie-icon.component.scss'
})
export class LottieIconComponent {
  trigger= input<'click'|'hover'|'loop-hover'| 'loop'>('hover')
  width = input<string>('40px');
  containerMinWidth = input<string>('fit-content');
  height = input<string>('40px');
  iconSource = input<string>();
  options = input<AnimationOptions>({
    path: '/assets/icons/animation/community.json',
    loop: true,
    renderer: 'svg',
    autoplay: false
  });

  styles = input<Partial<CSSStyleDeclaration>>({
    margin: '0 auto',
    cursor: 'pointer'
  });
  class= input<string>();
  optionsConfig = computed(()=>({...this.options(), path: this.iconSource()}));

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
    if(this.trigger() === 'loop') {
      return;
    }  
    if(!this.isAnimationCompleted()){
      return;
    }
    if(['hover', 'loop-hover'].includes(this.trigger())) {
      this.animationItem.setLoop(this.trigger() === 'loop-hover');
      this.isAnimationCompleted.update(()=>false);
      this.play();
    }
  }

  onMouseLeave() {
    if(this.trigger() === 'loop') {
      return;
    } 
    if(['loop-hover'].includes(this.trigger())) {
      this.stop();
    }
    this.isAnimationCompleted.update(()=>true);
  }
  
  onLottieClick() {
    if(this.trigger() === 'click') {
      if(this.animationItem.loop) {
        this.animationItem.setLoop(false);
      }
      this.play();
    }
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
    if(this.trigger() === 'loop') {
      this.animationItem.setLoop(true);
       this.animationItem.autoplay = true;
       this.animationItem.playSpeed = 0.1;
       this.play();
    }
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  enterFrame(event: BMEnterFrameEvent) {
      // console.log('enterFrame', event)
  }

  segmentStart(event: BMSegmentStartEvent) {
      console.log('segmentStart', event)
  }

  complete(event: BMCompleteEvent) {
    if( ['click','hover'].includes(this.trigger())) {
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
