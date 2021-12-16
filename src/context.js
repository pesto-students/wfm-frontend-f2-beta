import React, { Component } from "react";
import Client from './Contentful';

//This is context for all the consumers
const RoomContext = React.createContext();

class RoomProvider extends Component {  
  
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    bookedRooms:[],
    loading: true,
    type:'all',
    capacity:1,
    slug:'single-economy',
    price:0,
    minPrice:0,
    maxPrice:0,
    bookId:0,
    place:"Shimla",
    // breakfast:false,
    // pets:false
  };


  
  //getData

  getData = async () =>{
    try {
      let response = await Client.getEntries({
        content_type:"workFromMountains",
        // order: 'sys.createdAt'
        order:'fields.price'
      });
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item =>item.price))
  
      //Calculate random booking-Id
      const min = 1;
      const max = 100;
      const bookId = Math.floor(min + (Math.random() * (max - min)));
  
  
      
      //states updated
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,      
        loading: false,
        price:maxPrice,
        slug:'None',
        maxPrice,
        bookId:bookId,
        bookedRooms:rooms,
        // place,
      //   maxSize
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getData()
    
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
      let tempRooms = [...this.state.rooms];
      const room = tempRooms.find(room => room.slug === slug)
      return room;
  }


  handleChange= event =>{
      const target = event.target
      const value  = event.type ==='checkbox'? target.checked : target.value
      const name=event.target.name
      this.setState({
          [name]:value
      },this.filterRooms)
     
    //   console.log(type,name,value);
  }



  filterRooms = () =>{
    //   
    let {rooms,type,capacity,price,place} = this.state;

    //All the rooms
    let tempRooms =[...rooms];

    //Transfor values as the number in capacity get changed to string
    capacity=parseInt(capacity)


    //Transfor values as the number in price get changed to string
    price=parseInt(price)


    //filter by Type
    if(type !== 'all'){
        tempRooms = tempRooms.filter(room => room.type === type)
    }

    //filter by Capacity
    if(capacity !== 1){
        tempRooms = tempRooms.filter(room =>room.capacity >=capacity)
    }

    //filter by Place
    if(place !== 'None'){
        tempRooms = tempRooms.filter(room => room.place === place)
    }

    //filter by Price
    
        tempRooms = tempRooms.filter(room =>room.price <=price)
    

    this.setState({
        sortedRooms:tempRooms
    })

  }

  bookedRooms=()=>{
    let {rooms} = this.state;
    let tempRooms =[...rooms];  
    // tempRooms = tempRooms.filter(room =>room.name ===name)  
    // console.log("Hello");
    this.setState({
      bookedRooms:tempRooms
  })
  }

 

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

//Higher Order Component
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value}/>}
        </RoomConsumer>
    }
}




export { RoomProvider, RoomConsumer, RoomContext };
