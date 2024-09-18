import {Component, EventEmitter, Output} from '@angular/core';
import {PedidoService} from "../pedido.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {
  nombre : string ='';
  descripcion : string='';

  @Output() newOrder = new EventEmitter<{name:string; descripcion:string}>();

  onSubmit(){
    if (this.descripcion && this.nombre){
      this.newOrder.emit({name : this.nombre , descripcion : this.descripcion});
      this.nombre='';
      this.descripcion='';
    }
  }
}
