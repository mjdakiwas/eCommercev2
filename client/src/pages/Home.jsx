import React, { useState, useEffect } from 'react';
import Carousel from '../components/carousel/Carousel';

export default function Home() {
    const heroImgs = import.meta.glob(
        '/src/assets/images/hero/home/*.{png,jpg,jpeg,PNG,JPEG}',
        {
            eager: true,
            import: 'default',
        }
    );
    // console.log(heroImgs);

    return (
        <main className="homepage">
            <section className="hero">
                <Carousel images={heroImgs} />
            </section>
            <h1 className="slogan">
                Cool classics, wild swirls — life's sweetest with a cherry on
                top.
            </h1>
        </main>
    );
}
