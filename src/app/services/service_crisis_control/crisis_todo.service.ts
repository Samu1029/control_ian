import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  
  export class CrisisControlService {
  
    // Url de la API
    url = 'http://localhost:8089/api';
  
    constructor(
      private http: HttpClient
    ) {}
    // Método para obtener controles de las crisis del usuario
    obtenerCrisisControl(): Observable<any> {
      // Uso del método get del HttpClient y se pasa la url de la API
      return this.http.get(this.url + '/crisis_control');
    }
  
  }