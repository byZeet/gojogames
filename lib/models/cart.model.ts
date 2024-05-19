import { Schema, model, models, Document } from 'mongoose';

interface ICartItem {
  productId: string;
  quantity: number;
}

interface ICart extends Document {
  userId: string;
  items: ICartItem[];
}

const CartItemSchema: Schema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Juego', required: true },
  quantity: { type: Number, required: true },
});

const CartSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [CartItemSchema],
});

const Cart = models.Cart || model<ICart>('Cart', CartSchema);

export default Cart;
