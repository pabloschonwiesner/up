import { HttpToolsService } from './http-tools.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TableroModel } from './../modeloDatos';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class TableroService {

 private urlBase: String = "http://localhost:3030";

  constructor(private http: Http, private httpToolsService: HttpToolsService) {}


  buscarLasBarrasActivas$(): Observable<TableroModel[]> {
    let options = this.httpToolsService.configurarCabeceras();
    return this.http
              .get(`${this.urlBase}/tablero/tablero/0/2`, options)
              .map(this.httpToolsService.obtenerDatos)
  };
}