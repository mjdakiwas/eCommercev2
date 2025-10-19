import React, { useState, useEffect } from 'react';
import Carousel from '../components/carousel/Carousel';

export default function Home() {
    return (
        <main className="homepage">
            <section className="hero">
                <Carousel />
            </section>
            <h1 className="slogan">
                Cool classics, wild swirls — life's sweetest with a cherry on
                top.
            </h1>
        </main>
    );
}
