import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from './hotel.model';
import { HotelesServices } from './hoteles.service';

@Component({
  selector: 'app-listado-hoteles',
  templateUrl: './listado-hoteles.component.html',
  styleUrls: ['./listado-hoteles.component.css']
})

export class ListadoHotelesComponent implements OnInit {
  
  hoteles: Hotel[] = [];
  

  constructor(private router: Router, private hotelesServices: HotelesServices) {}

  ngOnInit(): void {
    this.hoteles = this.hotelesServices.hoteles;
  }

  detalleHotel(){
    this.router.navigate(['detalleHotel']) //Navega a vita detalle de hotel, despues del click
  }
  
}

