import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/Servicio/servicio.service';
import { Documento } from 'src/app/Modelo/Documento';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  registroForm: FormGroup
  //cliente: Cliente = new Cliente;
  documentos: Documento[];

  constructor(private router: Router, private servicio: ServicioService, builder: FormBuilder) {
    this.registroForm = builder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      documento: ['', Validators.required],
      nroDocumento: ['', Validators.required],
      telefono: [],
      correo: ['',Validators.email]

    })
  }

  ngOnInit(): void {
    this.servicio.getDocumentos()
      .subscribe(data => { this.documentos = data; })
  }

  guardar() {
    this.servicio.createClientes(this.registroForm.value).subscribe(data => {
      alert("Se agrrego con exito...!!");
      this.router.navigate(["listar"]);
    })
  }

  get nombre(){return this.registroForm.get('nombre');}
  get direccion(){return this.registroForm.get('direccion');}
  get documento(){return this.registroForm.get('documento');}
  get nroDocumento (){return this.registroForm.get('nroDocumento');}
  get telefono(){return this.registroForm.get('telefono');}
  get correo(){return this.registroForm.get('correo');}

}
