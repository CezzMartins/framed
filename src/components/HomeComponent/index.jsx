import React from 'react';
import heroImage from '../../assets/images/header-image.jpg';
import './HomeComponent.css';
import { motion } from 'framer-motion';


const homeComponent = () => {

    const titleAnimation = {
        hidden: { opacity: 0},
        show: { opacity: 1, transition: { duration: 2 }}
    }
    const slideTitle = {
        hidden: { x: 100},
        show: { x: 0, transition: { duration: 0.8,  ease: 'easeOut', staggerChildren: 1}}
    }



    return(
        <header className="header">
            <div className="container">
                <section className="hero">
                    <motion.div variants={slideTitle} initial="hidden" animate="show" className="hero-titles">
                        <motion.h1 variants={titleAnimation} initial="hidden" animate="show"><span>We</span> capture Your</motion.h1>
                        <motion.h1 variants={titleAnimation} initial="hidden" animate="show"><span>best</span> moments</motion.h1>
                        <p>in the best environment fro you.</p>
                    </motion.div>
                    <div className="hero-image">
                        <img src={heroImage} alt=""/>
                    </div>
                </section>
            </div>
        </header>
    );
}

export default homeComponent