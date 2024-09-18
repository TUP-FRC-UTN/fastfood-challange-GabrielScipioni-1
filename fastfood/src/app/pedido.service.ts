import { Injectable } from '@angular/core';
import {Pedido} from "./Pedido";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedido: Pedido[] =[];
  private currentOrderNumber = 0;

  constructor() { }

  addPedido(nombre:string, descripcion:string): void{
    const newPedido = new Pedido(this.currentOrderNumber++,nombre,descripcion,new Date(),'pending');
    this.pedido.push(newPedido);
  }

  getPedido ():Pedido[] {
    return this.pedido;
  }

  updatePedidoStatus(orderNumber:number,status:'pending' | 'in-progress' | 'ready' | 'delivered'): void{
    const pedido = this.pedido.find(p => p.numero === orderNumber);
    if (pedido) {
      pedido.status = status;
    }
  }
  deletePedido(orderNumber:number):void{
    const pedido = this.pedido.filter(p => p.numero === orderNumber);

  }
}
