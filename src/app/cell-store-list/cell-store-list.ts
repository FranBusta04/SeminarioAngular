import { Component, OnInit } from '@angular/core';
import { Cellstore } from './cell-store';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { InputInt } from "../input-int/input-int";
import { StoreCart } from '../store-cart';
import { CellStoreData } from '../cell-store-data';

@Component({
  selector: 'app-cell-store-list',
  standalone : true,
  imports: [CommonModule, FormsModule, InputInt],
  templateUrl: './cell-store-list.html',
  styleUrl: './cell-store-list.scss',
})

export class CellStoreList implements OnInit {

  // Lista de objetos Cellstore que se mostraran en la vista
  // Se inicializa como un array vacío y se llenará con los datos obtenidos de la API

  protected cells : Cellstore[]= [];

  constructor(
    private cart : StoreCart,
    private cellDataService : CellStoreData) {
  }

  ngOnInit() : void {
    this.loadCells();
  };
    


  loadCells(): void {
    this.cellDataService.getAll().subscribe(cells => {
      this.cells = cells;
    });
  }
  // Agregar al carrito y actualizar el stock
  
  addToCart(cell : Cellstore) : void {
    this.cart.addToCart(cell);
    cell.stock -= cell.quantity;
    cell.quantity = 0;
  }
  
  // Mensaje de alerta cuando pasa la cantidad máxima disponible
  
  onMaxReached(message : string) : void {
    alert(message);
  }
  
}
