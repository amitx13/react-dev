/* const Title = ()=>{
  return <h1>Swiggy</h1>
} */

import { useState } from "react"
import {Link} from "react-router-dom"
import useOnline from "./utils/useOnline";

const Header = () =>{
  const [isLogin,setisLogin] = useState(false);
  const isOnline = useOnline();

  return (
 /*  <div className='Header'>
    <Title/> */
    <div className="nav-items">
      
      <span><Link to="/">Home</Link></span>
      <ul>
        <span><Link to="/offers">offers</Link></span>
        <span><Link to="/help">Help</Link></span>
        <span><Link to="/profile">Profile</Link></span>
        <span><Link to="/cart">cart</Link></span>
      </ul>
      {isLogin? (<button onClick={()=>setisLogin(false)}>logout</button>)
      :(<button onClick={()=>setisLogin(true)}>login</button>)}
      {isOnline?"🟢":"🔴"}
    </div>
    /* </div> */
  )
}
export default Header;