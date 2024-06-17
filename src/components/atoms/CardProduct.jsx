import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cross from "../../assets/images/cross.svg";

export default function CardProduct() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    function formatCurrency(amount) {
        return `Rp. ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_BASE_URL;
                if (!apiUrl) {
                    throw new Error('API URL is not defined');
                }
                const response = await axios.get(`${apiUrl}/product`);
                setProducts(response.data.data.data);
                setLoading(false);
            } catch (error) {
                console.error("There was an error fetching the products!", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);


    const addToCart = (productId) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        const existingItem = cartItems.find(item => item.id === productId);
        if (existingItem) {
            alert('Product is already in cart!');
            return;
        }

        const productToAdd = products.find(product => product.id === productId);
        if (productToAdd) {
            cartItems.push({
                id: productToAdd.id,
                name: productToAdd.name,
                price: productToAdd.price,
                image: productToAdd.galleries[0].photos
            });

            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            alert('Product added to cart!');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {Array.isArray(products) && products.length > 0 ? (
                products.map(product => (
                    <div className="col-12 col-md-4 col-lg-3 mb-5" key={product.id}>
                        <div className="product-item">
                            <img src={`${import.meta.env.VITE_STORAGE_BASE_URL}/${product.galleries[0].photos}`} className="img-fluid product-thumbnail" alt={product.name} />
                            <h3 className="product-title">{product.name}</h3>
                            <strong className="product-price">{formatCurrency(product.price)}</strong>
                            <span className="icon-cross" onClick={() => addToCart(product.id)}>
                                <img src={cross} className="img-fluid" alt="Cross Icon" />
                            </span>
                        </div>
                    </div>
                ))
            ) : (
                <div>No products found</div>
            )}
        </>
    );
}
