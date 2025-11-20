import React from 'react'
import style from '../../styles/Home.module.css';
import MainSlider from "./Sliders/MainSlider"
import Category from './Category';
import NewArrivals from './NewArrivals';
import Services from './Services';
import NewSeltter from '../Newsletter/NewSeltter';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <>
        <div className={style.homeContainer}>
            <div className={style.mainSlider}><MainSlider/></div>
            <div className={style.h1}>
                <h2>Simply Unique<span>/</span><br />Simply Better<span>.</span></h2>
                <p><b>Luxora</b> <span>is a furniture and decoration store based in Jordan-Amman</span></p>
            </div>
            <div className={style.category}><Category/></div>
            <div className={style.newArrivalsContainer}><NewArrivals/></div>
            <div className={style.servicesContainer}><Services/></div>
        </div>
        <NewSeltter/>
        <Footer/>
    </>
  )
}

export default Home
