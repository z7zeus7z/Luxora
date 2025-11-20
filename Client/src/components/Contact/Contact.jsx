import React from 'react'
import style from '../../styles/Contact.module.css';
import Footer from '../Footer/Footer'
import aboutPic from '../../assets/about.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <>
        <div className={style.contactContainer}>
            <div className={style.intro}>
                <div className={style.loc}><span>Home</span>&gt; Contact Us</div>
                <div className={style.mainIntro}><h5>We believe in sustainable decor. <br />We're passionate about life at home.</h5></div>
                <div className={style.secIntro}><p>Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present.</p></div>
            </div>
            <div className={style.aboutContainer}>
                <div className={style.aboutImg}><img src={aboutPic}alt="" /></div>
                <div className={style.about}>
                    <h6>About Us</h6>
                    <p>Luxora is a gift and furniture store based in Amman, Jordan. Sunce 2015 <br />Our customer service is always prepared to support you 24/7</p>
                    <Link to='/shop'>Shop Now</Link>
                </div>
            </div>
            <div className={style.contacts}>
                <h5>Contact Us</h5>
                <div className={style.contactOptions}>
                    <div className={style.contactOption}>
                        <div><FontAwesomeIcon icon={faLocationDot}/></div>
                        <div>Address</div>
                        <div>234 Swefiah,Amman,Jordan</div>
                    </div>
                    <div className={style.contactOption}>
                        <div><FontAwesomeIcon icon={faPhone}/></div>
                        <div>Contact US</div>
                        <div>+96212345678</div>
                    </div>
                    <div className={style.contactOption}>
                        <div><FontAwesomeIcon icon={faEnvelope}/></div>
                        <div>Email</div>
                        <div>zaidsabbha89@gmail.com</div>
                    </div>
                </div>
                
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Contact