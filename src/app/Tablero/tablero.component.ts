import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto/Modelo/producto/Producto';
import { ProductoService } from 'src/app/Producto/producto.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  productos:Producto[];
  constructor(private servicio:ProductoService) { }

  ngOnInit(): void {
    this.servicio.getProductos().subscribe(dato=>this.productos=dato);
  }

}
