import {Component, ViewChild} from '@angular/core';
import {Student} from './student';
import { PersonComponent } from './person.component';
@Component({
    selector: 'custom-event',
    templateUrl: './app.component.html'
})
export class AppComponent2 {
    @ViewChild('child1') childOne:PersonComponent;
  
    constructor() { }
  
    ngOnInit() {
      this.childOne.emitEvent
      .subscribe(
        res =>
        {
        console.log("Atributo:" + res);
        }
      );
    }
  
    change():void{
      this.childOne.function1();
    }		
} 