import React, { useState } from 'react'
import style from '../../styles/Nav.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faCartShopping,faCircleUser,faHammer } from "@fortawesome/free-solid-svg-icons";
import HamLinks from './HamLinks';
import { Link } from 'react-router-dom';
import { useCart } from "../../context/CartContext";
const Nav = () => {
    const [isOpen,setIsOpen]=useState(false);
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const { cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        window.location.href = "/auth";
    };
  return (
    <>
        <div className={style.mainNavContainer}>
            <div className={style.logo_Ham}>
                <div onClick={()=>setIsOpen(prev=>!prev)} className={style.ham}><FontAwesomeIcon size='xl' icon={faBars}/></div>
                <div className={style.logo}><h2>Luxora</h2></div>
            </div>
            <div className={style.links}>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/shop'><li>Shop</li></Link>
                    <Link to='/contact'><li>Contact Us</li></Link>
                    
                </ul>
            </div>
            <div className={style.cart}>
                
                {!userInfo?(<Link to='/auth'><div className={`${style.navOptions} ${style.op2}`}><FontAwesomeIcon  icon={faCircleUser}/></div></Link>):(
                    <div className={style.loggedUser}>
                        <Link to='/account'>
                            <p className={style.userName}>Hi, {userInfo.name.split(" ")[0]}</p>
                        </Link>
                        <button className={style.logoutBtn} onClick={handleLogout}>Logout</button>
                    </div>
                )}
                {userInfo?.isAdmin && (
                        <Link to="/admin">
                            <div className={style.navOptions}>
                                <FontAwesomeIcon icon={faHammer} />
                            </div>
                        </Link>
                    )}
                <div><Link to='/cart'><FontAwesomeIcon  icon={faCartShopping}/></Link></div>
                <div className={style.cartNumber}>{totalItems}</div>
            </div>
        </div>
        {isOpen?<HamLinks setIsOpen={setIsOpen}/>:<></>}
    </>
  )
}

export default Nav