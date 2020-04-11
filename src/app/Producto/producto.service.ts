import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto } from '../Producto/Modelo/producto/Producto';
import { Medida } from '../Producto/Modelo/producto/Medida';
import { Tipo } from '../Producto/Modelo/producto/Tipo';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  urlLista = 'http://localhost:9090/SpringGage/vistas/incluido/producto/';
  urlGuarda = 'http://localhost:9090/SpringGage/vistas/incluido/producto/guardar';
  urlEdita = 'http://localhost:9090/SpringGage/vistas/incluido/producto/editar';
  urlElimina = 'http://localhost:9090/SpringGage/vistas/incluido/producto/eliminar';

  getProductos() {
    return this.http.get<Producto[]>(this.urlLista);
  }

  getProductoCodigo(codigo: number) {
    return this.http.get<Producto>(this.urlEdita + "/" + codigo);
  }

  getUnidadMedidas() {
    return this.http.get<Medida[]>(this.urlLista + "medida")
  }

  getTipoProductos() {
    return this.http.get<Tipo[]>(this.urlLista + "tipo")
  }

  createProductos(producto: Producto) {
    return this.http.post<Producto>(this.urlGuarda, producto)
  }
}
