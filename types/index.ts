import { Types } from "mongoose";

export interface Juego {
  _id: string;
  titulo: string;
  genero: string;
  precio: number;
  foto: string;
  demo_disponible: boolean;
  dlc: boolean;
  oferta: boolean;
  oferta_aplicada: number;
  precio_original: number;
  stock: boolean;
  tiempo_restante: string;
  fecha?: string;
  descripcion: string;
  imagenes?: string[];
}

export interface CartItem {
  productId: Juego;
  quantity: number;
}

export interface Cart {
  userId: string;
  items: CartItem[];
}
