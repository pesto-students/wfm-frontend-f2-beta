import React from "react";
import { withRoomConsumer } from "../context";
import BookedProperties from "../pages/BookedProperties";
import Loading from "./Loading";

function BookedRoomContainer({context}){

    const {loading,sortedRooms,rooms} = context;
    if(loading){
                    return <Loading/>;
                }
                return (
                  <div>
                    <BookedProperties rooms={bookedRooms}/>
                  </div>
                )
    
}

export default withRoomConsumer(BookedRoomContainer)

