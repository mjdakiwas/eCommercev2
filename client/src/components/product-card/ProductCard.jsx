import '../../styles/product-card.css';

export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <div>
                <img
                    className="product-card__img"
                    src={`/src/assets/images/products/${product.path}`}
                    alt={product.productName}
                />
            </div>
            <div>
                <p className="product-card__title">{product.productName}</p>
                <p className="product-card__price">{product.price}</p>
                <p>{product.description}</p>
                <button className="product-card__cart-btn">Add to Cart</button>
            </div>
        </div>
    );
}
