import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/Servicio/producto.service';
import { Medida } from 'src/app/Modelo/producto/Medida';
import { Tipo } from 'src/app/Modelo/producto/Tipo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregarProducto.component.html',
  styleUrls: ['./agregarProducto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  medidas:Medida[];
  tipos:Tipo[];

  registroForm:FormGroup
  constructor(private router:Router, private servicio:ProductoService,builder:FormBuilder) { 
    this.registroForm=builder.group({
      descripcion:['',Validators.required],
      precioCompra:['',Validators.required],
      precioVenta:['',Validators.required],
      tipo:['',Validators.required],
      medida:['',Validators.required]
    })
  }

  get descripcion(){return this.registroForm.get('descripcion');}
  get precioCompra(){return this.registroForm.get('precioCompra');}
  get precioVenta(){return this.registroForm.get('precioVenta');}
  get tipo(){return this.registroForm.get('tipo');}
  get medida(){return this.registroForm.get('medida');}
  
  ngOnInit(): void {
    this.servicio.getTipoProductos().subscribe(dato=>this.tipos=dato);
    this.servicio.getUnidadMedidas().subscribe(dato=>this.medidas=dato);
  }

  guardarProducto(){
    this.servicio.createProductos(this.registroForm.value).subscribe(dato=>{
      alert("Se agrrego con exito...!!");
      this.router.navigate(["listarProducto"]);
    })
  }

}
