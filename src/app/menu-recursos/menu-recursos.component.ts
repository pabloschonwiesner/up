import { RecursosModel } from './../../modeloDatos';
import { RecursosService } from './../../servicios/recursos.service';
import { MenuDesplegableComponent } from './../menu-desplegable/menu-desplegable.component';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-menu-recursos',
  templateUrl: './menu-recursos.component.html',
  styleUrls: ['./menu-recursos.component.css']
})
export class MenuRecursosComponent extends MenuDesplegableComponent implements OnInit {

  @Input('recursoActivo') itemActivo: String;
  @Input('recursos') items: RecursosModel[];

  constructor() {
    super();
  }

  ngOnInit() {
  }

  seleccionarItem(cs: number, cr: number): void {
    this.itemActivo = this.items.find(r => r.CodigoSolapa == cs && r.CodigoRenglon == cr ).Descripcion;
    this.mostrarOcultarMenu();
  }

}