import { Schema, model, models } from "mongoose";

const juegoSchema = new Schema({
  titulo: { type: String, required: true },
  descipcion: { type: String, required: true },
  genero: { type: String, required: true },
  precio: { type: Number, required: true },
  foto: { type: String, required: true },
  demo_disponible: { type: Boolean, required: true },
  dlc: { type: Boolean, required: true },
  oferta: { type: Number, required: true },
  oferta_aplicada: { type: Number, required: true },
  precio_original: { type: Number, required: true },
  stock: { type: Boolean, required: true },
  tiempo_restante: { type: String, required: true },
  fecha: { type: String, required: true },
  imagenes: { type: [String], required: false },
});

const Juego = models.Juego || model("Juego", juegoSchema);

export default Juego;
