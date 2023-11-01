const Title = ()=>{
  return <h1>Swiggy</h1>
}

const Header = () =>{

  return (
  <div className='Header'>
    <Title/>
    <div className="nav-items">
      <ul>
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