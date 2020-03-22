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
  constructor(private service:ServicioService,private router:Router) { }

  ngOnInit(): void {
    this.service.getClientes()
    .subscribe(data=>{this.clientes=data;})
  }

}
