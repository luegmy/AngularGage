import { Medida } from './Medida';
import { Tipo } from './Tipo';

export class Producto{
    codProducto:number;
    descripcion:string;
    precioCompra:number;
    precioVenta:number;
    medida:Medida;
    tipo:Tipo;

}