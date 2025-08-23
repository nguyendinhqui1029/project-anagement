import { ChangeDetectorRef, Component, PLATFORM_ID, afterNextRender, forwardRef, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CKEditorModule, ChangeEvent } from '@ckeditor/ckeditor5-angular';

import {
  ClassicEditor,
  type EditorConfig
} from 'ckeditor5';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'q-ckeditor-wrapper',
  standalone: true,
  imports: [CommonModule, CKEditorModule],
  templateUrl: './ckeditor-wrapper.component.html',
  styleUrl: './ckeditor-wrapper.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CkeditorWrapperComponent),
      multi: true
    }
  ]
})
export class CkeditorWrapperComponent implements ControlValueAccessor {
  private changeDetector: ChangeDetectorRef = inject(ChangeDetectorRef);
  private platformId = inject(PLATFORM_ID);

  public onChange!: (value: string)=> void;
  public onTouched!:  ()=> void;

  public Editor!: typeof ClassicEditor;
  public config: EditorConfig = {};
  public value = '';
  public isDisabled = false;


   constructor() {
    afterNextRender(async () => {

      if (isPlatformBrowser(this.platformId)) {
        const { ClassicEditor } = await import('ckeditor5');
        const { CKEDITOR_CONFIG } = await import('@core/constants/ckeditor-config.constant');
        this.Editor = ClassicEditor;
        this.config = {licenseKey: 'GPL',...CKEDITOR_CONFIG} as EditorConfig;
        this.changeDetector.detectChanges();
      }
    });
  }

  dataEditorChange(event: ChangeEvent) {
    const data = event.editor.getData();
    if (this.onChange) {
      this.onChange(data)
    }
  }

  writeValue(obj: string): void {
    this.value = obj;
  }

  registerOnChange(fn: (value: string)=>void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: ()=>void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  handleOnTouched() {
    if (this.onTouched) {
      this.onTouched();
    }
  }

}
