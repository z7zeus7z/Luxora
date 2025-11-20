import React from 'react'
import style from '../../styles/Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
const Category = () => {
  return (
    <>
        <div className={style.livingRoom}>
            <div className={style.livingRoomLink}>
                <h3>Living Room</h3>
                <div className={style.link}>
                    <Link to="/shop?category=living room">Shop Now    <FontAwesomeIcon icon={faArrowRight}/></Link>
                </div>
                
            </div>
        </div>
        <div className={style.bedRoom}>
            <div className={style.bedRoomLink}>
                <h3>BedRoom</h3>
                <div className={style.link}>
                    <Link to="/shop?category=bed room">Shop Now    <FontAwesomeIcon icon={faArrowRight}/></Link>
                </div>
                
            </div>
        </div>
        <div className={style.kitchen}>
            <div className={style.kitchenLink}>
                <h3>Kitchen</h3>
                <div className={style.link}>
                    <Link to="/shop?category=kitchen">Shop Now    <FontAwesomeIcon icon={faArrowRight}/></Link>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Category