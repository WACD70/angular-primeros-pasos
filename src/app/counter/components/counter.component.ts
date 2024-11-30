import { Component } from '@angular/core';

@Component({
  selector: 'counter-component',
  templateUrl: './counter.component.html',
 
})
export class CounterComponent {
  public title:string = 'counter component';

  public counter:number = 20;

  public currentVal:number = 50;
  
  increaseBy(value:number): void {
    this.counter += value;
  }

  decreaseBy(value:number): void {
    this.counter -= value;
  }

  resetCounter():void {
    this.counter = this.currentVal;
  }
}
