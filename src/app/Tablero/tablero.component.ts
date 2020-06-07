import { Component, OnInit } from '@angular/core';
import { VentaService } from '../Venta/venta.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  monto: number
  constructor(private servicio: VentaService) { }

  ngOnInit(): void {
    this.servicio.getVentas().subscribe(data => {
      this.monto = data.map(v => v.monto).reduce(this.getMonto, 0).toFixed(2)
    })
  }

  getMonto(total, num) {
    return total + num;
  }

}
