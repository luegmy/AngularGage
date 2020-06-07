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
  
   //atributo que escucha el evento (pageChange)="page = $event"
   page:number = 1;
   totalPages: number[];
   numProductos: number
   pageSize = 10;
 
   order = 'codProducto';
   asc = true;
   isFirst = false;
   isLast = false;
  //columnasParaMostrar = ['nombre', 'direccion', 'documento', 'numero', 'telefono', 'correo', 'editar', 'eliminar'];
  constructor(private dialogo: MatDialog, public servicio: ClienteService, private router: Router) { }

  ngOnInit() {
     this.servicio.getClientes().subscribe(data => this.clientes = data);
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

 
  actualizarCliente() {

  }

}
