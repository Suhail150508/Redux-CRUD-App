import React from 'react'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import ShowBooks from '../Pages/ShowBooks/ShowBooks'
import AddBooks from '../Pages/AddBooks/AddBooks'
import Error from '../Pages/Error'
import Home from '../Pages/Home/Home'
import Navbar from '../Pages/Navbar/Navbar'
import EditBooks from '../Pages/Edit-Book/EditBooks'


const Layout = () => {
  return (
    <div>
 <BrowserRouter>
 <Navbar/>
 <Routes>
    <Route path = '/' element={<Home/>} />
    <Route path = '/show-book' element={<ShowBooks/>} />
    <Route path = '/add-book' element={<AddBooks/>} />
    <Route path = '/edit-book' element={<EditBooks/>} />
    <Route path = '*' element={<Error/>} />
 </Routes>
 
 
 </BrowserRouter>

    </div>
  )
}

export default Layout