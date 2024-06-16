import React from 'react'
import HomeLayouts from '../layouts/HomeLayouts'
import CardProduct from '../components/atoms/CardProduct'
import Hero from '../components/organisems/Hero'

export default function Shop() {
    return (
        <>
            <HomeLayouts>
                <main>
                    <Hero title="Shop"
                        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique." />

                    <div className="untree_co-section product-section before-footer-section">
                        <div className="container">
                            <div className="row">
                                <CardProduct />
                            </div>
                        </div>
                    </div>
                </main>
            </HomeLayouts>
        </>
    )
}
