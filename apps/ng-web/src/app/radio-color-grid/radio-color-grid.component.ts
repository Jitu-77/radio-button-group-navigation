import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
export interface outputItem {
  value:String,
  checked:Boolean,
  disabled:Boolean,
  index:Number
}
@Component({
  selector: 'brew-radio-color-grid',
  standalone: true,
  imports: [CommonModule,RadioButtonComponent],
  templateUrl: './radio-color-grid.component.html',
  styleUrl: './radio-color-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RadioColorGridComponent  implements OnChanges {
  focusedItem !:outputItem
  stringifySelectedValue! :String
  modifiedOutputItems : outputItem[] = []
  checkedIndex : Number = 0
  @Input() inputItems :any[]= [
    'rgb(255, 0, 0)',
    'rgb(0, 0, 255)',
    'rgb(0, 255,0)',
    'rgb(255, 255,0)',
    'rgb(255, 165,0)',
    'rgb(128, 0,0)',
    'rgb(160,32,240)',
    'rgb(128,128,128)',
    'rgb(255,0,255)',
    'rgb(200,205,200)',
    'rgb(255, 0, 0)',
    'rgb(0, 0, 255)',
    'rgb(0, 255,0)',
    'rgb(255, 255,0)',
    'rgb(255, 165,0)',
    'rgb(0, 255,0)',
  ]

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['inputItems']){
      this.modifiedOutputItems = this.inputItems.map((el,index)=>{
        if(index==0){
          this.stringifySelectedValue = JSON.stringify({value:el,checked:true,disabled:false,index:index})
          return el = {value:el,checked:true,disabled:false,index:index}
        }else{
          return el = {value:el,checked:false,disabled:false,index:index}
        }
      })
    }
  }
  /**
   * on focus Item triggered from child
   * @param e 
   */
  focusItemTrigger(e:any){
    console.log(e)
    this.focusedItem = e
    this.checkedIndex = e.index
      this.modifiedOutputItems = this.modifiedOutputItems.map((el,index)=>{
        if(index == e.index){
          return el = {...el,checked:true}
        }else{
          return el = {...el,checked :false}
        }
      })
      this.stringifySelectedValue = JSON.stringify(this.modifiedOutputItems.find((el)=>{return el?.checked}))
  }
}
