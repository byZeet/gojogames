import mongoose from "mongoose";

const connection_url = process.env.CONNECTION_URL;

if (!connection_url) {
    throw new Error("CONNECTION_URL no esta definidia");
}

let cache = global.mongoose || {conn: null, promise: null};

export const mongoConnect = async () => {
    try{
        / verificamos si ya se ha realizado la conexion /
        if (cache.conn) {
            console.log("Conexion realizada previamente")
            return cache.conn;
        }

        cache.promise = cache.promise || mongoose.connect(connection_url, {
            dbName:"gojogames",
            bufferCommands: false
        });

        / esperamos a que se realice la conexion */

        cache.conn =await cache.promise;

        console.log("Conexion realizada con exito");

        return cache.conn;

    }catch(err){
        console.log(err);
    }
}