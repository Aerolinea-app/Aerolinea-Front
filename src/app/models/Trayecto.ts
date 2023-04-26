export interface Trayecto {
    id: number;
    idAvion: number;
    idVuelo: number;
    idAeropuertoDestino: number;
    idAeropuertoOrigen: number;
    horaSalida: Date;
    horaLlegada: Date;
    estado: string;
}