import React from "react";
import style from "../../../styles/Cart/ShoppingCart.module.css";
import ProductCart from "./ProductCart";
import { useCart } from "../../../context/CartContext";

const ShopingCart = ({ setActiveTab }) => {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className={style.productContainer}>
        <div className={style.tableTitles}>
          <div className={style.ProductsTitle}>
            <h4>Products</h4>
          </div>
          <div className={style.QuantityTitle}>
            <h4>Quantity</h4>
          </div>
          <div className={style.PriceTitle}>
            <h4>Price</h4>
          </div>
        </div>

       
        {cart.length === 0 ? (
  <p>Your cart is empty.</p>
) : (
  cart.map(item => <ProductCart key={item._id} item={item} />)
)}
      </div>

      <div className={style.summeryContainer}>
        <div className={style.summaryTitle}>
          <h4>Cart summary</h4>
        </div>

        <div className={style.shippingOptions}>
          <div className={style.option}>
            <label>
              <input type="radio" />
              Free shipping
            </label>
            <p>$0.00</p>
          </div>
          <div className={style.option}>
            <label>
              <input type="radio" />
              Express shipping
            </label>
            <p>+$15.00</p>
          </div>
          <div className={style.option}>
            <label>
              <input type="radio" />
              Pick Up
            </label>
            <p>$21.00</p>
          </div>
        </div>

        <div className={style.subTotal}>
          <h5>Subtotal</h5>
          <p>${subtotal.toFixed(2)}</p>
        </div>

        <hr />

        <div className={style.Total}>
          <h4>Total</h4>
          <p>${subtotal.toFixed(2)}</p>
        </div>

        <button
          onClick={() => setActiveTab("checkout")}
          className={style.checkOut}
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default ShopingCart;
