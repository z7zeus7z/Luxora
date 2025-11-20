import React from "react";
import { useCart } from "../../../context/CartContext";
import style from "../../../styles/Cart/ShoppingCart.module.css";

const ProductCart = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const increase = () => {
    updateQuantity(item._id, item.quantity + 1);
  };

  const decrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item._id, item.quantity - 1);
    }
  };

  return (
    <div className={style.cartRow}>
      <div className={style.productInfo}>
        <img src={item.mainImage} alt={item.name} />
        <p>{item.name}</p>
      </div>

      <div className={style.quantityBox}>
        <button onClick={decrease}>-</button>
        <p>{item.quantity}</p>
        <button onClick={increase}>+</button>
      </div>

      <div className={style.priceBox}>
        <p>${(item.price * item.quantity).toFixed(2)}</p>
      </div>

      <button className={style.removeBtn} onClick={() => removeFromCart(item._id)}>
        ✕
      </button>
    </div>
  );
};

export default ProductCart;
