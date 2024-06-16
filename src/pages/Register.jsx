import React from 'react'
import HomeLayouts from '../layouts/HomeLayouts'
import Hero from '../components/organisems/Hero'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <>
            <HomeLayouts>
                <main>
                    <Hero />
                    <div className="untree_co-section">
                        <div className="container">
                            <div className="block">
                                <div className="row justify-content-center">
                                    <div className="col-md-8 col-lg-8 pb-4">

                                        <form>
                                            <div className="form-group">
                                                <label className="text-black" htmlFor="name">Name</label>
                                                <input type="text" className="form-control" id="name" />
                                            </div>
                                            <div className="form-group">
                                                <label className="text-black" htmlFor="email">Email address</label>
                                                <input type="email" className="form-control" id="email" />
                                            </div>
                                            <div className="form-group">
                                                <label className="text-black" htmlFor="password">Password</label>
                                                <input type="password" className="form-control" id="password" />
                                            </div>
                                            <br />
                                            <button type="submit" className="btn btn-primary-hover-outline me-2">Register</button>
                                            <Link to="/login" className="btn btn-primary-hover-outline">Login</Link>
                                        </form>
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
