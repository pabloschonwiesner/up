import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { HttpToolsService } from './http-tools.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ConTerminalService {

  urlBase: String = "http://localhost:3030";

  constructor(private http: Http, private httpToolsService: HttpToolsService) { }

  registrosConTerminalPorRecurso$(): Observable<String[]>{
    let options = this.httpToolsService.configurarCabeceras();
    return this.http
              .get(`${this.urlBase}/conTerminal/conTerminal/0/2` , options)
              .map(this.httpToolsService.obtenerDatos)
  }
}
