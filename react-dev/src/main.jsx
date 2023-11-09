import React ,{lazy,Suspense}from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import Cart from './components/Cart.jsx'
import Offers from './components/Offers.jsx'
import Help from './components/Help.jsx'
import Error from './components/Error.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Body from './components/Body.jsx'
import Restaurant from './components/Restaurant.jsx'
import { ShimmerSocialPost } from "react-shimmer-effects";


const Profile = lazy(()=> import("./components/Profile.jsx"))

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
      element : <Suspense fallback={<ShimmerSocialPost type="image" />}><Profile/></Suspense>
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
