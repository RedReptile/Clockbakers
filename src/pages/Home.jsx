import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Header from './Home/Header'
import Hero from './Home/Hero'
import HowWeMake from './Home/HowWeMake'
import FeatureProducts from './Home/FeatureProducts'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Hero />
            <FeatureProducts />
            <HowWeMake />
            <Footer />
        </>
    )
}

export default Home
