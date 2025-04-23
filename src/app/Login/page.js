"use client"

import './Login.css'
import Image from 'next/image';
import Logo from "../../../public/Robo.png"
import React, { useState } from 'react';
import Home from '../page';

const Login = () => {


   

    
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleSubmit = async (event) => {
            event.preventDefault();

            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Login data stored successfully');
            } else {
                alert(`Error: ${data.message}`);
            }
    };
    const empty = () => {
        return (<Home />);
        }
        return (
            <>
                <div className="main">
                    <h1 className="heading">Glyph.com</h1>1 
                    <div className="container">
                        <div className="login">
                            <h1>Welcome back!</h1>
                            <p>Enter your Credentials to access your account</p>
                            <form onSubmit={handleSubmit}>
                                <h5 className="Login-email">Email address</h5>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                    className="Login-email-text"
                                    required
                                /><br />
                                <span className="Login-password-forget">Forgot password</span>
                                <h5 className="Login-password">Password</h5>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
          onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    className="Login-password-text"
                                    maxLength="10"
                                    required
                                />
                                <input className="Login-button" type="submit" value="Login" onClick={empty} />
                            </form>
                        </div>
                        <div className="image">
                            <Image src={Logo} className="Robo" alt="Logo" />
                        </div>
                    </div>
                </div>
            </>
        );
    }

    export default Login;
