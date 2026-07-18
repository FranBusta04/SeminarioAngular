import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cellstore } from './cell-store-list/cell-store';
import { CellStoreData } from './cell-store-data';

@Injectable({
  providedIn: 'root',
})
export class StoreCart {

  private _cartList: Cellstore[] = [];

  /*logica para agregar objeto al carrito*/
  cartList: BehaviorSubject<Cellstore[]> = new BehaviorSubject<Cellstore[]>([]);

  constructor(private cellStoreData: CellStoreData) {}
  
  addToCart(cell: Cellstore) {
    const item = this._cartList.find(item => item.id === cell.id);
    if (!item) {
      this._cartList.push({ ...cell, stock: cell.stock - cell.quantity})
      
    //Clona el objeto y lo agrega al carrito
    }
    else {
      item.quantity += cell.quantity;
      item.stock -= cell.stock; //Si el objeto ya existe en el carrito, se actualiza la cantidad
    }
    console.log("agregado al carrito", this._cartList);
    this.cartList.next([...this._cartList]); //Actualiza el BehaviorSubject con la nueva lista de objetos
  }


  removeFromCart(cell: Cellstore): void {

  const item = this._cartList.find(item => item.id === cell.id
  );

  if (!item) {
    return;
  }

   const updatedCell: Cellstore = {
      ...item,
      stock: item.stock + item.quantity, quantity: 0
    };

    // Actualizar el producto en la API
    this.cellStoreData.updateCell(updatedCell)
      .subscribe({ next: (updatedCell: Cellstore) => {
        console.log('Stock actualizado:',updatedCell);
      // Eliminar el producto del carrito
        this._cartList =this._cartList.filter( product => product.name !== cell.name);

      this.cartList.next([...this._cartList]);
  
      console.log('Eliminado del carrito', this._cartList);
        },
      });
    }
  
}