import React, { useState } from 'react'
import style from "../../styles/Account/Account.module.css";
import AccountDetails from './AccountDetails';
import AccountAddress from './AccountAddress';
import OrdersHistory from './OrdersHistory';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown,faChevronUp } from "@fortawesome/free-solid-svg-icons";
const Account = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const[openMenu,setOpenMenu]=useState(false);
    const [activeTab,setActiveTab] = useState("Account")
    const toggleMenu = () => setOpenMenu(!openMenu);
    const icon = openMenu?faChevronUp:faChevronDown
    const handleLogout = () =>{
        localStorage.removeItem("userInfo");
        window.location.href='/auth'
    }
  return (
    <>
        <div className={style.accountContainer}>
            <div className={style.pageTitle}><h2>My Account</h2></div>
            <div className={style.accountVisual}>
                <div className={style.accountInfo}>
                    <div className={style.accountImg}></div>
                    <div className={style.accountName}><p>{userInfo?.name}</p></div>
                </div>
                <div className={style.dropDown}>
                    <div onClick={toggleMenu} className={style.accountTabs}>
                        <p>{activeTab}</p>
                        <FontAwesomeIcon  icon={icon}/>
                    </div>
                    {openMenu&&(
                        <div className={style.dropDownOptions}>
                            <p onClick={()=>setActiveTab("Account")}>Account</p>
                            <hr />
                            <p onClick={()=>setActiveTab("Address")}>Address</p>
                            <hr />
                            <p onClick={()=>setActiveTab("Orders")}>Orders</p>
                            <hr />
                            <p onClick={handleLogout}>Log Out</p>
                            <hr />
                        </div>
                    )}
                    
                </div>
                <div className={style.list}>
                    <ul>
                        <li onClick={()=>setActiveTab("Account")}>Account</li>
                        <hr />
                        <li onClick={()=>setActiveTab("Address")}>Address</li>
                        <hr />
                        <li onClick={()=>setActiveTab("Orders")}>Orders</li>
                        <hr />
                        <li onClick={handleLogout}>Log Out</li>
                        <hr />
                    </ul>
                </div>
            </div>
            {activeTab==="Account"&&<AccountDetails/>}
            {activeTab==="Address"&&<AccountAddress/>}
            {activeTab==="Orders"&&<OrdersHistory/>}
        </div>
    </>
  )
}

export default Account