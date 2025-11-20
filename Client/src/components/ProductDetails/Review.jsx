import React from 'react'
import style from '../../styles/ProductDetails.module.css';
import profile from '../../assets/Profile.jpg'
const Review = () => {
  return (
    <>
        <div className={style.reviewContainer}>
            <div className={style.customerInfo}>
                <div className={style.customerPic}><img src={profile} alt="" /></div>
                <div className={style.customerName}><p>Zaid Sabbah</p></div>
            </div>
            <div className={style.customerReview}>
              <p>Really Good Product , Arrive At Time , looks same as pictures really love it</p>
            </div>
        </div>
        <hr/>
    </>
  )
}

export default Review