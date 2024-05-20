// lib/actions/cart.actions.ts
import { ObjectId } from 'mongoose';
import CartModel from '../models/cart.model'; // Renombrar la importación del modelo
import PurchaseModel from '../models/purchase.model';
import User from '../models/user.model';
import { mongoConnect } from '../connection';
import { CartItem, Cart as CartType, Purchase as PurchaseType } from '../../types/index'; // Ruta correcta

export async function addToCart(userId: ObjectId, productId: ObjectId, quantity: number = 1): Promise<CartType> {
    await mongoConnect();

    let cart = await CartModel.findOne({ userId });

    if (!cart) {
        cart = new CartModel({ userId, items: [] });
    }

    const existingItemIndex = cart.items.findIndex(
        (item: CartItem) => item.productId.toString() === productId.toString()
    );

    if (existingItemIndex !== -1) {
        cart.items[existingItemIndex].quantity += quantity;
    } else {
        cart.items.push({ productId, quantity });
    }

    await cart.save();
    return cart;
}

export async function removeFromCart(userId: ObjectId, productId: ObjectId): Promise<CartType | null> {
    await mongoConnect();

    const cart = await CartModel.findOne({ userId });

    if (!cart) return null;

    cart.items = cart.items.filter(
        (item: CartItem) => item.productId.toString() !== productId.toString()
    );

    await cart.save();
    return cart;
}

export async function purchaseCart(userId: ObjectId): Promise<PurchaseType | null> {
    await mongoConnect();

    const cart = await CartModel.findOne({ userId }).populate('items.productId');

    if (!cart || cart.items.length === 0) return null;

    const purchase = new PurchaseModel({
        userId,
        items: cart.items,
        purchaseDate: new Date(),
    });

    await purchase.save();

    const user = await User.findById(userId);
    user.purchaseHistory.push(purchase._id);
    await user.save();

    await CartModel.deleteOne({ userId });

    return purchase;
}
