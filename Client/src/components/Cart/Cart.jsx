import React, { useState } from 'react';
import style from '../../styles/Cart/Cart.module.css';
import ShopingCart from './ShopingCart/ShopingCart';
import CheckOut from './CheckoutDetails/CheckOut';
import Complete from './OrderComplete/Complete';
import NewSeltter from '../Newsletter/NewSeltter';
import Footer from '../Footer/Footer';
const Cart = () => {
  const [activeTab,setActiveTab] = useState("shopping");
  let prNum = 1;
  let prName= "Shopping Cart";
  if(activeTab=="shopping"){
    prNum = 1;
     prName ="Shopping Cart"
  }
  else if (activeTab==="checkout"){
    prNum = 2;
     prName ="Check Out"
  }
  else{
    prNum = 3;
     prName ="Order Complete";
  }
  return (
    <>
       <div className={style.cartContainer}>
            <div className={style.pageTitle}><h2>Cart</h2></div>
            <div className={style.processes}>
                <div className={style.process1}>
                    <div className={style.processNumber}>{prNum}</div>
                    <p className={style.processName}>{prName}</p>
                </div>
            </div>
            {activeTab==="shopping"&&<div className={style.shoppingCart}><ShopingCart setActiveTab={setActiveTab}/></div>}
            {activeTab==="checkout"&&<div className={style.checkOutContainer}><CheckOut setActiveTab={setActiveTab}/></div>}
            {activeTab==="complete"&&<div className={style.completeContainer}><Complete/></div>}
            
       </div>
       <NewSeltter/>
       <Footer/>
    </>
  )
}

export default Cart