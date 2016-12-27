import { ProduccionService } from './../servicios/produccion.service';
import { ProduccionComponent } from './produccion/produccion.component';
import { HttpToolsService } from './../servicios/http-tools.service';
import { UsuariosService } from './../servicios/usuarios.service';
import { TurnosService } from './../servicios/turnos.service';
import { RecursosService } from './../servicios/recursos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuTurnosComponent } from './menu-turnos/menu-turnos.component';
import { MenuDesplegableComponent } from './menu-desplegable/menu-desplegable.component';
import { MenuUsuariosComponent } from './menu-usuarios/menu-usuarios.component';
import { MenuRecursosComponent } from './menu-recursos/menu-recursos.component';
import { TablaDatosComponent } from './tabla-datos/tabla-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTurnosComponent,
    MenuDesplegableComponent,
    MenuUsuariosComponent,
    MenuUsuariosComponent,
    MenuRecursosComponent,
    TablaDatosComponent,
    ProduccionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TurnosService, UsuariosService, RecursosService, HttpToolsService, ProduccionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
