import { ConTerminalService } from './../servicios/con-terminal.service';
import { RecursosCamposService } from './../servicios/recursos-campos.service';
import { TableroService } from './../servicios/tablero.service';
import { TurnosService } from './../servicios/turnos.service';
import { UsuariosService } from './../servicios/usuarios.service';
import { ProduccionService } from './../servicios/produccion.service';
import { RecursosService } from './../servicios/recursos.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Injectable } from '@angular/core';
import { ProduccionModel, UsuariosModel, TurnosModel, RecursosModel, TableroModel, RecursosCamposModel } from './../modeloDatos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  produccion: ProduccionModel;
  usuarios: UsuariosModel[];
  usuarioActivo: UsuariosModel;
  nombreUsuarioActivo: String;

  turnos: TurnosModel[];
  turnoActivo: TurnosModel;
  nombreTurnoActivo: String;

  recursos: RecursosModel[];
  recursoActivo: RecursosModel;
  nombreRecursoActivo: String;

  conTerminalAux: String[];
  conTerminal: any[] = new Array();

  recursosCampos: RecursosCamposModel[];

  cabezas: String[] = new Array();
  nombreCampos: String[] = new Array();


  constructor(
    private produccionService: ProduccionService, 
    private usuariosService: UsuariosService,
    private turnosService: TurnosService,
    private recursosService: RecursosService,
    private tableroService: TableroService,
    private recursosCamposService: RecursosCamposService,
    private conTerminalService: ConTerminalService){
    
  };

  fnClonadora(obj){
    return JSON.parse(JSON.stringify(obj));
  }

  ngOnInit(){
    this.produccionService.getProduccion$().subscribe(prod => {
      this.produccion = prod;   

      this.usuariosService.buscarTodosLosUsuariosOperadores$().subscribe(user => {
        this.usuarios = user;
        this.usuarioActivo = user.find(u=>u.Codigo == this.produccion[0].CodigoUsuario);
        this.nombreUsuarioActivo = this.usuarioActivo.Nombre;
      });   

      this.turnosService.buscarTodosLosTurnos$().subscribe(turno => {
        this.turnos = turno;
        this.turnoActivo = turno.find(t => t.Codigo == this.produccion[0].CodigoTurno);
        this.nombreTurnoActivo = this.turnoActivo.Descripcion;
      })

      this.recursosService.buscarTodosLosRecursosPorPC$().subscribe(recurso =>{
        this.recursos = recurso;
        this.recursoActivo = recurso.find(r =>  r.CodigoSolapa==this.produccion[0].CS && r.CodigoRenglon==this.produccion[0].CR)
        this.nombreRecursoActivo = this.recursoActivo.Descripcion;
        })
      }) //aca finaliza el subscribe de ProduccionModel

      
    

    this.recursosCamposService.buscarRecursosCampos$().subscribe(campos => {
      this.recursosCampos = campos;
      campos.sort((a,b)=>{
        return (a.Orden - b.Orden)
      })
      for(let i=0, l=campos.length ; i<l ; i++){
        if(campos[i].Visible === true){
          this.cabezas.push(campos[i].Descripcion)
          this.nombreCampos.push(campos[i].NombreCampo)
        }
      }

      this.conTerminalService.registrosConTerminalPorRecurso$().subscribe(ct =>{
        this.conTerminalAux = ct;
        
        let k = this.nombreCampos.length;
        for(let j=0, l=this.conTerminalAux.length; j<l ; j++){
            let o = new Object();
            for(let i=0 ; i<k ; i++){
              let key = this.nombreCampos[i].toString();
              for(let q in this.conTerminalAux[j]){
                if(key == q){ 
                  Object.defineProperty( o , key , { value: this.conTerminalAux[j][key]});
                  break;
                }
              }              
            }
            this.conTerminal.push(o);
          }
        });     
    }); // aca finaliza el subscribe de recursosCampos
  }

  
}


