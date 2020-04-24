import { Cliente } from 'src/app/Cliente/Modelo/cliente/Cliente';
import { Comrpobante } from './Comprobante';
import { Usuario } from 'src/app/Usuario/modelo/Usuario';
import { DetalleVenta } from './DetalleVenta';

export class Venta{
    numComprobante:number;
    serie:string;
    fecha:Date;
    hora:string;
    monto:number;
    cliente:Cliente;
    usuario:Usuario;
    comprobante:Comrpobante;
    observacion:string;
    numNota:number;
    detalle:DetalleVenta[];
}