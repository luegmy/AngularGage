import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroVenta'
})
export class FiltroVentaPipe implements PipeTransform {

  transform(items: any[], texto: any): any[] {
    if (!texto || texto.length < 3) return items;

    return items.filter(function (venta) {
      return venta.numComrpobante.toLowerCase().includes(texto.toLowerCase());
    })
  }

}
