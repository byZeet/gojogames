// models/cart.model.js
import { Schema, model, models } from 'mongoose';

const CartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Juego',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                default: 1,
            },
        },
    ],
});

const Cart = models.Cart || model('Cart', CartSchema);

export default Cart;
