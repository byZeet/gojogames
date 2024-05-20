// src/components/Orders.tsx

'use client';
import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { getOrdersByClerkId } from '@/lib/actions/orders.actions';
import './Orders.scss';

const Loader = () => (
  <div className="loader-wrapper">
    <div className="wrapper">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
    </div>
  </div>
);

const formatPrice = (num: number) => {
  return num.toFixed(2);
};

export const Orders = () => {
  const { user } = useUser();
  const clerkId = user?.id || '';
  const [orders, setOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!clerkId) return;
      setIsLoading(true);
      try {
        const userOrders = await getOrdersByClerkId(clerkId);
        setOrders(userOrders);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [clerkId]);

  if (isLoading) return <Loader />;

  return (
    <main className="min-h-screen bg-[#151515] py-20">
      <div className="flex justify-center py-8">
        <div className="w-[1500px] px-4">
          <h2 className="text-2xl font-semibold mb-4 text-white">Mis Pedidos</h2>
          {orders.length === 0 ? (
            <p className="custom-subtext-orders">No tienes pedidos aún.</p>
          ) : (
            orders.map((order, index) => (
              <div 
                key={index} 
                className="order-container bg-[#202020] p-6 rounded-lg mb-6 text-white relative shadow-md hover:outline hover:outline-blue-500 fade-outline"
              >
                <div className="absolute top-0 right-0 bg-[#00dd3b2d] text-lime-500 px-3 py-1 rounded">Completado</div>
                {order.compra_juego.map((juego: any, i: number) => (
                  <div key={i}>
                    <div className="flex items-center space-x-4 mt-4">
                      <img className="w-44 h-auto rounded" src={juego.foto} alt={juego.titulo} />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{juego.titulo}</h3>
                        <p className="mt-1 custom-subtext-orders">Nº de copias {juego.cantidad}</p>
                      </div>
                      <div className="ml-auto">
                        <p className="text-xl font-semibold">{formatPrice(juego.precio * juego.cantidad)}€</p>
                      </div>
                    </div>
                    {i < order.compra_juego.length - 1 && <hr className="my-4 custom-hr-orders" />}
                  </div>
                ))}
                <hr className="my-4 custom-hr2-orders" />
                <div className="flex justify-between items-center">
                  <p className='custom-subtext-orders'>Impuesto (0.00%):</p>
                  <p>0.00€</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold">Total:</p>
                  <p className="text-xl font-bold">
                    {formatPrice(order.compra_juego.reduce((total: number, juego: any) => total + (juego.precio * juego.cantidad), 0))}€
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-sm custom-subtext-orders">Pedido #{order._id}</p>
                  <a href="#" className="text-blue-500">Descargar factura</a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Orders;
