import { Component, OnInit } from '@angular/core';
import {ServicioService} from "../../Servicio/servicio.service"
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes : Cliente[];
  constructor(private servicio:ServicioService,private router:Router) { }

  ngOnInit(): void {
    this.servicio.getClientes()
    .subscribe((data:any[])=>{this.clientes=data;})
  }

  editar(cliente:Cliente):void{
    localStorage.setItem("codigo",cliente.codCliente.toString());
    localStorage.setItem("doc",cliente.documento.toString());
    this.router.navigate(["editar"]);
  }

  eliminar(cliente:Cliente){
    this.servicio.deleteCliente(cliente)
    .subscribe(data=>{this.clientes=this.clientes.filter(c=>c!==cliente);
    alert("Usuario eliminado....")
    })
  }

}
