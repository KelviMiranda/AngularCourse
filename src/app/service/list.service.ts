import { Injectable } from '@angular/core';
import { Animal } from '../Animal.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  baseUrl:string = 'http://localhost:3000/animals';
  constructor(private http:HttpClient) { }

  animals():Observable<Animal[]>{
    return this.http.get<Animal[]>(this.baseUrl);
  }
  remove(animal:Animal):Observable<Animal>{
   /*  return animals.filter(a => {a.nome !== animal.nome}) */
    return this.http.delete<Animal>(`${this.baseUrl}/${animal.id}`);
  }
}
