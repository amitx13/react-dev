import restaurantList from "../assets/RestaurantData/Restaurant"


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
  return (
    <div className='restaurantcard'>
      {restaurantList.map((restaurant) => (
        <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
      ))}
    </div>
  );
}
export default Body;