import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

import {Link} from "react-router-dom"



const Home = () => {
    return (
        <div>
            <Hero>
                <Banner title="New Way of Working.." subtitle="Cost Efficient Rooms starting at ₹ 100">
                    <Link to="/rooms" className="btn-primary">
                        Explore Properties
                    </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms/>

        </div>
    )
}

export default Home
