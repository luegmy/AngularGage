import {Component, ViewChild} from '@angular/core';
import {Student} from './student';
import { PersonComponent } from './person.component';
@Component({
    selector: 'custom-event',
    templateUrl: './app.component.html'
})
export class AppComponent2 {
  @ViewChild(PersonComponent ) child: PersonComponent ;

  ngOnInit() {
  }
  counter = 0;

  increaseCounter() {
    this.counter++;
  }
  getHelloWorldCounterValue(){
 this.counter = this.child.getCounter();
}
} 