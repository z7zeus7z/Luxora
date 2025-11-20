import React from 'react'
import ProductCard from '../Products/ProductCard'

const Products = ({ products }) => {
  if (!products.length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </>
  );
}

export default Products;