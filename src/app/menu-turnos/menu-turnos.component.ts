import { TurnosModel } from './../../modeloDatos';
import { MenuDesplegableComponent } from './../menu-desplegable/menu-desplegable.component';
import { Component, OnInit, Input } from '@angular/core';


// importar el servicio correspondiente
import { TurnosService } from './../../servicios/turnos.service';

@Component({
  selector: 'app-menu-turnos',
  templateUrl: './menu-turnos.component.html',
  styleUrls: ['./menu-turnos.component.css']
})

export class MenuTurnosComponent extends MenuDesplegableComponent implements OnInit {

@Input('turnoActivo') itemActivo: String;
@Input('turnos') items: TurnosModel[];

  // inyectar en el constructor el servicio correspondiente
  constructor() {
    super();
   }

  /*ngOnChanges(changes: {}):any {
    console.log("Desde turnos: " + changes['turnoActivo'] + ' - ' + Date.now());
  }*/
  seleccionarItem(elemento: number): void {
    this.itemActivo = this.items.find(e => e.Codigo == elemento).Descripcion;
    this.mostrarOcultarMenu();
  }

}



