import React from "react";
import style from "../../../styles/Cart/CheckOut.module.css";
import { useCart } from "../../../context/CartContext";
import ProductCart from "../ShopingCart/ProductCart";

const CheckOut = ({ setActiveTab }) => {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 0; // free
  const total = subtotal + shipping;

  return (
    <>
      <div className={style.contact}>
        <h3 className={style.contactTitle}>Contact Information</h3>

        <div className={style.contactName}>
          <div className={style.fName}>
            <label>FIRST NAME</label>
            <input placeholder="First name" type="text" />
          </div>
          <div className={style.lName}>
            <label>LAST NAME</label>
            <input placeholder="Last name" type="text" />
          </div>
        </div>

        <div className={style.phoneNumber}>
          <label>PHONE NUMBER</label>
          <input placeholder="Phone number" type="text" />
        </div>

        <div className={style.email}>
          <label>EMAIL ADDRESS</label>
          <input placeholder="Your Email" type="email" />
        </div>
      </div>

      <div className={style.shipping}>
        <h3 className={style.title}>Shipping Address</h3>

        <div className={style.field}>
          <label>STREET ADDRESS *</label>
          <input type="text" placeholder="Street Address" />
        </div>

        <div className={style.field}>
          <label>COUNTRY *</label>
          <select>
            <option>Country</option>
          </select>
        </div>

        <div className={style.field}>
          <label>TOWN / CITY *</label>
          <input type="text" placeholder="Town / City" />
        </div>

        <div className={style.row}>
          <div className={style.field}>
            <label>STATE</label>
            <input type="text" placeholder="State" />
          </div>

          <div className={style.field}>
            <label>ZIP CODE</label>
            <input type="text" placeholder="Zip Code" />
          </div>
        </div>
      </div>

      <div className={style.payment}>
        <h3 className={style.title}>Payment method</h3>

        <div className={style.option}>
          <label>
            <input type="radio" name="payment" defaultChecked />
            <span>Pay by Card Credit</span>
          </label>
        </div>

        <div className={style.field}>
          <label>CARD NUMBER</label>
          <input type="text" placeholder="1234 1234 1234" />
        </div>

        <div className={style.row}>
          <div className={style.field}>
            <label>EXPIRATION DATE</label>
            <input type="text" placeholder="MM/YY" />
          </div>

          <div className={style.field}>
            <label>CVC</label>
            <input type="text" placeholder="CVC code" />
          </div>
        </div>
      </div>

      <div className={style.orderSummary}>
        <h3 className={style.title}>Order summary</h3>

        <div className={style.products}>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <ProductCart key={item._id} item={item} smallVersion />
            ))
          )}
        </div>

        <div className={style.prices}>
          <div className={style.row}>
            <h4>Shipping</h4>
            <p>${shipping.toFixed(2)}</p>
          </div>

          <div className={style.row}>
            <h4>Subtotal</h4>
            <p>${subtotal.toFixed(2)}</p>
          </div>

          <div className={style.totalRow}>
            <h3>Total</h3>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className={style.placeOrder}>
        <button onClick={() => setActiveTab("complete")}>Place Order</button>
      </div>
    </>
  );
};

export default CheckOut;
