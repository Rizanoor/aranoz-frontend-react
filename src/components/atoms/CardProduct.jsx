import React from 'react'
import product from "../../assets/images/product-2.png";
import cross from "../../assets/images/cross.svg";

export default function CardProduct() {
    return (
        <>
            <div className="col-12 col-md-4 col-lg-3 mb-5">
                <a className="product-item" href="#">
                    <img src={product} className="img-fluid product-thumbnail" alt="Product Image" />
                    <h3 className="product-title">kursi</h3>
                    <strong className="product-price">Rp. 15</strong>
                    <span className="icon-cross">
                        <img src={cross} className="img-fluid" alt="Cross Icon" />
                    </span>
                </a>
            </div>
        </>
    )
}
