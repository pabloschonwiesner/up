import { RecursosService } from './../../servicios/recursos.service';
import { MenuDesplegableComponent } from './../menu-desplegable/menu-desplegable.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu-recursos',
  templateUrl: './menu-recursos.component.html',
  styleUrls: ['./menu-recursos.component.css']
})
export class MenuRecursosComponent extends MenuDesplegableComponent implements OnInit {

  items: IRecursos[];

  constructor(private recursosService: RecursosService) {
    super();
  }

  ngOnInit() {
    this.items = this.recursosService.buscarTodosLosRecursosPorPC();
    super.ngOnInit();
  }

}

export interface IRecursos{
    id: number;
    codigoSolapa: number;
    codigoRenglon: number;
    descripcion: string;
    adquisidor: boolean;
    nombrePC: string;
    seleccionado: boolean;
  }