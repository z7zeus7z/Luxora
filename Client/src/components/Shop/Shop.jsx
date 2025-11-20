import React, { useEffect, useState } from 'react'
import style from "../../styles/Shop.module.css";
import Filter from './Filter';
import SideFilter from './SideFilter';
import Products from './Products';
import NewSeltter from '../Newsletter/NewSeltter';
import Footer from '../Footer/Footer';
import { useLocation } from "react-router-dom";

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState("all");
    const [priceRange, setPriceRange] = useState("");
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const selectedURLCategory = params.get("category"); 

      const fetchProducts = async () => {
          const res = await fetch("https://luxora-backend-0gll.onrender.com/api/products");
          let data = await res.json();
           data = data.map(p => ({
              ...p,
              category: p.category.toLowerCase().trim(),
              price: Number(p.price)   
            }));
          setProducts(data);
          setFilteredProducts(data);
          };

          useEffect(() => {
            fetchProducts();
          }, []);

          useEffect(() => {
  let temp = [...products];

 if (category !== "all") {
  temp = temp.filter((p) => p.category === category);
}

  if (priceRange) {
    if (priceRange === "400+") {
      temp = temp.filter((p) => Number(p.price) >= 400);
    } else {
      const [min, max] = priceRange.split("-");
      temp = temp.filter(
        (p) => Number(p.price) >= Number(min) && Number(p.price) <= Number(max)
      );
    }
  }

  setFilteredProducts(temp);
}, [category, priceRange, products]);
useEffect(() => {
  if (selectedURLCategory) {
    setCategory(selectedURLCategory.toLowerCase().trim());
  } else {
    setCategory("all");
  }
}, [selectedURLCategory]);
  return (
    <>
      <div className={style.shopContainer}>
        <div className={style.mainImg}>
          <div className={style.loc}>
            <h4>Home &gt;</h4><h4>Shop</h4>
          </div>
          <div className={style.pageTitle}><h2>Shop Page</h2></div>
          <div className={style.quote}>
            <p>Let's design the place you always imagined.</p>
          </div>
        </div>

        
        <div className={style.filterContainer}>
          <Filter  onCategoryChange={setCategory}
  onPriceChange={setPriceRange}
  activeCategory={category}
  activePrice={priceRange}/>
          <SideFilter
              onCategoryChange={setCategory}
              onPriceChange={setPriceRange}
              activeCategory={category}
              activePrice={priceRange}
          />
        </div>

       
        <div className={style.productsContainer}>
          <Products products={filteredProducts} />
        </div>

        <div className={style.showMore}><button>Show More</button></div>
      </div>

      <NewSeltter />
      <Footer />
    </>
  )
}

export default Shop
