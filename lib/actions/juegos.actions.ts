"use server"

import { mongoConnect } from "../connection";
import Juego from "../models/juego.model";

export async function getJuegos() {
    try {
        await mongoConnect();
        
        const juegos = await Juego.find().limit(24);
        console.log(juegos)

        return JSON.parse(JSON.stringify(juegos));

    } catch (error) {
        console.log(error);
    }
};

export async function getCategorias() {
    try {
        await mongoConnect();
        
        const juegos = await Juego.find().limit(24);
        console.log(juegos)

        return JSON.parse(JSON.stringify(juegos));

    } catch (error) {
        console.log(error);
    }
};


export async function getJuegosOferta() {
    try {
        await mongoConnect();
        const juegos = await Juego.find({ oferta: { $gt : 0} }).limit(8);
        console.log(juegos)
        return JSON.parse(JSON.stringify(juegos));
    } catch (error) {
        console.log(error);
    }
};

export async function getJuegosProximos() {
    try {
        await mongoConnect();
        const juegos = await Juego.find({ fecha: { $exists: true, $ne: null } }).limit(8);
        console.log(juegos)
        return JSON.parse(JSON.stringify(juegos));
    } catch (error) {
        console.log(error);
    }
};

