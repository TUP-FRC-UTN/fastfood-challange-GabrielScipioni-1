import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Pedido} from "../Pedido";

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  @Input() orders: Pedido[] = [];
  @Output() updateOrderStatus = new EventEmitter<{ orderNumber: number; status: 'in-progress' | 'ready' }>();

  updateOrder(orderNumber: number, status: 'in-progress' | 'ready') {
    this.updateOrderStatus.emit({ orderNumber, status });
  }
}
