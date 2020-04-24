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

  urlLista = 'http://localhost:9090/SpringGage/vistas/rest/cliente/';
  urlPagina = 'http://localhost:9090/SpringGage/vistas/rest/cliente/pagina?';
  urlGuarda = 'http://localhost:9090/SpringGage/vistas/rest/cliente/guardar';
  urlEdita = 'http://localhost:9090/SpringGage/vistas/rest/cliente/editar';
  urlElimina = 'http://localhost:9090/SpringGage/vistas/rest/cliente/eliminar';

  urlListaDoc = 'http://localhost:9090/SpringGage/vistas/rest/cliente/';

  getClientesPaginacion(page: number, size: number, order: string, asc: boolean): Observable<any> {
    /* return this.http.get<Cliente[]>(this.urlLista); */
    return this.http.get<Cliente[]>(this.urlPagina + "page=" + page + "&size=" + size + "&order=" + order + "&asc=" + asc);
  }

  getClientes(){
return this.http.get<Cliente[]>(this.urlLista);
  }

  createClientes(cliente: Cliente) {
    return this.http.post<Cliente>(this.urlGuarda, cliente);
  }

  getClienteCodigo(codigo: number) {
    return this.http.get<Cliente>(this.urlEdita + "/" + codigo);
  }

  getDocumentos() {
    return this.http.get<Documento[]>(this.urlListaDoc + "documento")
  }

  getDocumentosCodigo(codigo: number) : Observable<any>{
    return this.http.get<Documento[]>(this.urlListaDoc + "documento" + "/" + codigo)
  }

  deleteCliente(cliente: Cliente) {
    return this.http.delete<Cliente>(this.urlElimina + "/" + cliente.codCliente);
  }
}
