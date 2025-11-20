import React, { useEffect, useState } from 'react'
import style from '../../styles/ProductDetails.module.css';
import { useParams } from "react-router-dom";
import ProductSlider from './ProductSlider';
import Review from './Review';
import NewSeltter from '../Newsletter/NewSeltter';
import Footer from '../Footer/Footer';
import { useCart } from "../../context/CartContext"; 
const ProductDetails = () => {
  const {id} = useParams();
  const { addToCart } = useCart();
  const [product,setProduct] = useState(null);
  const [loading,setLoading] = useState(true);
  const [counter,setCounter]= useState(1);

    const handleAddToCart = () => {
    addToCart(product, counter);
    alert("Added to cart!");
  };
  const fetchProduct = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error loading product:", error);
    } finally {
      setLoading(false);
    }
  };
   useEffect(() => {
    fetchProduct();
  }, [id]);
  if(loading) return <p>Loading...</p>
  if(!product) return <p>Product not found</p>;
  return (
    <>
      <div className={style.productDetailsContainer}>
        <div className={style.productDetails}>
          
          <div className={style.productSlider}>
            <div className={style.location}><p>Home &gt; Shop &gt; Living Room &gt; <b>Product</b></p></div>
            <ProductSlider images={product.images}/>
          </div>
          <div className={style.productInfo}>
            <div className={style.productName}><h3>{product.name}</h3></div>
            <div className={style.productDesc}><p>{product.description}</p></div>
            <div className={style.productPrice}><h5>Price: </h5><p>${product.price}</p></div>
          </div>
          <div className={style.orderProduct}>
            <div className={style.measurements}>
              <h5>MEASUREMENTS</h5>
              <p>{product.measurement}</p>
            </div>
            <div className={style.color}>
              <div className={style.chooseColor}><h5>Color :</h5></div>
              <p>{product.color}</p>
            </div>
            <div className={style.quantity_whish}>
              <div className={style.quantity}>
                <button disabled={counter===0} onClick={()=>setCounter(counter=>--counter)}>-</button>
                <div>{counter}</div>
                <button onClick={()=>setCounter(counter=>++counter)}>+</button>
              </div>
              
            </div>
            <div className={style.addToCart}><button onClick={handleAddToCart}>Add to Cart</button></div>
          </div>
        </div>
        
      </div>
      <NewSeltter/>
      <Footer/>
    </>
  )
}

export default ProductDetails