import { Directive, HostListener, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { CheckboxComponent } from './checkbox.component'

@Directive({
  selector: 'app-checkbox[formControl], app-checkbox[formControlName], app-checkbox[ngModel]',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxDirective), multi: true }]
})
export class CheckboxDirective implements ControlValueAccessor {
  private onChange: (state: boolean) => void

  constructor(private checkbox: CheckboxComponent) {}

  @HostListener('stateChange', ['$event'])
  onStateChange(state: boolean): void {
    this.onChange(state)
  }

  writeValue(state: boolean): void {
    this.checkbox.state = state
  }

  registerOnChange(onChange: (state: boolean) => void): void {
    this.onChange = onChange
  }

  registerOnTouched(): void {}
}
