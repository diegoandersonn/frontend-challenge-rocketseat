import { CartContextType, CartProviderType } from "@/types/cart-context-type";
import { ProductType } from "@/types/product-type";
import { createContext, useState } from "react";

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export const CartProvider = ({ children }: CartProviderType) => {
  const [cart, setCart] = useState<ProductType[]>([]);
  const [amount, setAmount] = useState<number>(0);
  const MAX_CART_QUANTITY = 10;
  function isProductRepeated(product: ProductType) {
    return cart.find((p) => p.id !== product.id);
  }
  function addToCart(product: ProductType) {
    console.log(product.quantity)
    if (isProductRepeated(product)) {
      if (product.quantity < MAX_CART_QUANTITY) {
        product.quantity++;
        setCart((prevCart) => [...prevCart, product]);
        setAmount(amount + 1);
      }
    }
  }
  function deleteProduct(product: ProductType) {
    setCart((prevCart) => prevCart.filter((p) => p.id !== product.id));
    setAmount(amount - 1);
  }
  return (
    <CartContext value={{ cart, setCart, addToCart, deleteProduct, amount }}>
      {children}
    </CartContext>
  );
};
