import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from '../Modelo/Cliente';
import { Documento } from '../Modelo/Documento';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  urlLista = 'http://localhost:9090/SpringGage/vistas/incluido/cliente/';
  urlGuarda = 'http://localhost:9090/SpringGage/vistas/incluido/cliente/guardar';
  urlEdita = 'http://localhost:9090/SpringGage/vistas/incluido/cliente/editar';
  urlElimina = 'http://localhost:9090/SpringGage/vistas/incluido/cliente/eliminar';

  getClientes() {
    return this.http.get<Cliente[]>(this.urlLista);
  }

  createClientes(cliente: Cliente) {
    return this.http.post<Cliente>(this.urlGuarda, cliente);
  }

  getClienteCodigo(codigo: number) {
    return this.http.get<Cliente>(this.urlEdita + "/" + codigo);
  }

  getDocumentos() {
    return this.http.get<Documento[]>(this.urlLista + "documento")
  }

  getDocumentosCodigo(codigo: number) {
    return this.http.get<Documento[]>(this.urlLista + "documento" + "/" + codigo)
  }

  deleteCliente(cliente: Cliente) {
    return this.http.delete<Cliente>(this.urlElimina + "/" + cliente.codCliente);
  }
}
