import React from "react";
import Navbar from "../components/Navbar/Navbar";
import useProducts from "../hooks/useProducts";
import ProductList from "../components/ProductList/ProductList";

function Home() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading Products...</h2>;
  }

  if (error) {
    return (
      <h2 style={{ textAlign: "center", color: "red" }}>
        {error}
      </h2>
    );
  }

  return (
    <>
      <Navbar />

      <div>
        <h1 style={{ textAlign: "center", margin: "20px" }}>
          E-Commerce Store
        </h1>

        <ProductList products={products} />
      </div>
    </>
  );
}

export default Home;