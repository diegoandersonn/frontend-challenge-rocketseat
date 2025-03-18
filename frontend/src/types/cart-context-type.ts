import { ReactNode } from "react";
import { ProductType } from "./product-type";

export type CartContextType = {
  cart: ProductType[];
  setCart: (cart: ProductType[]) => void;
  addToCart: (product: ProductType) => void;
  deleteProduct: (product: ProductType) => void;
  updateProduct: (product: ProductType) => void;
  getCartSum: () => number;
  amount: number;
};

export type CartProviderType = {
  children: ReactNode;
};
