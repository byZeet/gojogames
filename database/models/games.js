import { Schema, model, models } from "mongoose";

const gamesSchema = new Schema ({
    nombre: {
        type: String,
        required: true
      },
    genero: {
        type: String,
        required: true
      },
    plataformas: {
        type: String,
        required: true
      },
    precio: {
        type: Number,
        required: true
      },
    descripcion: {
        type: String,
        required: true
      }
});

const Game = models.Game || model("Game", gamesSchema);

export default Game;