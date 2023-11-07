import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import Cart from './components/Cart.jsx'
import Offers from './components/Offers.jsx'
import Profile from './components/Profile.jsx'
import Help from './components/Help.jsx'
import Error from './components/Error.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Body from './components/Body.jsx'
import Restaurant from './components/Restaurant.jsx'


function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
      path :"/",
      element : <Body/>
      },
      {
      path :"/Offers",
      element : <Offers/>
      },
      {
      path :"/Profile",
      element : <Profile/>
      },
      {
      path :"/Help",
      element : <Help/>
      },
      {
      path :"/cart",
      element : <Cart/>
      },
      {
      path :"/restaurant/:id",
      element : <Restaurant />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>  {/* only use under development other wise it will increase overhead */}
    <RouterProvider router={router}/>
  //</React.StrictMode>,
)
