import React from 'react'
import style from '../../styles/Account/Account.module.css';
const AccountAddress = () => {
  return (
    <>
        <div className={style.addressContainer}>
            <div className={style.addressContainerTitle}>
                <h4>Shipping Address</h4>
                <button>Edit</button>
            </div>
                <p>Zaid sabbah</p>
                <p>+962778980355</p>
                <p>Beait hanena st , Amman,Jordan</p>
        </div>
    </>
  )
}

export default AccountAddress