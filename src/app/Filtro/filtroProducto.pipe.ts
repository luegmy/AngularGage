import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProducto'
})
export class FiltroProductoPipe implements PipeTransform {

  transform(items: any[], texto: any): any[] {
    if (!texto || texto.length < 3) return items;

    return items.filter(function (producto) {
      return producto.descripcion.toLowerCase().includes(texto.toLowerCase());
    })
  }

}
