export interface Reserva {
    id: number;
    idVuelo: number;
    idAsiento: number;
    idUsuario: number;
    precio: number;
    estadoPago: string;
    fecha: Date;
    estado: string;
}