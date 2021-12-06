import React ,{useContext} from 'react'
import {Link} from "react-router-dom"
import LoginNavBar from '../logincomponents/LoginNavBar'
import Navbar from '../components/Navbar'
import DateRange from '../components/DateRange'
import Hero from '../components/Hero'
import '../App.css'


import { RoomContext } from '../context';
import LoginByGoogle from '../components/LoginByGoogle'


const BookedProperties = () => { 

    const context = useContext(RoomContext)


    const{
        rooms,
        bookId,
        bookedRooms,        
        // price,
        // place,
    } = context


    console.log(context);


    if(bookedRooms.length === 0){
        return(
            <>
            <Navbar/>
            <Hero>
            <div className="empty-search">
                <h3>Please choose some property.....</h3>
            </div>
            </Hero>
            </>
        )
    }
    return (        
        <div> 
            <LoginNavBar/>
            <Hero>
                <section style={{marginTop:'40px',paddingTop:'30px'}} className="parent_booked_property">
                    <section className="child_booked_property">
                        <h5>Property: {rooms[0].name} home</h5>
                        <h6>Booking id :{bookId}</h6>
                        {/* <h3>At: {rooms[0].place}</h3> */}
                        {/* <h4>Price: ₹{rooms[0].price} per-night</h4>     */}
                        {/* <h6>Work Space for : {rooms[0].capacity > 1 ? `${rooms[0].capacity} people`:`${rooms[0].capacity} Person`}</h6>                    */}
                        <h4>Select dates for your stay</h4>
                        <h6>Selected dates:</h6>
                        <DateRange className="book-rooms-center"/>  
                    </section> 
                    <section classname="checkout_booked_property">
                    <div className="checkout_div">
                    <h6>Proceed to checkout</h6>
                    <Link to='/Login' className="btn-primary">Login</Link> 
                    <br/>
                    {/* <h5>OR</h5> */}
                    <h6>Login By Gmail ID</h6>
                    <LoginByGoogle/>   
                    </div>                   
                    </section>                    
                </section>                    
            </Hero>  
            <h3 style={{textAlign:'center',color:'red'}}>*For Cancellation please gives us a call on Toll free-1800-1800-1800</h3>
        </div>


    )
}

export default BookedProperties

// export default BookedProperties;
