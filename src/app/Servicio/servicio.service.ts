import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
import { Cliente } from '../Modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  url="http://localhost:9090/vistas/incluido/cliente/";

  getClientes(){
    return this.http.get<Cliente[]>(this.url);
  }
}
