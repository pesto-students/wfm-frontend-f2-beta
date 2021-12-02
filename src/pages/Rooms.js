import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from "react-router-dom"
import RoomsContainer from '../components/RoomsContainer'
import Navbar from '../components/Navbar'

const Rooms = () => {

    

    return (
        <div>
            <Navbar/>
            <Hero hero="roomsHero">
            <Banner title='Best Properties'>                
            <Link to ='/' className="btn-primary">Return to Home</Link>
            </Banner>
            </Hero>
            {/* This component has all the properties and render those properties which are filtered out */}
            <RoomsContainer/>
        </div>
    )
}

export default Rooms
