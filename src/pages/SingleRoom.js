import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner'

import Copyright from '../components/Copyright'

import {Link} from "react-router-dom"
import { RoomContext } from '../context';
import StyledHero from '../components/styledHero';
import Navbar from '../components/Navbar';



export default class SingleRoom extends Component {

    constructor(props){
        super(props)
        // console.log(this.props);
        this.state ={
            slug : this.props.match.params.slug,defaultBcg,
            bookId:0,
        }
        
    }
  

    handleClick=(name)=>{
        // const {getRoom} = this.context;
        // const room = getRoom(this.state.slug);
        console.log("Button is clicked"); 
        this.setState({
            slug:this.props.match.params.slug
        })
    }

    static contextType = RoomContext;        

    render() {        
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        // console.log(this.context);
        // console.log(room);

        if(!room){
            return <div className="error">
                <h3>No Such Property found</h3>
                <Link to='/property' className= "btn-primary">Back to Property</Link>
            </div>
        }

        const {name,description,capacity,place,price,distance,extras,Meals,pets,images} = room

        const [mainImg,...defaultImage] = images;
        
        return (
            <div>
                <Navbar/>
                <StyledHero img={mainImg }>
                    <Banner title={`${name} home`}>
                    {/* On Click will book the property */}
                    <button onClick={()=>this.handleClick(name)}><Link to='/Booked-properties' className="btn-primary">Book Property</Link></button>
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
                            <h5>Distance(From Delhi):{distance}</h5>
                            <h6>Work Space for : {capacity > 1 ? `${capacity} people`:`${capacity} Person`}</h6>
                            <h6>{pets ?"Pets allowed":"No Pets Allowed"}</h6>
                            <h6>{Meals ?"All 3-Meals(Buffet-Home Cooked)":"Dedicated Kitchen"}</h6>
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
                <Copyright/>
            </div>
        )
    }
}
