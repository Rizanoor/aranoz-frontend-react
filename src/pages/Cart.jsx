import React, { useEffect, useState } from "react";
import Hero from "../components/organisems/Hero";
import HomeLayouts from "../layouts/HomeLayouts";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  function formatCurrency(amount) {
    return `Rp. ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  }

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <>
      <HomeLayouts>
        <main>
          <Hero
            title="Cart"
            description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
          />
          <div className="untree_co-section before-footer-section">
            <div className="container">
              <div className="row mb-5">
                <form className="col-md-12" method="post">
                  <div className="site-blocks-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Image</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.id}>
                            <td className="product-thumbnail">
                              <img
                                src={`${import.meta.env.VITE_STORAGE_BASE_URL}/${item.image}`}
                                className="img-fluid"
                                alt="Product"
                              />
                            </td>
                            <td className="product-name">
                              <h2 className="h5 text-black">{item.name}</h2>
                            </td>
                            <td>{formatCurrency(item.price)}</td>
                            <td>
                              <button
                                className="btn btn-black btn-sm"
                                onClick={() => removeFromCart(item.id)}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>

              <div className="row">
                <div className="col-md-12 pl-5">
                  <div className="row justify-content-end">
                    <div className="col-md-7">
                      <div className="row">
                        <div className="col-md-12 text-right border-bottom mb-5">
                          <h3 className="text-black h4 text-uppercase">
                            Cart Totals
                          </h3>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <span className="text-black">Total</span>
                        </div>
                        <div className="col-md-6 text-right">
                          <strong className="text-black">
                            {formatCurrency(
                              cartItems.reduce(
                                (total, item) => total + item.price,
                                0
                              )
                            )}
                          </strong>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <Link
                            to="/checkout"
                            className="btn btn-black btn-lg py-3 btn-block"
                          >
                            Proceed To Checkout
                          </Link>
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
