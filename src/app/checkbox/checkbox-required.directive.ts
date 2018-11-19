import { Directive, forwardRef } from '@angular/core'
import { CheckboxRequiredValidator, NG_VALIDATORS } from '@angular/forms'

@Directive({
  selector: 'app-checkbox[required]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => CheckboxRequiredDirective), multi: true }]
})
export class CheckboxRequiredDirective extends CheckboxRequiredValidator {}
