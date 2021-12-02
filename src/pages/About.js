import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import {Link} from "react-router-dom"
import SocialLinks from '../components/SocialLinks'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <div>
            <Navbar/>
            <Hero>
                <Banner title="We are best in Renting a Property" subtitle="Call Us To Register your Property or to book">
                    <button className="btn-primary">
                    <Link to='./Login'>Toll free-1800-1800-1800  </Link> 
                    </button>               
                </Banner>                             
            </Hero> 
            <SocialLinks/>
            
        </div>
    )
}

export default About
