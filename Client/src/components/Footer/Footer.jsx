import React from 'react'
import style from '../../styles/Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook,faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <>
        <div className={style.footerContainer}>
            <div className={style.top}>
                <div className={style.logo}><h3>Luxora</h3></div>
                <div className={style.links}>
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/shop'><li>Shop</li></Link>
                        <li>Product</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <hr style={{width:"100%"}}/>
            <div className={style.bottom}>
                <div className={style.divider}>
                    <div className={style.rules}>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                    </div>
                    <div className={style.copyright}><p>Copy @ 2025 ZeusDev.All rights reserved</p></div>
                </div>
                <div className={style.medias}>
                    <div className={style.media}><FontAwesomeIcon icon={faSquareFacebook}/></div>
                    <div className={style.media}><FontAwesomeIcon icon={faSquareInstagram}/></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer