import { Observable } from 'rxjs/Observable';
import { RecursosCamposModel } from './../modeloDatos';
import { Http } from '@angular/http';
import { HttpToolsService } from './http-tools.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class RecursosCamposService {

  private urlBase: String = "http://localhost:3030";
  
  constructor(private http: Http, private httpToolsService: HttpToolsService) { }

  buscarRecursosCampos$(): Observable<RecursosCamposModel[]>{
    let opciones = this.httpToolsService.configurarCabeceras();
    return this.http  
              .get(`${this.urlBase}/recursosCampos/recursosCampos/0/2`, opciones)
              .map(this.httpToolsService.obtenerDatos);
  }

}
