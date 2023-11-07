import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShimmerPostList } from "react-shimmer-effects";
import '../index.css'

const Restaurant = ()=>{
    const restaurantId = useParams();
    const [restaurantMenu,setrestaurantMenu] = useState([]);
    const [ordered , setOrdered] = useState([]);
    //console.log(restaurantId);
    useEffect(()=>{
        getRestaurant();
    },[])
    async function getRestaurant(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.742763&lng=76.6390797&restaurantId=${restaurantId.id}`);
        const json = await data.json();
        //console.log(json?.data?.cards[0]?.card?.card?.info);
        setOrdered(json?.data?.cards[0]?.card?.card?.info);
    setrestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || []);
    }

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
    <>
    {/* {console.log(allRestaurant.length)} */}
    <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={3} gap={30} />
    </> ) :(
        <div className="restaurantmenu">
            {console.log(ordered)}
            <Restaurantmenu restaurant={ordered}/>
           <div>
            {restaurantMenu.map((restaurant)=>{
                return <MenuCard restaurant={restaurant} key = {restaurant.card.info.id}/>
            })}
            </div>
        </div>
    )
}
export default Restaurant;