import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../listado-hoteles/hotel.model';
import { HotelesServices } from '../listado-hoteles/hoteles.service';


@Component({
  selector: 'app-detalle-hotel',
  templateUrl: './detalle-hotel.component.html',
  styleUrls: ['./detalle-hotel.component.css'],
})

export class DetalleHotelComponent implements OnInit {

  hoteles: Hotel[] = []; //inicializo arr que viene de hotelesService


  
  constructor (private router: Router, private hotelesServices: HotelesServices) { }

  
  ngOnInit(): void {
    this.hoteles = this.hotelesServices.hoteles;
  }

}



  

  


  
  

