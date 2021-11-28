import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner'

import {Link} from "react-router-dom"
import { RoomContext } from '../context';
import StyledHero from '../components/styledHero';


export default class SingleRoom extends Component {

    constructor(props){
        super(props)
        // console.log(this.props);
        this.state ={
            slug : this.props.match.params.slug,defaultBcg
        }
    }

    static contextType = RoomContext;
    // componentDidMount(){}


    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        // console.log(room);
        if(!room){
            return <div className="error">
                <h3>No Such Property found</h3>
                <Link to='/rooms' className= "btn-primary">Back to Property</Link>
            </div>
        }

        const {name,description,capacity,place,price,extras,breakfast,pets,images} = room

        const [mainImg,...defaultImage] = images;
        
        return (
            <div>
                <StyledHero img={mainImg }>
                    <Banner title={`${name} room`}>
                    <Link to='/Login' className="btn-primary">Book Property</Link>
                    </Banner>
                </StyledHero> 
                <section className="single-room">
                    <div className="single-room-images">
                    {defaultImage.map((item,index) =>{
                      return<img key={index} src={item} alt={name}/>
                    })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h3>Price: ₹{price} per-night</h3>
                            <h3>Place:{place}</h3>
                            <h6>max capacity : {capacity > 1 ? `${capacity} people`:`${capacity} Person`}</h6>
                            <h6>{pets ?"Pets allowed":"No Pets Allowed"}</h6>
                            <h6>{breakfast && "free-breakfast"}</h6>
                        </article>
                    </div>
                    
                </section>
                <section className="room-extras">
                        <h6>extras</h6>
                        <ul className="extras">
                            {extras.map((item,index) =>{
                                return <li key={index}>- {item}</li>
                            })}
                        </ul>
                </section>
                
            </div>
        )
    }
}
