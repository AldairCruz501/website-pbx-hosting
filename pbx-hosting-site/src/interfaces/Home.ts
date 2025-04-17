export interface Card {
    imagen: string;
    titulo: string;
    descripcion: string;
}

export interface Service {
    num: string;
    nombre: string;
    descripcion: string;
}

export interface HomeData {
    cards: Card[];
    services: Service[];
}