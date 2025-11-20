import React from 'react'
import style from '../../styles/Product.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  const {product}=props;
  return (
    <>
      <div className={style.productCardContainer}>
        <div className={style.productCard}>
          <div className={style.tags}>
            <div className={style.new}><p>NEW</p></div>
          </div>
          <div className={style.productImg}><img src={product.mainImage} alt={product.name} /></div>
          <div className={style.addCart}><Link to={`/product/${product._id}`}><button>View Details</button></Link></div>
        </div>
        <div className={style.productDesc}>
            <div className={style.productName}><p>{product.name}</p></div>
            <div className={style.productPrice}><p>${product.price}</p></div>
        </div>
      </div> 
    </>
  )
}

export default ProductCard