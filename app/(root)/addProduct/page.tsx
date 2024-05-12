'use client'

import { useState } from 'react'

import React from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import { ProductsList } from '@/components/ProductsList/ProductsList'
import Link from 'next/link'

const addProductPage = () => {

const [name, setName] = useState("");
const [image, setImage] = useState("");
const [category, setCategory] = useState("");
const [badge, setBadge] = useState("");
const [oferta, setOferta] = useState("");
const [timeoferta, setTimeoferta] = useState("");
const [price, setPrice] = useState("");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !image) {
        alert("El nombre y la imágen son necesarios");
        return;
    }

    try {
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
}



    return (
        <main className="min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-md max-w-md w-full">
                <h1 className="text-center font-bold text-black text-2xl mb-8">Add New Product</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                    <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text" 
                    placeholder="Nombre Juego" 
                    className="input input-bordered input-primary" 
                    />
                    <input
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    type="text" 
                    placeholder="Selecciona una imagen" 
                    className="input input-bordered input-primary" 
                    />
                    <input
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    type="text" 
                    placeholder="Género" 
                    className="input input-bordered input-primary" 
                    />
                    <input
                    onChange={(e) => setBadge(e.target.value)}
                    value={badge}
                    type="text" 
                    placeholder="Estado" 
                    className="input input-bordered input-primary" 
                    />
                    <input
                    onChange={(e) => setOferta(e.target.value)}
                    value={oferta}
                    type="text" 
                    placeholder="% de oferta" 
                    className="input input-bordered input-primary" 
                    />
                    <input
                    onChange={(e) => setTimeoferta(e.target.value)}
                    value={timeoferta}
                    type="text" 
                    placeholder="Tiempo oferta" 
                    className="input input-bordered input-primary" 
                    />
                    <input
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    type="text" 
                    placeholder="Precio Juego" 
                    className="input input-bordered input-primary" 
                    />

                    <button className="btn btn-neutral">Neutral</button>
                </form>
            </div>
        </main>
    )
}

export default addProductPage
