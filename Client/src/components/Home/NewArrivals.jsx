import React from 'react'
import style from '../../styles/Home.module.css';
import NewArrivalSlider from './Sliders/NewArrivalSlider';
import ProductCard from '../Products/ProductCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
const NewArrivals = () => {
  return (
    <>
        <div className={style.newArrivalTitle}><h2>New<br/>Arrivals</h2></div>
        <div className={style.newArrivalSlider}><NewArrivalSlider/></div>
        <div className={style.moreProducts}><Link to='/shop'>More Products<FontAwesomeIcon icon={faArrowRight}/></Link></div>
    </>
  )
}

export default NewArrivals