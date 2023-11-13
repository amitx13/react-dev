import { useContext, useEffect, useState } from "react";
import { ShimmerPostList } from "react-shimmer-effects";
import {Link} from "react-router-dom";
import UserContext from "./utils/UserContext";


function filtersearch(inputValue, searchRestaurant) {

  const filteredResults = searchRestaurant.filter((Restaurant) => {
    //console.log("Restaurant.info.name:", Restaurant.info.name);
    if(Restaurant.info.name.toLowerCase().includes(inputValue.toLowerCase())){
      return true;
    }
  });
  return filteredResults;
}

const RestaurantCard = (props)=>{
  console.log("in the restaurant "+props);
  const imageUrl = import.meta.env.VITE_imageUrl
  return (
  <div className='restaurantcardmenu'>
    <img src={`${imageUrl}${props.restaurant?.info?.cloudinaryImageId}`} alt="img" />
    <div>{props.restaurant?.info?.name}</div>
    <div>{"areaName : "+props.restaurant?.info?.areaName}</div>
    <div>{"avgRating : "+props.restaurant?.info?.avgRating}</div>
    <div>{props.owner.name}</div>
  </div>
  )
}

const Body = () => {
  const [searchText,setSearchText]= useState("");
  const [filteredRestaurant , setfilteredRestaurant] = useState([]);
  const [allRestaurant , setallRestaurant] = useState([]);
  const {owner,setUser} = useContext(UserContext);

  useEffect(()=>{
    getRestaurant();  
  },[])

  async function getRestaurant(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.742763&lng=76.6390797&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    setfilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setallRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //console.log(allRestaurant);
    console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  }

  if (! allRestaurant) return null;

  return (allRestaurant?.length === 0) ? (
    <>
    <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={3} gap={30} />
    </>
  ) : (
    <>
      <input type="text" className="searchBar" id="searchInput" onChange={(e)=>{
        setSearchText(e.target.value);
      }} />

      <button type="submit" className="searchButton" onClick={()=>{
        const data = filtersearch(searchText,allRestaurant)
        setfilteredRestaurant(data);
      }}>Search</button>

      <input type="text" className="contextTextbar" value={owner.name} onChange={ (e)=>{
        setUser({
          ...owner,
          name:e.target.value,
        })
       }}/>

      <div className='restaurantcard'>
      {filteredRestaurant.map((restaurant) => (
        <Link key={restaurant.info.id}  to= {"/restaurant/"+restaurant.info.id}>
          <RestaurantCard  restaurant = {restaurant} owner={owner} />
        </Link>
      ))}
    </div>
    </>
  )
}
export default Body;