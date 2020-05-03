import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Student} from './student';
import {Employee} from './employee';
@Component({
    selector: 'person-app',
    templateUrl: './person.component.html'
})
export class PersonComponent {
	counter = 0;

  increaseCounter(this) {
    this.counter++;
  }

  public getCounter(){
    return this.counter;
  }
}  