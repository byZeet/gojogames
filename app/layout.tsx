'use client';

import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";
import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader/Loader'; // Asegúrate de ajustar la ruta correctamente
import { metadata } from './metadata'; // Importar los metadatos

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      // Simular carga de datos
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    loadData();
  }, []);

  const title = metadata.title || "Default Title";
  const description = metadata.description || "Default Description";

  if (isLoading) {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{String(title)}</title>
          <meta name="description" content={String(description)} />
        </head>
        <body className={`${inter.className} text-base`}>
          <div className="flex items-center justify-center min-h-screen">
            <Loader />
          </div>
        </body>
      </html>
    );
  }

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{String(title)}</title>
          <meta name="description" content={String(description)} />
        </head>
        <body className={`${inter.className} text-base`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
