import { useSelector } from "react-redux";
import '../index.css'
function Cart(){
    const items = useSelector(store =>store.cart.items)
    return (
    <div className="cartItems">
      {items.map((item, index) => (
        <div key={index} className="cartItem">
          {item}
        </div>
      ))}
    </div>
    )
}

export default Cart;