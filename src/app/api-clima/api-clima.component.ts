import { Component, OnInit } from '@angular/core';
import { climaService } from './Services/clima.service';

@Component({
  selector: 'app-api-clima',
  templateUrl: './api-clima.component.html',
  styleUrls: ['./api-clima.component.css']
})
export class apiClimaComponent implements OnInit {

  title = 'Weather App';
  clima: any; //almacena temproalmente datos del clima, es la var q vamos a mostrar

  constructor(private climaService: climaService) {}

  ngOnInit() {}

  obtenerClima(nombreCiudad: string) {
    //hace la peticion del servicio
    this.climaService
      .obtenerClima(nombreCiudad) //pasa nombre a API
      .subscribe(
        (res) => {
          console.log(res), (this.clima = res);
        }, //propiedad clima va a ser igual a respuesta
        (err) => console.log(err)
      );
  }

  submitCiudad(nombreCiudad: HTMLInputElement) {
    if (nombreCiudad.value) { //Validación para el input
      this.obtenerClima(nombreCiudad.value); //Le pasa nombre a la API
      nombreCiudad.value = ''; // para que me reinicie el form despues de presionar boton
    } else {
      alert('Porfavor ingresar nombre de ciudad!');
    }
    nombreCiudad.focus();
    return false; //para que no reinicie la app
    // console.log(nombreCiudad.value) //esta linea solo lo muestra por consola
  }

}
