import React from 'react'
import style from '../../styles/Account/Account.module.css'
const Orders = () => {
  return (
    <>
        <div className={style.order}>
            <div className={style.orderID}>
                <p>Number ID</p>
                <p>#3456_768</p>
            </div>
            <div className={style.orderDate}>
                <p>Date</p>
                <p>October 17 ,2025</p>
            </div>
            <div className={style.orderStatus}>
                <p>Status</p>
                <p>Delivered</p>
            </div>
            <div className={style.orderPrice}>
                <p>Price</p>
                <p>$100.00</p>
            </div>
        </div>
        <hr />
    </>
  )
}

export default Orders