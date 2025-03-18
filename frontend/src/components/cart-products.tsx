/* eslint-disable @next/next/no-img-element */
import { CartContext } from "@/contexts/cart-context";
import { useContext } from "react";
import styled from "styled-components";
import Trash from "./trash";
import { ProductType } from "@/types/product-type";

const CartProductsStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  height: 100%;
  overflow-y: scroll;
  li {
    list-style: none;
    display: flex;
    background-color: white;
    border-radius: 8px;
    width: 736px;
    img {
      width: 256px;
      height: 211px;
      border-radius: 8px 0 0 8px;
    }

    .right {
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .top {
        display: flex;
        justify-content: space-between;
        h1 {
          font-family: inherit;
          font-weight: 300;
          font-size: 20px;
          line-height: 150%;
          letter-spacing: 0%;
          vertical-align: middle;
          color: var(--font-primary);
        }
        button {
          border: none;
          background-color: transparent;
        }
      }
      p {
        font-family: inherit;
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;
        margin-bottom: 25px;
      }
      .bottom {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        select {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid #a8a8b3;
          border-radius: 8px;
          background-color: #f3f5f6;
          padding: 0.5rem 1rem;
          font-family: inherit;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          letter-spacing: 0%;
          text-align: center;
          vertical-align: middle;
          text-transform: uppercase;
        }
        h2 {
          font-family: inherit;
          font-weight: 600;
          font-size: 16px;
          line-height: 150%;
          letter-spacing: 0%;
          text-align: right;
          vertical-align: middle;
          color: var(--price-color);
        }
      }
    }
  }
`;

export default function CartProducts() {
  const { cart, deleteProduct, updateProduct } = useContext(CartContext);
  const selectOptions = Array.from({ length: 10 }, (_, i) => i+1);
  function handleSelectChange(quantity: string, product: ProductType) {
    const newProduct: ProductType = { ...product, quantity: Number(quantity) };
    updateProduct(newProduct);
  }
  return (
    <CartProductsStyle>
      {cart.map((product) => (
        <li key={product.id}>
          <img src={product.image_url} alt={product.name} />
          <div className="right">
            <div className="top">
              <h1>{product.name}</h1>
              <button onClick={() => deleteProduct(product)}>
                <Trash />
              </button>
            </div>
            <p>{product.description}</p>
            <div className="bottom">
              <select
                value={product.quantity}
                onChange={(e) => handleSelectChange(e.target.value, product)}
              >
                {selectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <h2>R$ {product.price_in_cents * product.quantity}</h2>
            </div>
          </div>
        </li>
      ))}
    </CartProductsStyle>
  );
}
