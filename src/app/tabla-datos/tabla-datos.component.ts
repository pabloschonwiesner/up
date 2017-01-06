import { RecursosCamposModel, TableroModel } from './../../modeloDatos';
import { TableroService } from './../../servicios/tablero.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.css']
})
export class TablaDatosComponent implements OnInit {
  @Input('cabezas') cabezas: RecursosCamposModel[];
  @Input('conTerminal') conTerminal: TableroModel[]; 
  @Input('nombreCampos') nombreCampos: String[];
    
  valor: String;
  elemento: String;

  constructor() { }

  ngOnInit() {
    
  }

  /*ngOnChanges(changes: {}): any {
    for(let i=0, l=this.conTerminal.length ; i<l ; i++){
      for(let key of changes['conTerminal']){
        console.log("Desde tabla datos: " + changes['conTerminal'][key] + ' - ' + Date.now());
      }      
    }    
  }*/

  escribirValor(registro: number, columna: string ): void{
    this.valor = this.conTerminal[registro][columna];
  }

}

