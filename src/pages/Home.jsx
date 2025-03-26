import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from './Home/Header'
import Hero from './Home/Hero'
import HowWeMake from './Home/HowWeMake'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Hero />
            <HowWeMake />
            <Footer />
        </>
    )
}

export default Home
