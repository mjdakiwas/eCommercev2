import ProductCard from '../components/product-card/ProductCard';
import '../styles/pages/products.css';

export default function Products({ products }) {
    return (
        <main>
            <h1>All Flavors</h1>
            <h2>
                Pull up a stool and grab a spoon — these flavors are the bee's
                knees, the cat's pajamas, and the sundae's sprinkles all in one.
            </h2>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.productID} product={product} />
                ))}
            </div>
        </main>
    );
}
