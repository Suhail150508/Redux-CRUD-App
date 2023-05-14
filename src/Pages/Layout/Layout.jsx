import React from 'react'
import {Routes,Route,useLocation} from 'react-router-dom'
import Error from '../Error'
import Home from '../Home/Home'
import Retreats from '../Retreats'
import About from '../About/About'
import Princing from '../../Pages/./Pricing/Pricing'
import DesignPage from '../../Pages/DesignPage'
import Contact from '../../Pages/Contact'
import {AnimatePresence} from "framer-motion";


const Layout = () => {
  const location = useLocation()
  return (
   
  <AnimatePresence>
 <Routes  location={location}  >
    <Route exact path = '/' element={<Home/>} />
    <Route exact path = '/retreats' element={<Retreats/>} />
    <Route exact path = '/about' element={<About/>} />
    <Route exact path = '/pricing' element={<Princing/>} />
    <Route exact path = '/contact' element={<Contact/>} />
    <Route exact path = '/designpage' element={<DesignPage/>} />
    <Route exact path = '*' element={<Error/>} />
 </Routes>
 
 </AnimatePresence>

   
  )
}

export default Layout