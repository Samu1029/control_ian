import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Time } from '@angular/common';


export interface Crisis {
  id: number;
  user: string;
  date: Date;
  crisis: number;
  time: Time;
  observation: Text;
}

@Injectable({
  providedIn: 'root'
})

export class CrisisControlService {

  
  // Url de la API
  url = 'http://localhost:8089';

  constructor(
    private http: HttpClient
  ) {}
  // Método para obtener controles de las crisis del usuario
  getCrisisControl(): Observable<Crisis[]> {
    // Uso del método get del HttpClient y se pasa la url de la API
    return this.http.get<Crisis[]>(this.url + '/crisis');
  }

}
