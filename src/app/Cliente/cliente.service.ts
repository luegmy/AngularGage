import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from './Modelo/cliente/Cliente';
import { Documento } from './Modelo/cliente/Documento';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:9090/SpringGage/vistas/rest/cliente/';

  getClientesPaginacion(page: number, size: number, order: string, asc: boolean): Observable<any> {
    /* return this.http.get<Cliente[]>(this.urlLista); */
    return this.http.get<Cliente[]>(this.url +"pagina?"+"page=" + page + "&size=" + size + "&order=" + order + "&asc=" + asc);
  }

  getClientes() {
    return this.http.get<Cliente[]>(this.url);
  }

  createClientes(cliente: Cliente) {
    return this.http.post<Cliente>(this.url+"guardar", cliente);
  }

  getClienteCodigo(codigo: number) {
    return this.http.get<Cliente>(this.url + "editar/" + codigo);
  }

  getDocumentos() {
    return this.http.get<Documento[]>(this.url + "documento")
  }

  getDocumentosCodigo(codigo: number): Observable<any> {
    return this.http.get<Documento[]>(this.url + "documento" + "/" + codigo)
  }

  deleteCliente(cliente: Cliente) {
    return this.http.delete<Cliente>(this.url + "eliminar/" + cliente.codCliente);
  }
}
