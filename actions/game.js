"use server"

import { mongoConnect } from '../database/connection';
import Game from '../database/models/games';

// Obetener todos los juegos

export async function getAllGames() {
    try {

        // Hacer la conexión
        await mongoConnect();
        // Buscar los juegos
        const games = await Game.find();
        // Los convertimos en JSON
        return JSON.parse(JSON.stringify(games));

    } catch (err) {
        console.error(err);
    }
}