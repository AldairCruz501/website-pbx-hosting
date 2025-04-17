export interface Servicio {
    nombre: string,
    route: string,
    servicios: Servicios[],
}

export interface Servicios {
    nombre: string,
    route: string,
}
