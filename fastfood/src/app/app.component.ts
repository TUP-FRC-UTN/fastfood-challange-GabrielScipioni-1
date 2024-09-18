import { Component } from '@angular/core';
import { PedidoService } from './pedido.service';
import { Pedido } from './Pedido';
import { DeliveryPointComponent } from './delivery-point/delivery-point.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { POSComponent } from './pos/pos.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeliveryPointComponent, KitchenComponent, POSComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orders: Pedido[] = [];

  constructor(private pedidoService: PedidoService) {
    this.orders = this.pedidoService.getPedido();
  }

  addOrder(order: { name: string; descripcion: string }) {
    this.pedidoService.addPedido(order.name, order.descripcion);
  }

  updateOrderStatus(orderUpdate: { orderNumber: number; status: 'in-progress' | 'ready' }) {
    this.pedidoService.updatePedidoStatus(orderUpdate.orderNumber, orderUpdate.status);
  }

  deliverOrder(orderNumber: number) {
    this.pedidoService.updatePedidoStatus(orderNumber, 'delivered');
  }
}
