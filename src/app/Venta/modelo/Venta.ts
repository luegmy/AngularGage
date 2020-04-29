import { Cliente } from 'src/app/Cliente/Modelo/cliente/Cliente';
import { Usuario } from 'src/app/Usuario/modelo/Usuario';
import { Comprobante } from '../modelo/Comprobante';
import { DetalleVenta } from './DetalleVenta';

export class Venta{
    numComprobante:number;
    serie:string;
    fecha:Date;
    hora:string;
    monto:number;
    cliente:Cliente;
    usuario:Usuario;
    comprobante:Comprobante;
    observacion:string;
    numNota:number;
    detalle:DetalleVenta[];
}