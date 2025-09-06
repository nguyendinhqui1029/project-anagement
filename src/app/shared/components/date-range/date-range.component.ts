import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateRangeModel } from '@core/models/date-range.model';
import { PrimeNgImportsModule } from '@core/modules/primeng.module';
import { CheckboxChangeEvent } from 'primeng/checkbox';
import { LottieIconComponent } from '@shared/components/lottie-icon/lottie-icon.component';

@Component({
  selector: 'q-date-range',
  imports: [PrimeNgImportsModule, LottieIconComponent],
  templateUrl: './date-range.component.html',
  styleUrl: './date-range.component.scss',
   providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangeComponent),
      multi: true
    }
  ]
})
export class DateRangeComponent implements ControlValueAccessor {

  MAX_DATE = '9999.12.31 23:59';
  startDateLabel = input.required<string>();
  endDateLabel = input.required<string>();

  placeholder=input<string>();
  dateFormat=input<string>('yy.mm.dd');
  appendTo = input<HTMLElement|string>('body');
  minStartDate = input<Date | undefined>(undefined);
  minEndDate = input<Date | undefined>(undefined);
  maxStartDate = input<Date | undefined>(undefined);
  maxEndDate = input<Date | undefined>(undefined);
  showTime = input<boolean>(true);

  isDisabled = signal<boolean>(false);
  dataRangeValue = signal<DateRangeModel>({ startDate: undefined, endDate: undefined, isUnlimited: false });

  public onChange!: (value: DateRangeModel)=> void;
  public onTouched!:  ()=> void;

  writeValue(value: DateRangeModel): void {
    if (value) {
      this.dataRangeValue.set(value);
      return;
    }       
    this.dataRangeValue.set({ startDate: undefined, endDate: undefined, isUnlimited: false });
  }

  registerOnChange(fn: (value: DateRangeModel)=>void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: ()=>void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.update(()=>isDisabled);
  }

  dateChange(selectedDate: Date, fieldName: 'startDate' | 'endDate') {
    this.dataRangeValue.update((value: DateRangeModel)=>({...value, [fieldName]: selectedDate}))
    if (this.onChange) {
        this.onChange(this.dataRangeValue())
    }
  }

  changeUnlimited(checkboxChangeEvent: CheckboxChangeEvent) {
    this.dataRangeValue.update(value=>({...value, endDate: checkboxChangeEvent.checked ? new Date(this.MAX_DATE) : undefined, isUnlimited: checkboxChangeEvent.checked}))
  }

  handleOnTouched() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
}
