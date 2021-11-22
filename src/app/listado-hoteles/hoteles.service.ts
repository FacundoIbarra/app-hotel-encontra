// Archivo - DataService

import { Hotel } from "./hotel.model";

export class HotelesServices {
    
    hoteles: Hotel[] = [
      
        new Hotel(
          
          1,//id
          'Las Hayas Resort',
          'Calle 123 - Ushuaia',
          3, //este number es de calificación estrellas
          2500,
          [ //Array de variantes
            { nombre: 'Doble económica', precio: 2500 },
            { nombre: 'Doble estandar', precio: 3200},
            { nombre: 'Triple estandar', precio: 4000 },
          ],
          [ //Array de servicios
            { descripcion: 'Almuerzo', precio: 330 },
            { descripcion: 'Cena', precio: 200 },
          ], //Imagen
          'https://cdn.mexicodestinos.com/hoteles/hotel-krystal-beach-acapulco-fachada-princ-min.jpg'
          ),

          // new Hotel(
          //   2,
          //   'Hosteria La Caldera',
          //   'Av Buenos Aires 999 - Salta',
          //   4,
          //   3000,
          //   [
          //     { nombre: 'Doble estandar', precio: 3000 },
          //     { nombre: 'Doble especial', precio: 4500 },
          //     { nombre: 'Doble Lujo', precio: 5500 },
          //   ],
          //   [
          //     { descripcion: 'Almuerzo', precio: 330 },
          //     { descripcion: 'Cena', precio: 200 },
          //     { descripcion: 'Lavanderia', precio: 500 },
          //   ],
          //   'https://cdn.mexicodestinos.com/hoteles/hotel-copacabana-acapulco-beach-princ-min.jpg'
          // ),

          // new Hotel(
          //   3,
          //   'Hotel Villa Huapi',
          //   'Av Libertador 123 - Bariloche',
          //   5,
          //   3500,
          //   [  //Variantes
          //     { nombre: 'Doble estandar', precio: 3500 },
          //     { nombre: 'Doble Lujo', precio: 4500 },
          //     { nombre: 'Triple estandar', precio: 5500 },
          //     { nombre: 'Triple Lujo', precio: 7500 },
          //   ],
          //   [ //Servicios
          //     { descripcion: 'Almuerzo', precio: 330 },
          //     { descripcion: 'Cena', precio: 200 },
          //     { descripcion: 'Lavanderia', precio: 500 },
          //     { descripcion: 'Cochera', precio: 800 },
          //   ],
          //   'https://cdn.mexicodestinos.com/hoteles/hotel-playa-suites-acapulco-fachada-princ-min.jpg'
          // ),
        
        ];

    
}
        
       
        
        

      