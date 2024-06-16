import React from 'react'
import HomeLayouts from '../layouts/HomeLayouts'
import Hero from '../components/organisems/Hero'

export default function Checkout() {
    return (
        <>
            <HomeLayouts>
                <main>
                    <Hero title="Checkout"
                        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique." />
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
                                                        <th>Product</th>
                                                        <th>Total</th>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>test</td>
                                                            <td>Rp. 15</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-black font-weight-bold"><strong>Order Total</strong>
                                                            </td>
                                                            <td className="text-black font-weight-bold">
                                                                <strong className="text-black">Rp. 15</strong>
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
    )
}
