import Carousel from '../components/carousel/Carousel';
import '../styles/pages/home.css';

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
