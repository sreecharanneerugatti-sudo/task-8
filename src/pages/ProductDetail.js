import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../services/api";
import { CartContext } from "../contexts/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found.</h2>;
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        display: "flex",
        gap: "40px",
        alignItems: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "300px",
          height: "300px",
          objectFit: "contain",
        }}
      />

      <div>
        <h1>{product.title}</h1>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>{product.description}</p>

        <h2>${product.price}</h2>

        <p>
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </p>

        <button
          onClick={() => addToCart(product)}
          style={{
            padding: "10px 20px",
            marginRight: "15px",
            background: "royalblue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>

        <Link to="/">
          <button
            style={{
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;