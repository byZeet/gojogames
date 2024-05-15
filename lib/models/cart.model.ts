import { Schema, model, models } from "mongoose";

const CartSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    items: [{
        juegoId: {
            type: Schema.Types.ObjectId,
            ref: 'juego',
            required: true
        },
        cantidad: {
            type: Number,
            required: true,
            default: 1
        },
        titulo: {
            type: String,
            required: true
        },
        foto: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        genero: {
            type: String,
            required: true
        }
    }]
})

const Cart = models.Cart || model('Cart', CartSchema)
export default Cart;