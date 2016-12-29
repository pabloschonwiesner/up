export interface ProduccionModel {
    CodigoInterno: number,
    CodigoTablero: number,
    Cs: number,
    Cr: number,
    Estado: string,
    Inicio: number,
    Fin: number,
    CodigoMotivo: number,
    Activo: boolean,
    Cantidad: number,
    Cantidad1: number,
    Observaciones: string,
    Aviso: boolean,
    AvisoIDNoDisponible: boolean,
    CodigoTurno: number,
    CodigoUsuario: number,
    CodigoUsuario2: number,
    CodigoUsuario3: number,
    CodigoUsuario4: number,
    CodigoUsuario5: number,
    CodigoUsuario6: number,
    CodigoUsuario7: number,
    CodigoUsuario8: number,
    CodigoUsuario9: number,
    CodigoUsuario10: number,
    Notificado1: boolean,
    Notificado2: boolean,
    Origen: string,
    Marcado: boolean,
    FactorConversionProduccion: number,
    CodigoProcesoProduccion: string,
    CodigoProductoProduccion: string,
    Interno: string
}

export interface UsuariosModel{
    Codigo: number,
    Nombre: String,
    Password: String,
    Inactivo: boolean,
    CodigoTipoUsuario: number,
    CodigoAdicional: String,
    PathFoto: String,
    CodigoPerfilGP: number,
    SesionActiva: boolean,
    UltimoCambioPassword: String,
    IntentosFallidos: number,
    LoginBloqueados: boolean
}

export interface TurnosModel{
    Codigo: number,
    Descripcion: String,
    CodigoAdicional: String,
    InicioTurno: number,
    FinTurno: number
}