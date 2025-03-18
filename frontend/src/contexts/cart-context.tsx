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
    return cart.find((p) => p.id === product.id);
  }
  function addToCart(product: ProductType) {
    if (isProductRepeated(product)) {
      const repeatedProduct = cart.find((p) => p.id === product.id);
      if (repeatedProduct?.quantity) {
        if (repeatedProduct?.quantity < MAX_CART_QUANTITY) {
          repeatedProduct.quantity++;
          setAmount(amount + 1);
        }
      }
    } else {
      product.quantity = 1;
      setCart((prevCart) => [...prevCart, product]);
      setAmount(amount + 1);
    }
  }
  function deleteProduct(product: ProductType) {
    setCart((prevCart) => prevCart.filter((p) => p.id !== product.id));
    setAmount(amount - product.quantity);
  }

  function updateProduct(newProduct: ProductType) {
    setCart((prevCart) =>
      prevCart.map((p) => (p.id === newProduct.id ? newProduct : p))
    );
  }

  function getCartSum() {
    let sum = 0;
    cart.map((product) => {
      sum += product.price_in_cents * product.quantity;
    });
    return sum;
  }
  return (
    <CartContext
      value={{
        cart,
        setCart,
        addToCart,
        deleteProduct,
        updateProduct,
        amount,
        getCartSum,
      }}
    >
      {children}
    </CartContext>
  );
};
