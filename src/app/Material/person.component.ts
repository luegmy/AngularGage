import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Student} from './student';
import {Employee} from './employee';
@Component({
    selector: 'person-app',
    templateUrl: './person.component.html'
})
export class PersonComponent {
	@Output() emitEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
	estado:boolean = false;
  
	constructor() { 
	}
  
	ngOnInit() {
	  this.function1();
	}
  
	public function1(): boolean{
	  let fResponse = !this.estado;
	  this.estado = fResponse;
	  this.emitEvent.emit(fResponse);
	  return fResponse;
	}
}  