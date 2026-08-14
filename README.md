# 🛒 E-Commerce Frontend Application

A responsive E-Commerce frontend application built using React.js.  
The project demonstrates product listing, product details, shopping cart functionality, authentication simulation, and API integration.

## 🚀 Features

- Product listing using FakeStoreAPI
- Product cards with images, price, and category
- Product details page
- Add products to cart
- Remove products from cart
- Cart page with total price
- React Context API for cart state management
- Authentication simulation using Local Storage
- Login and Register pages
- React Router navigation
- Responsive user interface
- Loading and error states
- External API integration

## 🛠️ Technologies Used

- React.js
- JavaScript
- React Router DOM
- Context API
- HTML5
- CSS3
- FakeStoreAPI
- Local Storage
- Git & GitHub

## 📁 Project Structure

```text
ecommerce-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── ProductCard/
│   │   ├── ProductList/
│   │   └── cart/
│   │
│   ├── contexts/
│   │   ├── AuthContext.js
│   │   └── CartContext.js
│   │
│   ├── hooks/
│   │   └── useProducts.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── ProductDetail.js
│   │   ├── CartPage.js
│   │   ├── Login.js
│   │   └── Register.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md