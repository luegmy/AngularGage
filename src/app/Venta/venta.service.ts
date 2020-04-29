import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta } from './modelo/Venta';
import { DetalleVenta } from './modelo/DetalleVenta';
import { Comprobante } from './modelo/Comprobante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:9090/SpringGage/vistas/venta/';

  getVentas() {
    return this.http.get<Venta[]>(this.url);
  }

  createVenta(venta: Venta) {
    return this.http.post<Venta>(this.url + "guardar", venta);
  }

  getVentaNumero(numero: number) :Observable<any> {
    return this.http.get<Venta>(this.url + "editar/" + numero)
  }

  getDetalleVenta(numero: number) {
    return this.http.get<DetalleVenta[]>(this.url + numero)
  }

  getDetalleVentaId(codigo: number, numero: number) {
    return this.http.get<DetalleVenta>(this.url + "editar/detalle/" + codigo + "/" + numero)
  }

  createDetalleVenta(detalle: DetalleVenta[]) {
    return this.http.post<DetalleVenta[]>(this.url + "guardar/detalle", detalle);
  }

  getComprobantes() {
    return this.http.get<Comprobante[]>(this.url + "comprobante")
  }
}
