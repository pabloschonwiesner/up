import { UsuariosModel } from './../modeloDatos';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { HttpToolsService } from './http-tools.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {

  usuarios$: Observable<UsuariosModel[]>;
  private urlBase: String = "http://localhost:3030";

  constructor(private http: Http, private httpToolService: HttpToolsService) {}

    /*llenarStoreUsuarios$(){
      let options = this.httpToolService.configurarCabeceras();
      return this.http
        .get(`${this.urlBase}/usuarios/usuarios`, options)
        .map(this.httpToolService.obtenerDatos)
    }

    buscarTodosLosUsuarios(usuarios: UsuariosModel[]): UsuariosModel[]{
      return usuarios;
    }

    buscarUnUsuario(usuarios: UsuariosModel[], id: number): UsuariosModel{
      return usuarios.find(usuario => usuario.Codigo === id );
    }*/

    buscarTodosLosUsuariosOperadores$(): Observable<UsuariosModel[]>{
      let options = this.httpToolService.configurarCabeceras();
      return this.http
        .get(`${this.urlBase}/usuarios/usuarios/3`, options)
        .map(this.httpToolService.obtenerDatos)
    }

}
