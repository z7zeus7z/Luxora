import React from 'react'
import style from '../../styles/Account/Account.module.css';
import Orders from './Orders';
const OrdersHistory = () => {
  return (
    <>
        <div className={style.orderHistory}>
            <Orders/>
            <Orders/>
            <Orders/>
        </div>
    </>
  )
}

export default OrdersHistory