import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente/Cliente';
import { ClienteService } from 'src/app/Servicio/cliente.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from 'src/app/Dialogo/dialogo-confirmacion.component';
import { EditarClienteComponent } from '../editar/editarCliente.component';
import { AgregarClienteComponent } from '../agregar/agregarCliente.component';



@Component({
  selector: 'app-listarCliente',
  templateUrl: './listarCliente.component.html',
  styleUrls: ['./listarCliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  filtrarClientes = "";
  clientes: Cliente[];
  columnasParaMostrar = ['nombre', 'direccion','documento','numero','telefono','correo','editar','eliminar'];

  constructor(private dialogo: MatDialog, public servicio: ClienteService, private router: Router) { }

  ngOnInit() {
    this.servicio.getClientes()
      .subscribe(data => this.clientes = data);
  }

  editarCliente(cliente: Cliente): void {
    localStorage.setItem("codigo", cliente.codCliente.toString());
    localStorage.setItem("doc", cliente.documento.toString());
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



}
