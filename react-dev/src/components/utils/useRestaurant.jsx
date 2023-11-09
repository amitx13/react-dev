import { useEffect,useState } from "react";

const useRestaurant =(restaurantId)=>{
    const [restaurantMenu,setrestaurantMenu] = useState([]);

    useEffect(()=>{
        getRestaurant(restaurantId);
    },[])
    async function getRestaurant(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.742763&lng=76.6390797&restaurantId=${restaurantId.id}`);
        const json = await data.json();
setrestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || []);
}

return  restaurantMenu||[];
}
export default useRestaurant;