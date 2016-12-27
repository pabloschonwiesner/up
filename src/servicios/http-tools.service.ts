import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpToolsService {

  constructor() { }

  obtenerDatos(response) {
    return response.json();
  }

  configurarCabeceras(){
    let headers = new Headers({
      'Content-Type' : 'application/json'
    })
    let options = new RequestOptions({headers:headers});
    return options;
  }

}
