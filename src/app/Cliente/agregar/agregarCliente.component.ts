import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Documento } from 'src/app/Cliente/Modelo/cliente/Documento';
import { ClienteService } from 'src/app/Cliente/cliente.service';

@Component({
  selector: 'app-agregarCliente',
  templateUrl: './agregarCliente.component.html',
  styleUrls: ['./agregarCliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  documentos: Documento[];
  registroForm: FormGroup;
  emailPatron:any=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private router: Router,private servicio: ClienteService,private builder: FormBuilder) { 
    
      this.registroForm = this.builder.group({
        nombre: ['', [Validators.required]],
        direccion: ['', [Validators.required]],
        documento: ['', [Validators.required]],
        nroDocumento: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(11)]],
        telefono: [''],
        correo: ['', [Validators.pattern(this.emailPatron)]]
      })
    }

  ngOnInit() { 
    this.servicio.getDocumentos()
      .subscribe((data: any[]) => this.documentos = data);
  }

  guardarCliente() {
    this.servicio.createClientes(this.registroForm.value).subscribe(dato=>{
      alert("Se agrego con exito...!!");
      this.router.navigate(["listarCliente"]);
    })
  }

  get nombre() { return this.registroForm.get('nombre'); }
  get direccion() { return this.registroForm.get('direccion'); }
  get documento() { return this.registroForm.get('documento'); }
  get nroDocumento() { return this.registroForm.get('nroDocumento'); }
  get telefono() { return this.registroForm.get('telefono'); }
  get correo() { return this.registroForm.get('correo'); }


}
