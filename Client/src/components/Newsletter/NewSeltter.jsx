import React from 'react'
import style from '../../styles/Newsletter.module.css';
import {Link} from 'react-router-dom'
const NewSeltter = () => {
  return (
    <>
    <div className={style.newSletter}>
        <div className={style.newsletterTitle}>
            <h4>Join Our Newsletter</h4>
            <p>Sign up for deals, new products and promotions</p>
        </div>
        <div className={style.signEmail}>
          <Link to='/auth'>Sign Up</Link>
        </div>
        <hr/>
      </div>  
    </>
  )
}

export default NewSeltter