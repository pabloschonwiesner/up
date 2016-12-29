import { Http } from '@angular/http';
import { HttpToolsService } from './http-tools.service';
import { Observable } from 'rxjs/Observable';
import { TurnosModel } from './../modeloDatos';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class TurnosService {

urlBase: String = 'http://localhost:3030';
 
  constructor(private http: Http, private httpToolService: HttpToolsService) {}

  buscarTodosLosTurnos$(): Observable<TurnosModel[]>{
    let opciones = this.httpToolService.configurarCabeceras();
    return this.http
            .get(`${this.urlBase}/turnos/turnos`, opciones)
            .map(this.httpToolService.obtenerDatos)
  }

}
