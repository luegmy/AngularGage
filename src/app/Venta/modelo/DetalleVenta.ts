import { Producto } from 'src/app/Producto/Modelo/producto/Producto';
import { Venta } from './Venta';

export class DetalleVenta{
    id={};
    precio:number=0.00;
    cantidad:number;
    producto:Producto;
    venta:Venta;
}