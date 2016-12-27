import { HttpToolsService } from './http-tools.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ProduccionModel } from './../modeloDatos';

@Injectable()
export class ProduccionService {
  private urlBase: String = 'http://localhost:3030';

  constructor(private http: Http, private httpToolsService: HttpToolsService) { }

  getProduccion$(): Observable<ProduccionModel> {
    let options = this.httpToolsService.configurarCabeceras();
    return this.http
            .get(`${this.urlBase}/registros/produccion/0/2`, options)
            .map(this.httpToolsService.obtenerDatos)
  }
}
