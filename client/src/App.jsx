import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/nav/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import ContactUs from './pages/ContactUs.jsx';

function App() {
    const { pathname } = useLocation();

    const [products, setData] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(
                    'https://ecommercev2-production-9d77.up.railway.app/api/products'
                );
                if (!res.ok) throw new Error(`Failed to fetch: ${res}`);
                const data = await res.json();
                console.log('Fetched products data:', data);
                setData(data);
            } catch (err) {
                console.log(`Failed to fetch products data: ${err}`);
            }
        };
        fetchProducts();
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <>
            <NavBar pathname={pathname} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/shop"
                    element={<Products products={products} />}
                />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
