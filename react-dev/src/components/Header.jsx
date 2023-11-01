import { useState } from "react"
import restaurant from "../assets/RestaurantData/Restaurant"

const Title = ()=>{
  return <h1>Swiggy</h1>
}
const Header = () =>{
  const [inputValue,setinputValue] = useState("");
  const [searchRestaurant, setSearchRestaurant] = useState(restaurant);

  function filtersearch(inputValue){
    restaurant.filter((input)=>{
      if((inputValue.toLowerCase() === (input?.info?.name).toLowerCase())){
         return 
      }
    })
  }

  return (
  <div className='Header'>
    <Title/>
    <div className="nav-items">
      <ul>
        <input type="search" className="searchInput"placeholder="search" value={inputValue}
        onChange={(e)=>{
          setinputValue(e.target.value);
        }}/>
        <button type="submit" 
        onClick={(e)=>{
          const data = filtersearch(inputValue);
          setSearchRestaurant(data);
        }}>
          search
          </button>
        <span>offers</span>
        <span>Help</span>
        <span>Profile</span>
        <span>Cart</span>
      </ul>
    </div>
    </div>
  )
}

export default Header;