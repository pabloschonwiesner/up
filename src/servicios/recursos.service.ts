import { IRecursos } from './../app/menu-recursos/menu-recursos.component';
import { Injectable } from '@angular/core';

@Injectable()
export class RecursosService {

  recursos: IRecursos[];

  constructor() {
    this.recursos = [
      {
        id: 0,
        codigoSolapa: 0,
        codigoRenglon: 1,
        descripcion: 'Maquina 1',
        adquisidor: false,
        nombrePC: 'notebookpablo',
        seleccionado: true
      },{
        id: 1,
        codigoSolapa: 0,
        codigoRenglon: 2,
        descripcion: 'Maquina 2',
        adquisidor: false,
        nombrePC: 'notebookpablo',
        seleccionado: false
      },{
        id: 2,
        codigoSolapa: 0,
        codigoRenglon: 3,
        descripcion: 'Maquina 3',
        adquisidor: false,
        nombrePC: '',
        seleccionado: false
      },{
        id: 3,
        codigoSolapa: 0,
        codigoRenglon: 4,
        descripcion: 'Maquina 4',
        adquisidor: false,
        nombrePC: '',
        seleccionado: false
      },
    ]
   }

  buscarTodosLosRecursosPorPC(): IRecursos[] {
    return this.recursos.filter((recurso) => recurso.nombrePC === 'notebookpablo' );
  }
}
