import { Component, EventEmitter, Output } from '@angular/core';
import { StoreCart } from '../store-cart';
import { Cellstore } from '../cell-store-list/cell-store';
import { NgFor , AsyncPipe} from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

  cartList$ : Observable<Cellstore[]>;
 
  @Output()
  removedFromCart = new EventEmitter<Cellstore>();
  
  constructor(private cart : StoreCart) {
    this.cartList$ = this.cart.cartList.asObservable();
    // Se suscribe al BehaviorSubject del carrito para obtener la lista de objetos en el carrito y asignarla a la variable cartlist
  }

  removeFromCart(cell : Cellstore) : void {
    this.cart.removeFromCart(cell);
    this.removedFromCart.emit(cell); // Emitir el evento para notificar al componente padre que se ha eliminado un objeto del carrito
  }

}
