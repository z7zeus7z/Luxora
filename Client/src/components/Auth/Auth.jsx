import React, { useState } from 'react'
import style from '../../styles/Auth.module.css'
import Login from './Login'
import Register from './Register'
import Footer from '../Footer/Footer'
const Auth = () => {
    const [isLoged,setIsLoged]=useState(true);
  return (
    <>
      <div className={style.authContainer}>
        <div className={style.imgContainer}></div>
        <div className={style.log_Sign}>{isLoged?<Login setIsLoged={setIsLoged}/>:<Register setIsLoged={setIsLoged}/>}</div>
      </div>
      <Footer/>
    </>
  )
}

export default Auth