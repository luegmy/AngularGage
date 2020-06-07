import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto } from '../Producto/Modelo/producto/Producto';
import { Medida } from '../Producto/Modelo/producto/Medida';
import { Tipo } from '../Producto/Modelo/producto/Tipo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:9090/SpringGage/vistas/rest/producto/';

  getProductosPaginacion(page: number, size: number, order: string, asc: boolean): Observable<any> {
    /* return this.http.get<Cliente[]>(this.urlLista); */
    return this.http.get<Producto[]>(this.url + "pagina?" + "page=" + page + "&size=" + size + "&order=" + order + "&asc=" + asc);
  }

  getProductos() {
    return this.http.get<Producto[]>(this.url);
  }

  getProductoCodigo(codigo: number) {
    return this.http.get<Producto>(this.url + "editar/" + codigo);
  }

  getUnidadMedidas() {
    return this.http.get<Medida[]>(this.url + "medida")
  }

  getTipoProductos() {
    return this.http.get<Tipo[]>(this.url + "tipo")
  }

  createProductos(producto: Producto) {
    return this.http.post<Producto>(this.url + "guardar", producto)
  }

  deleteProducto(producto: Producto) {
    return this.http.delete<Producto>(this.url + "eliminar/" + producto.codProducto)
  }
}
