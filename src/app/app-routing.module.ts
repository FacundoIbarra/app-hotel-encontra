import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleHotelComponent } from './detalle-hotel/detalle-hotel.component';
import { ListadoHotelesComponent } from './listado-hoteles/listado-hoteles.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';

const routes: Routes = [
  {path:'', component: ListadoHotelesComponent},
  {path:'detalleHotel', component: DetalleHotelComponent},
  {path:'misReservas', component: MisReservasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
