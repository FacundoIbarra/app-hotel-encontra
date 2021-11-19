// Declaraciones
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { apiClimaComponent } from './listado-hoteles/api-clima/api-clima.component';
import { ListadoHotelesComponent } from './listado-hoteles/listado-hoteles.component';
import { DetalleHotelComponent } from './detalle-hotel/detalle-hotel.component';
import { HabitacionServiciosComponent } from './detalle-hotel/habitacion-servicios/habitacion-servicios.component';
import { ReservarComponent } from './detalle-hotel/reservar/reservar.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HotelesServices } from './listado-hoteles/hoteles.service';

@NgModule({
  declarations: [
    AppComponent,
    apiClimaComponent,
    ListadoHotelesComponent,
    DetalleHotelComponent,
    HabitacionServiciosComponent,
    ReservarComponent,
    MisReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [HotelesServices],
  bootstrap: [AppComponent]
})

export class AppModule { }
