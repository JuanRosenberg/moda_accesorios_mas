// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { fetchPetProducts } from './api/petApi';
import ProductList from './components/ProductList';
import Cart from './components/cart';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchPetProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Moda, accesorios y más</h1>
            <nav>
              <Link to="/">Inicio</Link> | <Link to="/cart">Carrito</Link>
            </nav>

            <Routes>
              <Route path="/" element={loading ? <p>Cargando productos...</p> : <ProductList products={products} onAddToCart={handleAddToCart} />} />
              <Route path="/cart" element={<Cart cart={cart} />} />
            </Routes>
          </header>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
