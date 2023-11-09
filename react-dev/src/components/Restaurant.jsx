import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShimmerPostList } from "react-shimmer-effects";
import '../index.css'
import useRestaurant from "./utils/useRestaurant";
import useOrdered from "./utils/useOrdered";


const Restaurant = ()=>{
    const restaurantId = useParams();
    const ordered = useOrdered(restaurantId);
    const restaurantMenu = useRestaurant(restaurantId);
    
    const Restaurantmenu = (props)=>{
    const imageUrl = import.meta.env.VITE_imageUrl
    console.log(props.restaurant?.name);
    return (
    <div className="menudetails">
    <h1>{props.restaurant.name}</h1>
    <img src={`${imageUrl}${props.restaurant?.cloudinaryImageId}`} alt="img" />
    <div>{"areaName : "+props.restaurant?.areaName}</div>
    <div>{"avgRating : "+props.restaurant?.avgRating}</div>
    </div>
    )
    }

    const MenuCard = (props) =>{
        return<div >
             {props.restaurant?.card?.info?.name}
             </div>
    }

    return (ordered?.length === 0) ? (
    <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={3} gap={30} />
     ) :(
        <div className="restaurantmenu">
            {console.log(ordered)}
            <Restaurantmenu restaurant={ordered}/>
           <div>
            <h1>Menu</h1>
            {restaurantMenu.map((restaurant)=>{
                return <MenuCard restaurant={restaurant} key = {restaurant.card.info.id}/>
            })}
            </div>
        </div>
    )
}
export default Restaurant;