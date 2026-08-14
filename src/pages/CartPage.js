import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./CartPage.css";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h1>🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                className="cart-image"
              />

              <div className="cart-info">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
                <h2>${item.price}</h2>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <hr />

          <h2>Total: ${totalPrice.toFixed(2)}</h2>

          <div className="cart-buttons">
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>

            <button
              className="checkout-btn"
              onClick={() => alert("Proceeding to Checkout...")}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;