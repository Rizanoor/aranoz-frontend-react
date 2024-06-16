import React from 'react'
import CardProduct from '../components/atoms/CardProduct'
import Hero from '../components/organisems/Hero'
import Benefits from '../components/organisems/Benefits'
import HomeLayouts from '../layouts/HomeLayouts'

export default function Services() {
    return (
        <>
            <HomeLayouts>
                <main>
                    <Hero />
                    <Benefits />
                    <div className="product-section pt-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                                    <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                                    <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                                    <p><a href="#" className="btn">Explore</a></p>
                                </div>
                                <CardProduct />
                            </div>
                        </div>
                    </div>

                </main>

            </HomeLayouts>
        </>
    )
}
