import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCliente'
})
export class FiltroClientePipe implements PipeTransform {

  transform(items: any[], texto: any): any[] {
    if (!texto || texto.length < 3) return items;

    return items.filter(cliente=>cliente.nombre.toLowerCase().includes(texto.toLowerCase()))
  }

}
