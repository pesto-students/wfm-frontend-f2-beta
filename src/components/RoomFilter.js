import React,{useContext} from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'

//get all the unique values
const getUnique = (items,value) =>{
    return [...new Set(items.map(item => item[value]))]
}


const RoomFilter = ({rooms}) => {

    const context = useContext(RoomContext)
    // console.log(context);
    const{
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        place,
        breakfast,
        pets
    } = context


    //get unique type values
    let types = getUnique(rooms,'type')
    let places=getUnique(rooms,'place');

    //add All
    types=['all',...types]

    //add Shima
    places=['None',...places]

    //map to JSX (type)
    types = types.map((item,index) =>{
        return <option value={item} key ={index}>{item}</option>
    })

    //map to JSX (Number of People)
    let people = getUnique(rooms,'capacity');
    people = people.map((item,index) =>{
        return <option value={item} key={index}>{item}</option>
    })

    //map to JSX (Place)    
    places = places.map((item,index)=>{
        return <option key={index} value={item}>{item}</option> 
    })


    return (
        <section  className="filter-container">
            <Title title="Search a Property"/>
            <form className="filter-form">
                {/* Select type */}
                <div className="form-group">
                    <label htmlFor="type">Property Type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                        {/* <option>All</option> */}
                    </select>
                </div>
                {/* end of select type */}

                {/* start of  Guests  filter */}
                <div className="form-group">
                    <label htmlFor="capacity">Number of People</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                        {/* <option>All</option> */}
                    </select>
                </div>
                {/* end of Guests filter */}
                {/* start of Location */}
                <div className="form-group">
                    <label htmlFor="type">Places</label>
                    <select name="place" id="place" value={place} className="form-control" onChange={handleChange}>
                        {places}
                        {/* <option>All</option> */}
                    </select>
                </div>
                {/* End of location filter */}

                {/* start of  Price  filter */}
                <div className="form-group">
                    <label htmlFor="price">Price ₹{price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id ="price" value={price} onChange={handleChange} className="form-controm"/>
                        
                </div>
                {/* end of Price filter */}

                
            </form>
        </section>
    )
}

export default RoomFilter
