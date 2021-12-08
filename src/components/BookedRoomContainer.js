import React from "react";
import { withRoomConsumer } from "../context";
import BookedProperties from "../pages/BookedProperties";
import SingleRoom from "../pages/SingleRoom";
import Loading from "./Loading";

function BookedRoomContainer({context}){

    const {loading,bookedRooms} = context;
    if(loading){
                    return <Loading/>;
                }
                return (
                  <div>
                    <SingleRoom/>
                    <BookedProperties rooms={bookedRooms}/>
                  </div>
                )
    
}

export default withRoomConsumer(BookedRoomContainer)

