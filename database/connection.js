import mongoose from "mongoose";

const connection_url = process.env.CONNECTION_URL;


// Verifica si sirve el URL
if (!connection_url) {
    throw new Error("CONNECTION_URL is not defined");
}

let cache = global.mongoose || { conn: null, promise: null};

export const mongoConnect = async () => {
    try {
        // Verificamos si ya se ha realizado la conexión
        if (cache.conn) {
            console.log("Conexión ya realizada previamente")
            return cache.conn;
        }

        cache.promise = cache.promise || mongoose.connect(connection_url, {
            dbName: "gojogames",
            bufferCommands: false
        });

        //Esperamos a que se realize la conexión
        cache.conn = await cache.promise;

        console.log("Conexión realizada con éxito");

        return cache.conn;

    } catch (err) {
        console.log(err);
    }
}
