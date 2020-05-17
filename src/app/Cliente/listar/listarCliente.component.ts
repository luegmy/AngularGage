import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Cliente/Modelo/cliente/Cliente';
import { ClienteService } from 'src/app/Cliente/cliente.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from 'src/app/Dialogo/dialogo-confirmacion/dialogo-confirmacion.component';

@Component({
  selector: 'app-listarCliente',
  templateUrl: './listarCliente.component.html',
  styleUrls: ['./listarCliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();
  filtrarClientes = "";

  clientes: Cliente[] = [];
  page = 0;
  totalPages: number[];
  numClientes: number
  size = 2;

  order = 'codCliente';
  asc = true;
  isFirst = false;
  isLast = false;
  //columnasParaMostrar = ['nombre', 'direccion', 'documento', 'numero', 'telefono', 'correo', 'editar', 'eliminar'];
  constructor(private dialogo: MatDialog, public servicio: ClienteService, private router: Router) { }

  ngOnInit() {
    /*  this.servicio.getClientes()
       .subscribe(data => this.clientes = data); */
    this.cargarClientes();
  }

  cargarClientes() {
    this.servicio.getClientesPaginacion(this.page, this.size, this.order, this.asc).subscribe(
      data => {
        this.clientes = data.content;
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPages = new Array(data['totalPages']);
      },
      err => {
        console.log(err.error);
      }
    );
  }

  editarCliente(cliente: Cliente): void {
    localStorage.setItem("codigo", cliente.codCliente.toString());
    localStorage.setItem("doc", cliente.documento.codDocumento.toString());
    this.router.navigate(["editarCliente"]);
  }

  eliminarCliente(cliente: Cliente) {
    this.dialogo.open(DialogoConfirmacionComponent, {
      data: { nombre: 'Realmente deseas eliminar al cliente ' + cliente.nombre + '?' }
    })
      .afterClosed()
      .subscribe((confirmado: boolean) => {
        if (!confirmado) return;
        this.servicio.deleteCliente(cliente)
          .subscribe(data => {
            this.clientes = this.clientes.filter(c => c !== cliente)

          });
      });
  }

  sort(): void {
    this.asc = !this.asc;
    this.cargarClientes();
  }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.cargarClientes();
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.cargarClientes();
    }
  }

  setPage(page: number): void {
    this.page = page;
    this.cargarClientes();
  }

  setOrder(order: string): void {
    this.order = order;
    this.cargarClientes();
  }

  actualizarCliente() {

  }

}
