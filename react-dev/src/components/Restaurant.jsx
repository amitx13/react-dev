import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Restaurant = ()=>{
    const restaurantId = useParams();
    const [restaurantMenu,setrestaurantMenu] = useState([]);
    console.log(restaurantId);
    useEffect(()=>{
        getRestaurant();
    },[])
    async function getRestaurant(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.742763&lng=76.6390797&restaurantId=${restaurantId.id}`);
        const json = await data.json();
        console.log(json);
    setrestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    const MenuCard = (props) =>{
        return<div> {props.restaurant?.card?.info?.name}</div>
    }

    return(
        <div>
            {restaurantMenu.map((restaurant)=>{
                return <MenuCard restaurant={restaurant} key = {restaurant.card.info.id}/>
            })}
        </div>
    )
}
export default Restaurant;