import { Types } from "mongoose";

export type Juego = {
  titulo: string;
  precio: number;
  genero: string;
  foto: string;
  demo_disponible: boolean;
  dlc: boolean;
  oferta: number;
  oferta_aplicada:number; 
  precio_original: number;
  stock: boolean;
  tiempo_restante: string;
  fecha: string;
};
