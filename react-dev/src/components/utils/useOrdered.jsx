import { useEffect,useState } from "react";

const useOrdered =(restaurantId)=>{
    const [ordered , setOrdered] = useState([]);

    useEffect(()=>{
        getRestaurant(restaurantId);
    },[])
    async function getRestaurant(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.742763&lng=76.6390797&restaurantId=${restaurantId.id}`);
        const json = await data.json();
        //console.log(json?.data?.cards[0]?.card?.card?.info);
        setOrdered(json?.data?.cards[0]?.card?.card?.info);
}

return  ordered||[];
}
export default useOrdered;