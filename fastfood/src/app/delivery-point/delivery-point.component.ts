import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Pedido} from "../Pedido";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [CommonModule
  ],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})

/**
 * sera el lugar donde mostraremos todos los pedidos, al lado de cada pedido se mostrara
 */
export class DeliveryPointComponent {
  @Input() orders: Pedido[] = [];
  @Output() deliveryOrder = new EventEmitter<number>();

  deliverOrder(orderNumber: number) {
    this.deliveryOrder.emit(orderNumber);
  }
}
