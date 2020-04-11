import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Documento } from 'src/app/Cliente/Modelo/cliente/Documento';
import { ClienteService } from 'src/app/Cliente/cliente.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-agregarCliente',
  templateUrl: './agregarCliente.component.html',
  styleUrls: ['./agregarCliente.component.css']
})
export class AgregarClienteComponent implements OnInit {


  //cliente: Cliente = new Cliente;
  documentos: Documento[];
  registroForm: FormGroup;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(
    public dialogoRef: MatDialogRef<AgregarClienteComponent>,
    private router: Router,
    private servicio: ClienteService,
    private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }



  ngOnInit() {
    this.registroForm = this.builder.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      documento: ['', [Validators.required]],
      nroDocumento: ['', [Validators.required]],
      telefono: [''],
      correo: ['', [Validators.email]]

    })
    this.servicio.getDocumentos()
      .subscribe((data: any[]) => this.documentos = data);

  }

  get nombre() { return this.registroForm.get('nombre'); }
  get direccion() { return this.registroForm.get('direccion'); }
  get documento() { return this.registroForm.get('documento'); }
  get nroDocumento() { return this.registroForm.get('nroDocumento'); }
  get telefono() { return this.registroForm.get('telefono'); }
  get correo() { return this.registroForm.get('correo'); }

  guardarCliente() {
    this.servicio.createClientes(this.registroForm.value);
  }

}
