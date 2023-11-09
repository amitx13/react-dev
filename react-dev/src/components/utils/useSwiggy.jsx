import { useState,useEffect } from "react";

const useSwiggy =()=>{
    /* const [filteredRestaurant , setfilteredRestaurant] = useState([]); */
    const [allRestaurant , setallRestaurant] = useState([]);

/* console.log("render1"); */
    useEffect(()=>{
        getRestaurant();  
    },[])

    async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.742763&lng=76.6390797&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setallRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return  allRestaurant;
}

export default useSwiggy;