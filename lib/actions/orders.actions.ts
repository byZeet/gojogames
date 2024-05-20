"use server"

import { mongoConnect } from "../connection";
import Order from "../models/orders.model";

export async function createOrders(clerkId: string, compra_juego: { titulo: string, precio: number, foto: string, cantidad: number }[], precio_total: number) {
    try {
        await mongoConnect();
        const order = await Order.create({
            clerkId,
            compra_juego,
            precio_total
        });
        return order.toObject(); // Convertir a objeto plano
    } catch (error) {
        console.log(error);
        throw new Error("Error creating order");
    }
}


export async function getOrdersByClerkId(clerkId: string) {
    try {
        await mongoConnect();
        const orders = await Order.find({ clerkId });
        return orders.map(order => order.toObject()); // Convertir a objetos planos
    } catch (error) {
        console.log(error);
        throw new Error("Error retrieving orders");
    }
}