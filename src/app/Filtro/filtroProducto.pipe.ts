import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../Producto/Modelo/producto/Producto';

@Pipe({
  name: 'filtroProducto'
})
export class FiltroProductoPipe implements PipeTransform {

  transform(items: any[], texto: any): any[] {
    if (!texto || texto.length < 3) return items;

    return items.filter(producto=>producto.descripcion.toLowerCase().includes(texto.toLowerCase()))

  }

}
