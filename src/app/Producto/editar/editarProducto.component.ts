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

  medidas:Medida[];
  tipos:Tipo[];
  producto:Producto= new Producto();

  constructor(private router:Router, private servicio:ProductoService) { }
    
  ngOnInit(): void {
    this.editarProducto();
    this.servicio.getTipoProductos().subscribe(dato=>this.tipos=dato);
    this.servicio.getUnidadMedidas().subscribe(dato=>this.medidas=dato);
  }

  editarProducto(){
    let codigo=localStorage.getItem("codigo");
    this.servicio.getProductoCodigo(+codigo)
    .subscribe(data=>this.producto=data);
  }

  actualizarProducto() {
    this.servicio.createProductos(this.producto).subscribe(data => {
      alert("Se actualizo con exito...!!");
      this.router.navigate(["listarProducto"]);
    })
  }

}
