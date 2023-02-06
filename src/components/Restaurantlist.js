import React, { useEffect } from 'react'
import { useState } from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Restaurantlist() {
    const [restaurantlist,setRestaurantlist]=useState([])

    //to create a function for api call

    const getRestaurant=async()=>{
        //async await
          await fetch('/restaurants.json')
        .then((data)=> data.json()
            .then((result)=>setRestaurantlist(result.restaurants))
            )
        }//async call


    console.log(restaurantlist);

    useEffect(()=>{
        getRestaurant()
    },[])

   
    
  return (
   <Row>
 
  
  {
    restaurantlist.map((item)=>(
      <Restcard restaurant={item}/>
  
      
    ))
 }


   </Row>
  
  )
  }
  

export default Restaurantlist
