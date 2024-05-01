import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
export interface radioElement {
  value: String;
  checked: Boolean;
  disabled: Boolean;
  index: Number;
}
// export interface focusElement {
//   color: String;
//   checked: Boolean;
//   disabled: Boolean;
//   index: Number;
// }
@Component({
  selector: 'brew-radio-button',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent implements OnInit {
  form!: FormGroup;
  @Input() item: radioElement = {
    value: '',
    checked: false,
    disabled: false,
    index: 0,
  };
  @Input() index: Number = 0;
  @Input() checkedIndex: Number = 0;
  @Output() focusItem = new EventEmitter<radioElement>();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      inputItem: '',
    });
  }
  
  ngOnInit() {
    //initial check on load 
    let initialData = document.getElementById('radio0') as HTMLInputElement;
    if (initialData) {
      initialData.checked = true;
      initialData.focus();
    }
  }
  /**
   * on Focus Trigger
   * @param index 
   */
  focusData(index: any) {
    console.log('HERE', 'color', this.item, index);
    this.checkedIndex = index;
    this.focusItem.emit({
      value: this.item.value,
      checked: true,
      disabled: this.item.disabled,
      index: index,
    });
  }

  /**
   * function to handle checked events
   * @param e
   * @param index
   * @returns
   */
  onKeyPress(e: string, index: Number) {
    // Get the count of radio elements
    var radioElements = document.querySelectorAll('input[type="radio"]');
    var count = radioElements.length - 1;
    console.log('COUNT', count, this.index, this.checkedIndex);
    if (e === 'right' || e === 'down') {
      if (this.checkedIndex === count) {
        this.focusItem.emit({
          value: this.item.value,
          checked: true,
          disabled: this.item.disabled,
          index: 0,
        });
        return;
      }
      this.focusItem.emit({
        value: this.item.value,
        checked: true,
        disabled: this.item.disabled,
        index: Number(this.checkedIndex) + 1,
      });
      return;
    }
    if (this.checkedIndex === 0) {
      this.focusItem.emit({
        value: this.item.value,
        checked: true,
        disabled: this.item.disabled,
        index: count,
      });
      return;
    }
    this.focusItem.emit({
      value: this.item.value,
      checked: true,
      disabled: this.item.disabled,
      index: Number(this.checkedIndex) - 1,
    });
    return;
  }
}
