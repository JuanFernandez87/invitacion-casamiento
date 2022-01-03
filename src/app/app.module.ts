import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimerComponent } from './timer/timer.component';
import { RegaloComponent } from './regalo/regalo.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component'
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimerComponent,
    RegaloComponent,
    FooterComponent,
    CarouselComponent,
    AlojamientosComponent,
    UbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
