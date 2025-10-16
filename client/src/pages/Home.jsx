import React, { useState, useEffect } from 'react';
import Carousel from '../components/carousel/Carousel';

export default function Home({ pathname }) {
    const [isHamburgOpen, setHamburgOpen] = useState(false);
    useEffect(() => {
        if (isHamburgOpen) {
            setHamburgOpen(false);
        }
    }, [pathname]);

    const images = import.meta.glob('/src/assets/images/hero/home/*.png');

    return (
        <main className="homepage">
            <section className="hero">
                <Carousel images={images} />
            </section>
            <h1 className="slogan">
                Cool classics, wild swirls — life's sweetest with a cherry on
                top.
            </h1>
        </main>
    );
}
