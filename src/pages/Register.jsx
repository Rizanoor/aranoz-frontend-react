import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { z } from 'zod';
import HomeLayouts from '../layouts/HomeLayouts'
import Hero from '../components/organisems/Hero'


const registerSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" })
});

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        const validationResult = registerSchema.safeParse({ name, email, password });
        if (!validationResult.success) {
            const fieldErrors = {};
            validationResult.error.errors.forEach(error => {
                fieldErrors[error.path[0]] = error.message;
            });
            setErrors(fieldErrors);
            return;
        }

        try {
            const apiUrl = import.meta.env.VITE_API_BASE_URL;
            if (!apiUrl) {
                throw new Error('API URL is not defined');
            }
            const response = await axios.post(`${apiUrl}/register`, { name, email, password });

            const { access_token, token_type, user } = response.data.data;
            const { name: userName, email: userEmail } = user;

            const encryptedToken = btoa(access_token);

            localStorage.setItem('token', encryptedToken);
            localStorage.setItem('token_type', token_type);
            localStorage.setItem('name', userName);
            localStorage.setItem('email', userEmail);

            navigate('/');
        } catch (error) {
            console.error("There was an error registering!", error);
            setErrors({ api: 'Registration failed. Please try again.' });
        }
    };

    return (
        <>
            <HomeLayouts>
                <main>
                    <Hero title="Register" subtitle="Page"
                        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique." />

                    <div className="untree_co-section">
                        <div className="container">
                            <div className="block">
                                <div className="row justify-content-center">
                                    <div className="col-md-8 col-lg-8 pb-4">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label className="text-black" htmlFor="name">Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                                {errors.name && <div className="text-danger">{errors.name}</div>}
                                            </div>
                                            <div className="form-group">
                                                <label className="text-black" htmlFor="email">Email address</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                {errors.email && <div className="text-danger">{errors.email}</div>}
                                            </div>
                                            <div className="form-group">
                                                <label className="text-black" htmlFor="password">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                {errors.password && <div className="text-danger">{errors.password}</div>}
                                            </div>
                                            <br />
                                            {errors.api && <div className="text-danger">{errors.api}</div>}
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
