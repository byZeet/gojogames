import { getAllGames } from "../../actions/game";

import React from 'react'

export default async function Games() {

    const games = await getAllGames();
    console.log(games);

    return (
        <main>
            <h1>Ver Juegos</h1>
        </main>
    )
}