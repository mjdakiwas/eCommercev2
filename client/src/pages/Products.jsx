import { useState, useMemo } from 'react';
import ProductCard from '../components/product-card/ProductCard';
import '../styles/pages/products.css';

export default function Products({ products }) {
    const [filters, setFilters] = useState({
        searchTerm: '',
        // category: 'all',
        sortBy: 'default',
    });

    const filteredProducts = useMemo(() => {
        let filtered = products.filter((product) => {
            const matchesSearch = product.name
                .toLowerCase()
                .includes(filters.searchTerm.toLowerCase());
            // const matchesCategory =
            //     category === 'all' || product.category === category;
            return matchesSearch;
            //  && matchesCategory;
        });

        switch (filters.sortBy) {
            case 'price-asc':
                filtered = [...filtered].sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered = [...filtered].sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                filtered = [...filtered].sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
                break;
            case 'name-desc':
                filtered = [...filtered].sort((a, b) =>
                    b.name.localeCompare(a.name)
                );
                break;
            default:
                break;
        }

        return filtered;
    }, [products, filters.searchTerm, filters.sortBy]);

    return (
        <main className="products-pg">
            <h1>All Flavors</h1>
            <h2>
                Pull up a stool and grab a spoon — these flavors are the bee's
                knees, the cat's pajamas, and the sundae's sprinkles all in one.
            </h2>
            <div className="controls">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={filters.searchTerm}
                    onChange={(e) =>
                        setFilters({ ...filters, searchTerm: e.target.value })
                    }
                />

                {/* <select
                    value={category}
                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                >
                    <option value="all">All Categories</option>
                    <option value="ice-cream">Ice Cream</option>
                    <option value="sorbet">Sorbet</option>
                    <option value="gelato">Gelato</option>
                </select> */}

                <select
                    value={filters.sortBy}
                    onChange={(e) =>
                        setFilters({ ...filters, sortBy: e.target.value })
                    }
                >
                    <option value="default">Sort By</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A → Z</option>
                    <option value="name-desc">Name: Z → A</option>
                </select>
            </div>
            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </main>
    );
}
