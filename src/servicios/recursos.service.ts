import { HttpToolsService } from './http-tools.service';
import { Observable } from 'rxjs/Observable';
import { RecursosModel } from './../modeloDatos';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class RecursosService {
  private urlBase: String = 'http://localhost:3030';

  constructor(private http: Http, private httpToolsService: HttpToolsService) {}

  buscarTodosLosRecursosPorPC$(): Observable<RecursosModel[]> {
    let options = this.httpToolsService.configurarCabeceras();
    return this.http
            .get(`${this.urlBase}/recursos/recursos/0/2`, options)
            .map(this.httpToolsService.obtenerDatos)
  }
}
