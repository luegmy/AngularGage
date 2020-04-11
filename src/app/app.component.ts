import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from './Cliente/cliente.service';
import { AgregarClienteComponent } from './Cliente/agregar/agregarCliente.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened = false;
  
  constructor() {}

  toggleSidebar() {
    this.opened = !this.opened;
  }

}
