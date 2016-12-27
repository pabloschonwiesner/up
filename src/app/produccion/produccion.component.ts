import { ProduccionService } from './../../servicios/produccion.service';
import { ProduccionModel } from './../../modeloDatos';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-produccion',
  templateUrl: './produccion.component.html',
  styleUrls: ['./produccion.component.css']
})
export class ProduccionComponent implements OnInit {
  //produccion: ProduccionModel;
  @Input('produccion') produccion: ProduccionModel;

  constructor() { }

  ngOnInit() {  
  }

}
