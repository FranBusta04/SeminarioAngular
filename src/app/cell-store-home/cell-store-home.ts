import { Component, ViewChild } from '@angular/core';
import { CellStoreList } from '../cell-store-list/cell-store-list';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-cell-store-home',
  standalone: true,
  imports: [CellStoreList, Cart],
  templateUrl: './cell-store-home.html',
  styleUrls: ['./cell-store-home.scss'],
})

export class CellStoreHome {

  @ViewChild(CellStoreList)
  cellStoreList!: CellStoreList;

  reloadProducts(): void {
    this.cellStoreList.loadCells();
  }

}
