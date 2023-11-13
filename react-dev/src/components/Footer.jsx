import UserContext from "./utils/UserContext";
import { useContext } from "react";

const Footer = ()=>{
  const {owner} = useContext(UserContext);
  return(
    <div className='footer'>on_Under_DevelopMent by {owner.name} email:{owner.email}</div>
  )
}
export default Footer;