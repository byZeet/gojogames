import { mongoConnect } from '../connection';
import Cart from '../models/cart.model';
import User from '../models/user.model';
import Juego from '../models/juego.model';
import { Cart as CartType, CartItem as CartItemType } from '@/types';

export const addToCart = async (clerkId: string, productId: string, quantity: number): Promise<CartType> => {
  await mongoConnect();

  const user = await User.findOne({ clerkId });
  if (!user) {
    throw new Error('User not found');
  }

  const juego = await Juego.findById(productId);
  if (!juego) {
    throw new Error('Juego not found');
  }

  let cart = await Cart.findOne({ userId: user._id });

  if (!cart) {
    cart = new Cart({ userId: user._id, items: [] });
  }

  const itemIndex = cart.items.findIndex((item: CartItemType) => item.productId.toString() === productId);

  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  await cart.save();

  return cart.populate('items.productId').execPopulate(); // Ensure populated data is returned
};

export const getCart = async (clerkId: string): Promise<CartType | null> => {
  await mongoConnect();

  const user = await User.findOne({ clerkId });
  if (!user) {
    throw new Error('User not found');
  }

  const cart = await Cart.findOne({ userId: user._id }).populate('items.productId');

  return cart;
};
