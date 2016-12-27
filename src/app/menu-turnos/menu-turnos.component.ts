import { MenuDesplegableComponent } from './../menu-desplegable/menu-desplegable.component';
import { Component, OnInit } from '@angular/core';


// importar el servicio correspondiente
import { TurnosService } from './../../servicios/turnos.service';

@Component({
  selector: 'app-menu-turnos',
  templateUrl: './menu-turnos.component.html',
  styleUrls: ['./menu-turnos.component.css']
})
export class MenuTurnosComponent extends MenuDesplegableComponent implements OnInit {

  items: ITurnos[];

  // inyectar en el constructor el servicio correspondiente
  constructor(private turnosService: TurnosService) {
    super();
   }

  ngOnInit() {
    this.items = this.turnosService.buscarTodosLosTurnos();
    super.ngOnInit();
  }

 }

export interface ITurnos {
  id: number;
  descripcion: string;
  seleccionado: boolean;
}




