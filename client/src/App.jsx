import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/nav/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import ContactUs from './pages/ContactUs.jsx';

function App() {
    const { pathname } = useLocation();

    return (
        <>
            <NavBar pathname={pathname} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Products />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
