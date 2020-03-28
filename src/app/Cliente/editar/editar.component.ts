import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/Servicio/servicio.service';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Documento } from 'src/app/Modelo/Documento';
import { log } from 'util';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  cliente: Cliente = new Cliente();
  documentos: Documento[];
  constructor(private router: Router, private servicio: ServicioService) { }

  ngOnInit(): void {
    this.editar();
  }

  editar() {
    let codigo = localStorage.getItem("codigo");
    this.servicio.getClienteCodigo(+codigo)
      .subscribe(data => { this.cliente = data; })

    let doc = localStorage.getItem("doc");
    this.servicio.getDocumentosCodigo(+doc)
      .subscribe(data2 => { this.documentos = data2; })
  }

  actualizar() {
    this.servicio.createClientes(this.cliente).subscribe(data => {
      alert("Se actualizo con exito...!!");
      this.router.navigate(["listar"]);
    })
  }

}
