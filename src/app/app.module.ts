import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { apiClimaComponent } from './api-clima/api-clima.component';
import { ListadoHotelesComponent } from './listado-hoteles/listado-hoteles.component';
import { DetalleHotelComponent } from './detalle-hotel/detalle-hotel.component';
import { HabitacionServiciosComponent } from './detalle-hotel/habitacion-servicios/habitacion-servicios.component';
import { ReservarComponent } from './detalle-hotel/reservar/reservar.component';

@NgModule({
  declarations: [
    AppComponent,
    apiClimaComponent,
    ListadoHotelesComponent,
    DetalleHotelComponent,
    HabitacionServiciosComponent,
    ReservarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
