import { TableroService } from './../../servicios/tablero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.css']
})
export class TablaDatosComponent implements OnInit {

  items: ITablero[];

  constructor(private tableroService: TableroService) { }

  ngOnInit() {
    this.items = this.tableroService.buscarTodosLosRegistros();
  }

}

export interface ITablero {
  codigo: number;
  subId: number;
  id: string;
  codigoProceso: string;
  codigoSolapa: number;
  codigoRenglon: number;
  texto: string;
  textoToolTip: string;
  horaInicio: number;
  cantidadHoras: number;
  finalizada: boolean;
  descripcion: string;
  cantidad: number;
  cantidad1: number;
  fechaEntrega: any;
  cantidadHorasProgPrep: number;
  cantidadHorasProgProd: number;
  cantidadHorasProgPar: number;
  factorConversion: number;
  signoConversion: string;
  promedioPreparacion: number;
  promedioProduccion: number;
  codigoCliente: string;
  descripcionCliente: string;
  codigoProducto: string;
}
