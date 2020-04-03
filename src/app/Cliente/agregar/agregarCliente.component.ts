import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Documento } from 'src/app/Modelo/Cliente/Documento';
import { ClienteService } from 'src/app/Servicio/cliente.service';

@Component({
  selector: 'app-agregarCliente',
  templateUrl: './agregarCliente.component.html',
  styleUrls: ['./agregarCliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  
  //cliente: Cliente = new Cliente;
  documentos: Documento[];

  registroForm: FormGroup
  
  constructor(private router: Router, private servicio: ClienteService, builder: FormBuilder) {
    this.registroForm = builder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      documento: ['', Validators.required],
      nroDocumento: ['', Validators.required],
      telefono: [],
      correo: ['',Validators.email]

    })
  }

  get nombre(){return this.registroForm.get('nombre');}
  get direccion(){return this.registroForm.get('direccion');}
  get documento(){return this.registroForm.get('documento');}
  get nroDocumento (){return this.registroForm.get('nroDocumento');}
  get telefono(){return this.registroForm.get('telefono');}
  get correo(){return this.registroForm.get('correo');}

  ngOnInit(): void {
    this.servicio.getDocumentos()
      .subscribe(data => this.documentos = data);
  }

  guardarCliente() {
    this.servicio.createClientes(this.registroForm.value).subscribe(data => {
      alert("Se agrrego con exito...!!");
      this.router.navigate(["listarCliente"]);
    })
  }


}
