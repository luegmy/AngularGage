import { Producto } from 'src/app/Producto/Modelo/producto/Producto';
import { Venta } from './Venta';

export class DetalleVenta{
    id={};
    precio:number;
    cantidad:number;
    producto:Producto;
    venta:Venta;
}