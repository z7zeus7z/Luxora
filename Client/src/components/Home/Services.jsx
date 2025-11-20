import React from 'react'
import style from '../../styles/Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-regular-svg-icons";
import { faMoneyBill,faLock,faPhone } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
    <>
        <div className={style.servicesCard}>
            <div className={style.icon}><FontAwesomeIcon size='2xl' icon={faTruck}/></div>
            <div className={style.serviceInfo}>
                <h4>Free Shipping</h4>
                <p>Order above $200</p>
            </div>
        </div>
        <div className={style.servicesCard}>
            <div className={style.icon}><FontAwesomeIcon size='2xl' icon={faMoneyBill}/></div>
            <div className={style.serviceInfo}>
                <h4>Money-back</h4>
                <p>30 days guarantee</p>
            </div>
        </div>
        <div className={style.servicesCard}>
            <div className={style.icon}><FontAwesomeIcon size='2xl' icon={faLock}/></div>
            <div className={style.serviceInfo}>
                <h4>Secure Payments</h4>
                <p>Secured by Stripe</p>
            </div>
        </div>
        <div className={style.servicesCard}>
            <div className={style.icon}><FontAwesomeIcon size='2xl' icon={faPhone}/></div>
            <div className={style.serviceInfo}>
                <h4>24/7 Support</h4>
                <p>Phone and Email support</p>
            </div>
        </div>
    </>
  )
}

export default Services