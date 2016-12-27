import { Injectable } from '@angular/core';
import { ITurnos } from '../app/menu-turnos/menu-turnos.component';

@Injectable()
export class TurnosService {
  turnos: ITurnos[];
  constructor() {
    this.turnos = [
      {
        id: 0,
        descripcion: 'No Definido',
        seleccionado: true
      },{
        id: 1,
        descripcion: 'Mañana',
        seleccionado: true
      },{
        id: 2,
        descripcion: 'Tarde',
        seleccionado: true
      },{
        id: 3,
        descripcion: 'Noche',
        seleccionado: true
      }
    ];
  }

  buscarTodosLosTurnos(): ITurnos[]{
    return this.turnos;
  }

  buscarUnTurno(id: number): ITurnos{
    return this.turnos.find((turno) => turno.id === id); // la arrow function busca el indice del array
  }
}
