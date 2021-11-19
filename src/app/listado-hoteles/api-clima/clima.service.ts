//weather service es el que obtiene los datos

import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class climaService {

  apiKey = '57ea50f0efb050db2fdd43dd96d2f3a8';
  URI: string = '';


  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`
  }

   obtenerClima(ciudad: string){
     return this.http.get(`${this.URI}${ciudad}`); //Estoy pidiendo los datos, me devuelve Json
   }
}
