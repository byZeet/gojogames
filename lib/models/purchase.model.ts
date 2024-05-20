// models/purchase.model.js
import { Schema, model, models } from 'mongoose';

const PurchaseSchema = new Schema({
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
            },
        },
    ],
    purchaseDate: {
        type: Date,
        default: Date.now,
    },
});

const Purchase = models.Purchase || model('Purchase', PurchaseSchema);

export default Purchase;
