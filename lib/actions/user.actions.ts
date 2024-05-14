'use server';
import { mongoConnect } from "../connection";
import User from "../models/user.model";

/* Logica para crear usuario */
export async function createUser (user: any){
    try{
        /* hacer la conexion */
        await mongoConnect();
        /* crear un nuevo usuario utilizando el modelo de usuario */
        const newUser = await User.create(user);

        return JSON.parse(JSON.stringify(newUser));
    }catch(error){
        console.log(error);
    }
}

/* Función para obtener todos los datos de un usuario por su clerkId */
export async function getUserByClerkId(clerkId:any) {
    try {
        /* hacer la conexion */
        await mongoConnect();
        /* buscar el usuario por su clerkId */
        const user = await User.findOne({ clerkId });

        return user; // Devolver el usuario encontrado
    } catch (error) {
        console.log(error);
    }
}