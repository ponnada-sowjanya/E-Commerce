**🛍️ E-Commerce Web Application **
- A modern e-commerce web application built using React + Vite + Redux Toolkit, featuring product listings, cart functionality, and dynamic product details.

- This project was developed to strengthen frontend development skills, state management, and UI structuring in React.

**🚀 Features **
- 🏠 Home Page with Product Grid

- 📦 Product Details Page

- 🛒 Add to Cart functionality

- 🗑 Remove from Cart

- 🧮 Cart Quantity Management

- 📊 Redux-based State Management

- 🧭 React Router Navigation

- 📱 Responsive Layout

**🛠 Tech Stack**

- React.js

- Vite

- Redux Toolkit
  
- React Router

- JavaScript (ES6+)

- CSS

📂 Project Structure
E-Commerce/

│

├── src/

│   ├── assets/

│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductGrid.jsx
│   │
│   ├── features/
│   │   ├── ProductSlice.js
│   │   └── cart/cartSlice.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CartPage.jsx
│   │   └── ProductDetails.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── productContent.js

🛒 Functional Overview
🔹 Product Listing

Products displayed dynamically using reusable components.

Data managed via Redux store.

🔹 Cart Management

Add products to cart.

Update quantity.

Remove items.

Centralized cart state using Redux Toolkit.

🔹 Product Details

Dynamic routing using React Router.

Displays individual product information.

🚀 How to Run Locally
1️⃣ Clone the repository
git clone https://github.com/ponnada-sowjanya/E-Commerce.git
cd E-Commerce

2️⃣ Install dependencies
npm install

3️⃣ Run development server
npm run dev


Open:

http://localhost:5173

🎯 Learning Outcomes

Through this project, I gained experience in:

Component-based architecture

Redux Toolkit state management

Managing global store

React Router navigation

Building scalable UI structure

Organizing frontend folder structure

Debugging React applications

🔮 Future Improvements

Backend integration (Node.js + MongoDB)

Authentication (Login/Register)

Payment gateway integration

Order management system

Admin dashboard
