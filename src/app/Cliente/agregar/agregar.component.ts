import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/Servicio/servicio.service';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Documento } from 'src/app/Modelo/Documento';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  cliente:Cliente=new Cliente;
  documentos:Documento[];
  constructor(private router:Router, private servicio:ServicioService) { }

  ngOnInit(): void {
    this.servicio.getDocumentos()
    .subscribe(data=>{this.documentos=data;})
    
  }

  guardar(){
    this.servicio.createClientes(this.cliente).subscribe(data=>{alert("Se agrrego con exito...!!");
    this.router.navigate(["listar"]);
  })
  }

}
