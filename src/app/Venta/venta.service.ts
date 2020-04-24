import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta } from './modelo/Venta';
import { DetalleVenta } from './modelo/DetalleVenta';
import { Comrpobante } from './modelo/Comprobante';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }
  urlLista = 'http://localhost:9090/SpringGage/vistas/venta/';
  urlGuarda = 'http://localhost:9090/SpringGage/vistas/venta/guardar';
  urlEdita = 'http://localhost:9090/SpringGage/vistas/venta/editar';

  getVentas() {
    return this.http.get<Venta[]>(this.urlLista);
  }

  createVenta(venta: Venta) {
    return this.http.post<Venta>(this.urlGuarda, venta);
  }

  getDetalleVenta(numero: number) {
    return this.http.get<DetalleVenta[]>(this.urlLista + numero)
  }

  createDetalleVenta(detalle: DetalleVenta[]) {
    return this.http.post<DetalleVenta[]>(this.urlGuarda + "/detalle", detalle);
  }

  getComprobantes() {
    return this.http.get<Comrpobante[]>(this.urlLista + "/comprobante")
  }
}
