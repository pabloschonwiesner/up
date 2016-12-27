import { Observable } from 'rxjs/Observable';
import { ProduccionModel, UsuariosModel } from './../../modeloDatos';
import { Component, OnInit, Input } from '@angular/core';
import { MenuDesplegableComponent } from './../menu-desplegable/menu-desplegable.component';
import { UsuariosService } from '../../servicios/usuarios.service';
import { filter } from 'rxjs/operator/filter';

@Component({
  selector: 'app-menu-usuarios',
  templateUrl: './menu-usuarios.component.html',
  styleUrls: ['./menu-usuarios.component.css']
})
export class MenuUsuariosComponent extends MenuDesplegableComponent implements OnInit {
  @Input('produccion') produccion: ProduccionModel; 
  @Input('usuarios') items: UsuariosModel[];

  itemActivo: UsuariosModel;
  
  constructor(private usuariosService: UsuariosService) { 
    super();
  }

  ngOnInit() { 
    this.usuariosService.buscarTodosLosUsuariosOperadores$().subscribe(
      item => {
        this.items = item;
        this.itemActivo = this.items.find(user => user.Codigo == this.produccion.CodigoUsuario);
      }
    );    
  }  
}

