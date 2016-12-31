import { TableroService } from './../servicios/tablero.service';
import { TurnosService } from './../servicios/turnos.service';
import { UsuariosService } from './../servicios/usuarios.service';
import { ProduccionService } from './../servicios/produccion.service';
import { RecursosService } from './../servicios/recursos.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Injectable } from '@angular/core';
import { ProduccionModel, UsuariosModel, TurnosModel, RecursosModel, TableroModel } from './../modeloDatos';

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

  tablero: TableroModel[];


  constructor(
    private produccionService: ProduccionService, 
    private usuariosService: UsuariosService,
    private turnosService: TurnosService,
    private recursosService: RecursosService,
    private tableroService: TableroService){
    
  };

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
        this.recursos.forEach(e=>console.log("Recurso: " + e.Descripcion));
        this.recursoActivo = recurso.find(r =>  r.CodigoSolapa==this.produccion[0].CS && r.CodigoRenglon==this.produccion[0].CR)
        this.nombreRecursoActivo = this.recursoActivo.Descripcion;
        })
      }) //aca finaliza el subscribe de ProduccionModel


    this.tableroService.buscarLasBarrasActivas$().subscribe(tablero =>{
      this.tablero = tablero;
    });
  }
}
