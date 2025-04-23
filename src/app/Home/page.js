"use client"

import './Home.css'
import Image from 'next/image';
import Logo from "../../../public/Robo.png"
import React, { useState } from 'react';

const Home = () => {
    return (
        <>
            <div className="main">
                <h1 className="heading">Glyph.com</h1>
                <div className="container">
                   <p className='head'>Login SuccesFull!</p>
                    <div className="image">
                        <Image src={Logo} className="Robo" alt="Logo" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
