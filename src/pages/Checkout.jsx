import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeLayouts from '../layouts/HomeLayouts';
import Hero from '../components/organisems/Hero';

export default function Checkout() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    function formatCurrency(amount) {
        return `Rp. ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
    }

    return (
        <>
            <HomeLayouts>
                <main>
                    <Hero
                        title="Checkout"
                        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
                    />
                    <div className="untree_co-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row mb-5">
                                        <div className="col-md-12">
                                            <h2 className="h3 mb-3 text-black">Your Order</h2>
                                            <div className="p-3 p-lg-5 border bg-white">
                                                <table className="table site-block-order-table mb-5">
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {cartItems.map(item => (
                                                            <tr key={item.id}>
                                                                <td>{item.name}</td>
                                                                <td>{formatCurrency(item.price)}</td>
                                                            </tr>
                                                        ))}
                                                        <tr>
                                                            <td className="text-black font-weight-bold">
                                                                <strong>Order Total</strong>
                                                            </td>
                                                            <td className="text-black font-weight-bold">
                                                                <strong>{formatCurrency(
                                                                    cartItems.reduce(
                                                                        (total, item) => total + item.price,
                                                                        0
                                                                    )
                                                                )}</strong>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <div className="form-group">
                                                    <button className="btn btn-black btn-lg py-3 btn-block">Place Order</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </HomeLayouts>
        </>
    );
}
