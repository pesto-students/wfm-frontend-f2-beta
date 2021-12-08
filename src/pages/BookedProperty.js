import React ,{useContext}from 'react'
import { RoomContext } from '../context';
import '../App.css'

const BookedProperty = () => {
    const context = useContext(RoomContext)

    const{
        bookId,
    } = context


    console.log(context);

    return (
        <div className="logout_div">
            <h3>Property is Booked Now</h3>
            <h6>Booking id :{bookId}</h6>
            <h3>Pay on checkout!!</h3>
            <h6>For any Cancellation please react out on Toll-Free number</h6>
        </div>
    )
}

export default BookedProperty
