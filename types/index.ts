import { Types } from "mongoose";

export type Juego = {
  titulo: string;
  precio: number;
  foto: string;
  demo_disponible: boolean;
  dlc: boolean;
  oferta: number;
  stock: boolean;
  tiempo_restante: string;
  fecha: string;
};
