import React from 'react'
import Room from './Room'
import '../App.css'

const RoomList = ({rooms}) => {

    if(rooms.length === 0){
        return(
            <div className="empty-search">
                <h3>We Always want to find you a Property and we are coming with that...</h3>
            </div>
        )
    }
    return (        
            <section className="roomslist">
                <div className="roomslist-center">
                    {
                        rooms.map(item =>{
                            return <Room key={item.id} room={item }/>
                        })
                    }
                </div>
            </section>
        
    )
}

export default RoomList
