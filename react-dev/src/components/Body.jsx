import { useState } from "react";
import restaurantList from "../assets/RestaurantData/Restaurant"

/* function filtersearch(searchText,searchRestaurant){
  const val = searchRestaurant.filter((Restaurant)=>{
    Restaurant.info.name.includes(searchText);
  }
  )
  return val;
} */


function filtersearch(inputValue, searchRestaurant) {

  const filteredResults = searchRestaurant.filter((Restaurant) => {
    console.log("Restaurant.info.name:", Restaurant.info.name);
    if(Restaurant.info.name.toLowerCase().includes(inputValue.toLowerCase())){
      return true;
    }

  });
  
  return filteredResults;
}




const RestaurantCard = (props)=>{

  const imageUrl = import.meta.env.VITE_imageUrl

  return (
  <div className='restaurantcardmenu'>
    <img src={`${imageUrl}${props.restaurant?.info?.cloudinaryImageId}`} alt="img" />
    <div>{props.restaurant?.info?.name}</div>
    <div>{"areaName : "+props.restaurant?.info?.areaName}</div>
    <div>{"avgRating : "+props.restaurant?.info?.avgRating}</div>
  </div>
  )
}

const Body = () => {
  const [searchText,setSearchText]= useState('')
  const [searchRestaurant , setSearchRestaurant] = useState(restaurantList);


  return (
    <>
      <input type="text" className="searchBar" onChange={(e)=>{
        setSearchText(e.target.value);
      }} />
      <button type="submit" className="searchButton" onClick={()=>{
        const data = filtersearch(searchText,searchRestaurant)
        console.log(data);
        setSearchRestaurant(data);
      }}>Search</button>
      <div className='restaurantcard'>
      {searchRestaurant.map((restaurant) => (
        <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
      ))}
    </div>
    </>
  )
}
export default Body;