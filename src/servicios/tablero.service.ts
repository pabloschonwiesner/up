import { ITablero } from './../app/tabla-datos/tabla-datos.component';
import { Injectable } from '@angular/core';


@Injectable()
export class TableroService {

  items: ITablero[];

  constructor() {
    this.items = [
      {
        codigo: 853748, subId: 276000, id: '2760', codigoProceso: '', codigoSolapa: 0, codigoRenglon: 1,
        texto: 'MAR - 28041 -  125*104*83 DIS-007 SubOT:276000', textoToolTip: 'MAR - 28041 -  SubOT: 276000',
        horaInicio: 42681.7, cantidadHoras: 0.222917, finalizada: false,
        descripcion: '2760 - DISPLAY ENO NARANJAx 60 (30x2) BRASIL(60 PT053-100508-0B',
        cantidad: 28041, cantidad1: 0, fechaEntrega: '2016-11-11 00:00:00.000', cantidadHorasProgPrep: 0.0777778,
        cantidadHorasProgProd: 0.145139, cantidadHorasProgPar: 0, factorConversion: 1, signoConversion: '*',
        promedioPreparacion: 1.83, promedioProduccion: 6000, codigoCliente: '00000053',
        descripcionCliente: 'GLAXOSMITHKLINE ARGENTINA SA', codigoProducto: ''
      },
      {
        codigo: 853743, subId: 268400, id: '2684', codigoProceso: '', codigoSolapa: 0, codigoRenglon: 1,
        texto: 'MAR - 4195 -  86*38*180 SubOT:268400', textoToolTip: 'MAR - 4195 -  SubOT: 268400',
        horaInicio: 42681.6, cantidadHoras: 0.0596859, finalizada: false,
        descripcion: '2684 - EST. CIEL D ETE X80 ML (321) PT155-A00321-02',
        cantidad: 4195, cantidad1: 0, fechaEntrega: '2016-11-25 00:00:00.000', cantidadHorasProgPrep: 0.0256944,
        cantidadHorasProgProd: 0.0340278, cantidadHorasProgPar: 0, factorConversion: 1, signoConversion: '*',
        promedioPreparacion: 1.83, promedioProduccion: 6000, codigoCliente: '00000155',
        descripcionCliente: 'CANNON PUNTANA S.A.', codigoProducto: ''
      },
      {
        codigo: 853744, subId: 268400, id: '2684', codigoProceso: '', codigoSolapa: 0, codigoRenglon: 1,
        texto: 'MAR - 3767 -  86*38*180 SubOT:268400', textoToolTip: 'MAR - 3767 -  SubOT: 268400',
        horaInicio: 42681.5, cantidadHoras: 0.0923611, finalizada: false,
        descripcion: '2684 - EST. CIEL D ETE X80 ML (321) PT155-A00321-02',
        cantidad: 3767, cantidad1: 0, fechaEntrega: '2016-11-25 00:00:00.000', cantidadHorasProgPrep: 0.0604167,
        cantidadHorasProgProd: 0.0319444, cantidadHorasProgPar: 0, factorConversion: 1, signoConversion: '*',
        promedioPreparacion: 1.83, promedioProduccion: 6000, codigoCliente: '00000155',
        descripcionCliente: 'CANNON PUNTANA S.A.', codigoProducto: ''
      },
      {
        codigo: 853737, subId: 268300, id: '2683', codigoProceso: '', codigoSolapa: 0, codigoRenglon: 1,
        texto: 'MAR - 12959 -  86*38*145 SubOT:268300', textoToolTip: 'MAR - 12959 -  SubOT: 268300',
        horaInicio: 42681.4, cantidadHoras: 0.102778, finalizada: false,
        descripcion: '2683 - EST. CIEL D ETE X50 ML (320) PT155-A00320-02',
        cantidad: 13456, cantidad1: 0, fechaEntrega: '2016-11-25 00:00:00.000', cantidadHorasProgPrep: 0.0256944,
        cantidadHorasProgProd: 0.0770833, cantidadHorasProgPar: 0, factorConversion: 1, signoConversion: '*',
        promedioPreparacion: 1.83, promedioProduccion: 6000, codigoCliente: '00000155',
        descripcionCliente: 'CANNON PUNTANA S.A.', codigoProducto: ''
      },
      {
        codigo: 853736, subId: 268300, id: '2683', codigoProceso: '', codigoSolapa: 0, codigoRenglon: 1,
        texto: 'MAR - 12959 -  86*38*145 SubOT:268300', textoToolTip: 'MAR - 12959 -  SubOT: 268300',
        horaInicio: 42681.3, cantidadHoras: 0.10625, finalizada: false,
        descripcion: '2683 - EST. CIEL D ETE X50 ML (320) PT155-A00320-02',
        cantidad: 13797, cantidad1: 0, fechaEntrega: '2016-11-25 00:00:00.000', cantidadHorasProgPrep: 0.0277778,
        cantidadHorasProgProd: 0.0784722, cantidadHorasProgPar: 0, factorConversion: 1, signoConversion: '*',
        promedioPreparacion: 1.83, promedioProduccion: 6000, codigoCliente: '00000155',
        descripcionCliente: 'CANNON PUNTANA S.A.', codigoProducto: ''
      },
      {
        codigo: 853416, subId: 266900, id: '2669', codigoProceso: '', codigoSolapa: 0, codigoRenglon: 1,
        texto: 'MAR - 26619 -  100*100*84 (PAULA X6 SubOT:266900', textoToolTip: 'MAR - 26619 -  SubOT: 266900',
        horaInicio: 42671.1, cantidadHoras: 0.705914, finalizada: true,
        descripcion: '2669 - EST. PAULA 60 ML EAU DE TOILETTE VAP(453 PT155-453135-20+ PT155-453816-11',
        cantidad: 26619, cantidad1: 0, fechaEntrega: '2016-11-18 00:00:00.000', cantidadHorasProgPrep: 0.0527778,
        cantidadHorasProgProd: 0.138194, cantidadHorasProgPar: 0, factorConversion: 1, signoConversion: '*',
        promedioPreparacion: 1.83, promedioProduccion: 6000, codigoCliente: '00000155',
        descripcionCliente: 'CANNON PUNTANA S.A.', codigoProducto: ''
      },
      {
        codigo: 853569, subId: 253300, id: '2533', codigoProceso: '', codigoSolapa: 0, codigoRenglon: 1,
        texto: 'MAR - 19876 -  145*85*23 SubOT:253300', textoToolTip: 'MAR - 19876 -  SubOT: 253300',
        horaInicio: 42670.5, cantidadHoras: 0.122867, finalizada: true,
        descripcion: '2533 - EST. LOPLAC X 30 COMP. VTA. (D1370) PT062-001370-12',
        cantidad: 19876, cantidad1: 0, fechaEntrega: '2016-11-03 00:00:00.000', cantidadHorasProgPrep: 0.0416667,
        cantidadHorasProgProd: 0.106944, cantidadHorasProgPar: 0, factorConversion: 1, signoConversion: '*',
        promedioPreparacion: 1.83, promedioProduccion: 6000, codigoCliente: '00000062',
        descripcionCliente: 'LAB. CASASCO S.A.I.C.', codigoProducto: ''
      },
      {
        codigo: 853566, subId: 268600, id: '2686', codigoProceso: '', codigoSolapa: 0, codigoRenglon: 1,
        texto: 'MAR - 5330 -  165*136*65 C/PAMI SubOT:268600', textoToolTip: 'MAR - 5330 -  SubOT: 268600',
        horaInicio: 42670.4, cantidadHoras: 0.0669392, finalizada: true,
        descripcion: '2686 - EST.POLPER VASC.BEB X 30 VTA.(D0908) PT062-000908-12',
        cantidad: 5330, cantidad1: 0, fechaEntrega: '2016-11-22 00:00:00.000', cantidadHorasProgPrep: 0.0416667,
        cantidadHorasProgProd: 0.0388889, cantidadHorasProgPar: 0, factorConversion: 1, signoConversion: '*',
        promedioPreparacion: 1.83, promedioProduccion: 6000, codigoCliente: '00000062',
        descripcionCliente: 'LAB. CASASCO S.A.I.C.', codigoProducto: ''
      },
      {
        codigo: 853563, subId: 253200, id: '2532', codigoProceso: '', codigoSolapa: 0, codigoRenglon: 1,
        texto: 'MAR - 7981 -  87*67*33 SubOT:253200', textoToolTip: 'MAR - 7981 -  SubOT: 253200',
        horaInicio: 42670.3, cantidadHoras: 0.0926683, finalizada: true,
        descripcion: '2532 - EST. CARRIER 10 X30 VTA MARCHESINI(D2597 PT062-002597-02',
        cantidad: 7981, cantidad1: 0, fechaEntrega: '2016-11-03 00:00:00.000', cantidadHorasProgPrep: 0.0416667,
        cantidadHorasProgProd: 0.0513889, cantidadHorasProgPar: 0, factorConversion: 1, signoConversion: '*',
        promedioPreparacion: 1.83, promedioProduccion: 6000, codigoCliente: '00000062',
        descripcionCliente: 'LAB. CASASCO S.A.I.C.', codigoProducto: ''
      },
      {
        codigo: 853437, subId: 263300, id: '2633', codigoProceso: '', codigoSolapa: 0, codigoRenglon: 1,
        texto: 'MAR - 1152 -  102*75*25M SubOT:263300', textoToolTip: 'MAR - 1152 -  SubOT: 263300',
        horaInicio: 42670.2, cantidadHoras: 0.0905969, finalizada: true,
        descripcion: '2633 - EST.TRIFAMOX IBL 12H COR X2 MTRA.MEXICO PT033-945871-12',
        cantidad: 1152, cantidad1: 0, fechaEntrega: '2016-12-07 00:00:00.000', cantidadHorasProgPrep: 0.0534722,
        cantidadHorasProgProd: 0.01875, cantidadHorasProgPar: 0, factorConversion: 1, signoConversion: '*',
        promedioPreparacion: 1.83, promedioProduccion: 6000, codigoCliente: '00000033',
        descripcionCliente: 'LABORATORIOS BAGO S.A.', codigoProducto: ''
      },
      {
        codigo: 853560, subId: 267200, id: '2672', codigoProceso: '', codigoSolapa: 0, codigoRenglon: 1,
        texto: 'MAR - 3741 -  145*70*25 PLN 9566-0 SubOT:267200', textoToolTip: 'MAR - 3741 -  SubOT: 267200',
        horaInicio: 42670.2, cantidadHoras: 0.0539657, finalizada: true,
        descripcion: '2672 - EST. DIOXAFLEX PROTECT CPS X 10 (5100038 PT033-000380-14',
        cantidad: 3741, cantidad1: 0, fechaEntrega: '2016-11-10 00:00:00.000', cantidadHorasProgPrep: 0.04375,
        cantidadHorasProgProd: 0.0319444, cantidadHorasProgPar: 0, factorConversion: 1, signoConversion: '*',
        promedioPreparacion: 1.83, promedioProduccion: 6000, codigoCliente: '00000033',
        descripcionCliente: 'LABORATORIOS BAGO S.A.', codigoProducto: ''
      },
      {
        codigo: 853557, subId: 264900, id: '2649', codigoProceso: '', codigoSolapa: 0, codigoRenglon: 1,
        texto: 'MAR - 1894 -  105*70*25 TX PS320G SubOT:264900', textoToolTip: 'MAR - 1894 -  SubOT: 264900',
        horaInicio: 42670.1, cantidadHoras: 0.0331425, finalizada: true,
        descripcion: '2649 - EST. BENAPROST 5 COM X28 (50999596) PT033-999596-13',
        cantidad: 1894, cantidad1: 0, fechaEntrega: '2016-11-07 00:00:00.000', cantidadHorasProgPrep: 0.04375,
        cantidadHorasProgProd: 0.0229167, cantidadHorasProgPar: 0, factorConversion: 1, signoConversion: '*',
        promedioPreparacion: 1.83, promedioProduccion: 6000, codigoCliente: '00000033',
        descripcionCliente: 'LABORATORIOS BAGO S.A.', codigoProducto: ''
      },
      {
        codigo: 853434, subId: 263600, id: '2636', codigoProceso: '', codigoSolapa: 0, codigoRenglon: 1,
        texto: 'MAR - 3369 -  102*75*25 SubOT:263600', textoToolTip: 'MAR - 3369 -  SubOT: 263600',
        horaInicio: 42670.1, cantidadHoras: 0.0340147, finalizada: true,
        descripcion: '2636 - EST. SEPTILISIN DUO COR X 14 (50945311) PT033-945311-14',
        cantidad: 3369, cantidad1: 0, fechaEntrega: '2016-12-07 00:00:00.000', cantidadHorasProgPrep: 0.04375,
        cantidadHorasProgProd: 0.0298611, cantidadHorasProgPar: 0, factorConversion: 1, signoConversion: '*',
        promedioPreparacion: 1.83, promedioProduccion: 6000, codigoCliente: '00000033',
        descripcionCliente: 'LABORATORIOS BAGO S.A.', codigoProducto: ''
      },
      {
        codigo: 853431, subId: 263700, id: '2637', codigoProceso: '', codigoSolapa: 0, codigoRenglon: 1,
        texto: 'MAR - 2260 -  102*75*25 SubOT:263700', textoToolTip: 'MAR - 2260 -  SubOT: 263700',
        horaInicio: 42670.1, cantidadHoras: 0.0256201, finalizada: true,
        descripcion: '2637 - EST. TRIFAMOX IBL DUO COR.X 14 (50945123 PT033-945123-12',
        cantidad: 2260, cantidad1: 0, fechaEntrega: '2016-12-07 00:00:00.000', cantidadHorasProgPrep: 0.04375,
        cantidadHorasProgProd: 0.025, cantidadHorasProgPar: 0, factorConversion: 1, signoConversion: '*',
        promedioPreparacion: 1.83, promedioProduccion: 6000, codigoCliente: '00000033',
        descripcionCliente: 'LABORATORIOS BAGO S.A.', codigoProducto: ''
      }
    ];
  }



  buscarTodosLosRegistros(): ITablero[] {
    return this.items;
  };
}