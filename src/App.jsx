import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import CartPage from "./pages/CartPage"
import ProductDetails from "./pages/ProductDetails"
import Navbar from "./assets/components/Navbar"
import { Provider } from 'react-redux'
import { store } from "./App/Store"
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter >
    <Navbar />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/cart" element={<CartPage/>} />
    <Route path="/product/:id" element={<ProductDetails/>} />
  </Routes>
  
  
  </BrowserRouter>
    </Provider>
    
  );
}

export default App
