import { Schema, model, models } from "mongoose";

const orderSchema = new Schema({
    clerkId: {
        type: String,
        required: true
    },
    compra_juego: [{
        titulo: { type: String, required: true },
        precio: { type: Number, required: true },
        foto: { type: String, required: true },
        cantidad: { type: Number, required: true, min: 1 }
    }],
    precio_total: { type: Number, required: true, min: 1 }
}, {
    toObject: { virtuals: true }, // Asegurarse de que se convierta a objeto plano
    toJSON: { virtuals: true }
});

const Order = models.Order || model("Order", orderSchema);

export default Order;