import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cellstore } from './cell-store-list/cell-store';
import id from '@angular/common/locales/extra/id';


const URL = 'https://6a5a9267ad8332e75f029649.mockapi.io/articulos'


@Injectable({
  providedIn: 'root',
})


export class CellStoreData {
  
  constructor(private http: HttpClient) {}

  // Metodo para obtener todos los articulos de la API

  public getAll(): Observable<Cellstore[]> {
    // Realiza una solicitud HTTP GET a la URL especificada y 
    // devuelve un Observable que emite un array de objetos Cellstore
    return this.http.get<Cellstore[]>(URL);
  
  }

  public updateCell(cell: Cellstore): Observable<Cellstore> {
  return this.http.put<Cellstore>(
    `${URL}/${cell.id}`,
    cell
  );
}
}
