import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { Producto } from '../Modelo/producto/Producto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Medida } from '../Modelo/producto/Medida';
import { Tipo } from '../Modelo/producto/Tipo';

@Component({
  selector: 'app-editarProducto',
  templateUrl: './editarProducto.component.html',
  styleUrls: ['./editarProducto.component.css']
})
export class EditarProductoComponent implements OnInit {

  
  producto: Producto = new Producto();
  medidas: Medida[];
  tipos: Tipo[];

  constructor(private router: Router, private servicio: ProductoService) { }

  ngOnInit(): void {
    this.servicio.getTipoProductos().subscribe(dato => this.tipos = dato);
    this.servicio.getUnidadMedidas().subscribe(dato => this.medidas = dato);
    this.editarProducto();
  }

  editarProducto() {
    let codigo = localStorage.getItem("codigo");
    this.servicio.getProductoCodigo(+codigo).subscribe(data => this.producto = data);
  }

   //funcion para poner por defecto un valor en el select
   compararTipos( doc1:Tipo, doc2:Tipo) {
    if (doc1==null || doc2==null) {
      return false;
    }
    return doc1.descripcion===doc2.descripcion;
  }
  compararMedidas( doc1:Medida, doc2:Medida) {
    if (doc1==null || doc2==null) {
      return false;
    }
    return doc1.abreviatura===doc2.abreviatura;
  }

  actualizarProducto() {
    this.servicio.createProductos(this.producto).subscribe(data => {
      alert("Se actualizo con exito...!!");
      this.router.navigate(["listarProducto"]);
    })
  }

}
