import React ,{lazy,Suspense,useState}from 'react'
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
import UserContext from './components/utils/UserContext.jsx'
import { Provider } from 'react-redux'
import store from './components/utils/Store.jsx'

const Profile = lazy(()=> import("./components/Profile.jsx"))

function App() {
  const [user, setUser] = useState({
        name:"Xlr8Op",
        email:"Xlr8@gmail.com",
  })
  return (
    <Provider store={store}>
    <UserContext.Provider value={{
      owner:user,
      setUser:setUser,
    }}>
    <Header/>
    <Outlet/>
    <Footer/>
    </UserContext.Provider>
    </Provider>
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
      element : <Body />
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
