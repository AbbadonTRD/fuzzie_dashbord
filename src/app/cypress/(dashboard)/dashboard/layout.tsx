/* eslint-disable @typescript-eslint/no-explicit-any */
import AppStateProvider from "@/lib/providers/state-provider";
import { SubscriptionModalProvider } from "@/lib/providers/subscription-modal-provider";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Getting the static mock products
  //   const { data: products, error } = getActiveProductsWithPrice();
  const products = [
    {
      id: "1",
      name: "Product 1",
      price: 100,
      image: "/product-1.jpg",
    },
  ];
  //   if (error) throw new Error();

  return (
    <main className="flex over-hidden h-screen">
      <AppStateProvider>
        <SubscriptionModalProvider products={products as any}>
          {children}
        </SubscriptionModalProvider>
      </AppStateProvider>
    </main>
  );
};

export default Layout;
