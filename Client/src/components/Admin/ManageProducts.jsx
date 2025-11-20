import React, { useEffect, useState } from "react";
import style from "../../styles/Admin/Admin.module.css";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://luxora-backend-0gll.onrender.com/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`https://luxora-backend-0gll.onrender.com/api/products/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Error deleting product");
        return;
      }

      setProducts((prev) => prev.filter((p) => p._id !== id));
      alert("Product deleted successfully");
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={style.manageContainer}>
      <h2>Manage Products</h2>

      <div className={style.productsTable}>
        {products.map((product) => (
          <div key={product._id} className={style.productRow}>

            <div className={style.productImg}>
              <img src={product.mainImage} alt={product.name} />
            </div>

            <div className={style.productInfo}>
              <p><strong>Name:</strong> {product.name}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Category:</strong> {product.category}</p>
            </div>

            <div className={style.actions}>
              <button className={style.editBtn}>Edit</button>
              <button 
                className={style.deleteBtn}
                onClick={() => handleDelete(product._id)}
              >
                Remove
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
