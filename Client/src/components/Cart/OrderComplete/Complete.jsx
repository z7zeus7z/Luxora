import React from 'react'
import style from '../../../styles/Cart/Complete.module.css'
import { useCart } from "../../../context/CartContext";

const Complete = () => {
  const { cart } = useCart();

  // --- Generate order code ---
  const orderCode = "#ORD" + Math.floor(100000 + Math.random() * 900000);

  // --- Today's Date ---
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  // --- Total Price ---
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className={style.thanks}>Thank You &#x1F389;</div>

      <div className={style.products}>
        {cart.length === 0 ? (
          <p>No products</p>
        ) : (
          cart.map((item) => (
            <img 
              key={item._id} 
              src={item.mainImage} 
              alt={item.name} 
            />
          ))
        )}
      </div>

      <div className={style.orderDetails}>
        
        <div className={style.orderCode}>
          <div className={style.title}><h5>Order code :</h5></div>
          <p>{orderCode}</p>
        </div>

        <div className={style.orderDate}>
          <div className={style.title}><h5>Date :</h5></div>
          <p>{today}</p>
        </div>

        <div className={style.orderTotal}>
          <div className={style.title}><h5>Total</h5></div>
          <p>${total.toFixed(2)}</p>
        </div>

        <div className={style.orderPayment}>
          <div className={style.title}><h5>Payment method</h5></div>
          <p>Credit Card</p>
        </div>

      </div>

      <div className={style.purchaseHistory}>
        <button>Purchase history</button>
      </div>
    </>
  )
}

export default Complete;
