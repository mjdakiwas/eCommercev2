import '../../styles/product-card.css';

export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <div>
                <img
                    className="product-card__img"
                    src={`/src/assets/images/products/pints/${product.path}.png`}
                    alt={product.name}
                />
            </div>
            <div>
                <p className="product-card__title">{product.name}</p>
                <p className="product-card__price">${product.price}</p>
                <p className="product-card__description">
                    {product.description}
                </p>
                <button className="product-card__cart-btn">Add to Cart</button>
            </div>
        </div>
    );
}
