import React from 'react'
import HomeLayouts from '../layouts/HomeLayouts'
import CardProduct from '../components/atoms/CardProduct'
import Hero from '../components/organisems/Hero'

export default function Shop() {
    return (
        <>
            <HomeLayouts>
                <main>
                    <Hero />
                    <div class="untree_co-section product-section before-footer-section">
                        <div class="container">
                            <div class="row">
                                <CardProduct />
                            </div>
                        </div>
                    </div>
                </main>
            </HomeLayouts>
        </>
    )
}
