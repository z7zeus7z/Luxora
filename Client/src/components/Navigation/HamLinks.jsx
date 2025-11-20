import React from 'react'
import style from '../../styles/Nav.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook,faSquareInstagram} from "@fortawesome/free-brands-svg-icons";
import { faXmark,faMagnifyingGlass,faCartShopping,faHammer  } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext";
import { Link } from 'react-router-dom';
const HamLinks = (props) => {
    const {setIsOpen}=props;
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const { cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const handleLogout = () => {
    localStorage.removeItem("userInfo");
    window.location.href = "/auth";
    };
  return (
    <>
        <div className={style.HamLinksContainer}>
          <div className={style.topHam}>
            <div className={style.logo_X}>
              <div className={style.logo}><h2>Luxora</h2></div>
              <div onClick={()=>setIsOpen(prev=>!prev)} className={style.close}><FontAwesomeIcon color='grey'  size='xl' icon={faXmark}/></div>
            </div>
            <div className={style.search}>
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
              <input placeholder='Search' type="text"  />
            </div>
            {userInfo?.isAdmin&&(
              <Link onClick={()=>setIsOpen(prev=>!prev)} to='/admin'><FontAwesomeIcon icon={faHammer}/></Link>
            )}
            <div className={style.hamLinks}>
              <ul>
                <Link onClick={()=>setIsOpen(prev=>!prev)} to='/'><li>Home</li></Link>
                <hr/>
                <Link onClick={()=>setIsOpen(prev=>!prev)} to='/shop'><li>Shop</li></Link>
                <hr/>
                
                <Link onClick={()=>setIsOpen(prev=>!prev)} to='/contact'><li>Contact Us</li></Link>
                <hr/>
              </ul>
            </div>
          </div>
          <div className={style.bottomHam}>
            <div className={style.cart_WishList}>
              <Link onClick={()=>setIsOpen(prev=>!prev)} to='/cart'>
              <div className={style.options}>
                <h4>Cart</h4>
                <div className={style.cart}> 
                  <div className={style.icon}><FontAwesomeIcon icon={faCartShopping}/></div>
                  <div className={style.cartNumber}><p>{totalItems}</p></div>
                </div>
              </div>
              </Link>
              <hr/>
              
              
            </div>
            {!userInfo?(<Link onClick={()=>setIsOpen(prev=>!prev)} to='/auth'><div className={style.signButton}><button>Sign in</button></div></Link>):(
              <div className={style.loggedInButtons}>
                <Link onClick={() => setIsOpen(prev => !prev)} to='/account'>
                <div className={style.signButton}><button>My Account</button></div></Link>
                <div className={style.signButton}>
            <button onClick={handleLogout}>Log Out</button>
        </div>
              </div>
            )}
            <div className={style.mediaContainer}>
              <div className={style.media}><FontAwesomeIcon icon={faSquareFacebook}/></div>
              <div className={style.media}><FontAwesomeIcon icon={faSquareInstagram}/></div>
            </div>
          </div>
        </div>
    </>
  )
}

export default HamLinks