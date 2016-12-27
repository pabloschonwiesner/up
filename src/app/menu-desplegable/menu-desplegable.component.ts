import { ProduccionModel } from './../../modeloDatos';
import { Component, OnInit } from '@angular/core';

// importar el servicio correspondiente


@Component({
  selector: 'menu-desplegable',
  templateUrl: './menu-desplegable.component.html',
  styleUrls: ['./menu-desplegable.component.css']
})
export class MenuDesplegableComponent implements OnInit {
  items: any;
  mostrarMenu: boolean;
  itemActivo: any;
  botonMenu: any;

  // inyectar en el constructor el servicio correspondiente
  constructor() {
    this.mostrarMenu = false;
   }

  ngOnInit() {
    // llenar el array items con todos los elementos del menu, llamar el metodo que corresponda
    
  }

  colorEstiloActivoIn(ev: any): void {
    ev.target.className += ' activo';
  }

  colorEstiloActivoOut(ev: any): void {
    if (ev.target.id === 'botonMenu'){
      ev.target.className = 'botonMenu';
    }else {
      ev.target.className = 'itemMenu';
    }


  }

  mostrarOcultarMenu(): void {
    this.mostrarMenu === false ? this.mostrarMenu = true : this.mostrarMenu = false;
  }

  seleccionarItem(elemento: number): void {
    for (let i of this.items){
      i.seleccionado = false;
    }
    this.itemActivo = this.items[elemento];
    this.mostrarOcultarMenu();
  }
}


interface IDemo {
  id: number;
  descripcion: string;
  seleccionado: boolean;
}