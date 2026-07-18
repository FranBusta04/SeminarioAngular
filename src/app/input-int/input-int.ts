import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-input-int',
  standalone : true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input-int.html',
  styleUrl: './input-int.scss',
})

export class InputInt  {


  @Input()
  quantity! : number;
  
  @Input()
  max! : number;
  
  @Output()
  quantityChange : EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached : EventEmitter<string> = new EventEmitter<string>();


  downQuantity() :void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  
  upQuantity() :void {
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    
    else{
      this.maxReached.emit("Se ha alcanzado la cantidad máxima disponible");
    }  
  }

  changeQuantity(): void {
    console.log(this.quantity);
    this.quantityChange.emit(this.quantity);
  }

}



