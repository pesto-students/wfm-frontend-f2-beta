import React ,{useState,useContext} from 'react'
import {Link} from "react-router-dom"
import LoginNavBar from '../logincomponents/LoginNavBar'
import {FcHome} from "react-icons/fc"
import DateRange from '../components/DateRange'
import Hero from '../components/Hero'
import Title from '../components/Title'
import '../App.css'
import Banner from '../components/Banner'
import GoogleLogin from 'react-google-login'


import { RoomContext } from '../context';


const BookedProperties = () => { 

    const context = useContext(RoomContext)

    const{
        // type,
        rooms,
        capacity,
        price,
        // minPrice,
        // maxPrice,
        place,
        // breakfast,
        // pets
    } = context

    //Generate random booking -id
    const min = 1;
        const max = 100;
        const random = Math.floor(min + (Math.random() * (max - min)));

    
    // console.log(rooms[0].name);
    // console.log(rooms[0].price);

    

    if(rooms.length === 0){
        return(
            <div className="empty-search">
                <h3>We Always want to find you a Property and we are coming with that...</h3>
            </div>
        )
    }



    return (
        // const {getRoom} = this.context;

        // console.log(getRoom);
        <div>
            <LoginNavBar/>
            <Hero>
                {/* <Title title="We are booking your property.... "></Title> */}
                {/* <Banner> */}
                <section>
                <div className="booking-services-center">
                    <article className="booking-services">
                    <div className="bookedProperty">
                    <div className="booking-container">
                        <h4>We are booking your property....</h4>
                        {/* <h5>Property: {rooms[0].name} home</h5> */}
                        <h6>Booking id :{random}</h6>
                        {/* <h3>At: {rooms[0].place}</h3> */}
                        <h3>Price: ₹{rooms[0].price} per-night</h3>    
                        <h6>Work Space for : {rooms[0].capacity > 1 ? `${rooms[0].capacity} people`:`${rooms[0].capacity} Person`}</h6>                   
                        <h6>Meanwhile select dates for your stay:</h6>
                        <DateRange className="book-rooms-center"/>                         
                        </div>               
                    </div>   
                    <br/>
                    <h6>Proceed to checkout</h6>
                    <Link to='/Login' className="btn-primary">Login</Link>     
                    <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Log in with Google"
                        // onSuccess={handleLogin}
                        // onFailure={handleLogin}
                        cookiePolicy={'single_host_origin'}
                    />                          
                    </article>
                    </div>
                </section>
                    
            </Hero>  
            <h3 style={{textAlign:'center',color:'red'}}>*For Cancellation please gives us a call on Toll free-1800-1800-1800</h3>
        </div>


    )
}

export default BookedProperties

// export default BookedProperties;
