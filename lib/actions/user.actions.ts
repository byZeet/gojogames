'use server';
import { mongoConnect } from "../connection";
import User from "../models/user.model";

/* Logica para crear usuario */
export async function createUser(user:any) {
    try {
        await mongoConnect();

        // Crear un nuevo usuario utilizando el modelo de usuario
        const newUser = new User({
            clerkId: user.clerkId,
            email: user.email,
            username: user.username,
            photo: user.photo,
            cartId: [],
            purchaseHistory: [],
        });

        await newUser.save();
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error('Error creating user');
    }
}

/* Función para obtener todos los datos de un usuario por su clerkId */
export async function getUserByClerkId(clerkId:any) {
    try {
        await mongoConnect();

        // Buscar el usuario por su clerkId
        const user = await User.findOne({ clerkId });

        return user; // Devolver el usuario encontrado
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching user by clerkId');
    }
}