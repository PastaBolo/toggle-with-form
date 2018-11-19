import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  @Input() state: boolean = false

  @Output() stateChange = new EventEmitter<boolean>()

  onChange(state: boolean): void {
    this.state = state
    this.stateChange.emit(state)
  }
}
