

import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import Layout from '../src/Pages/Layout/Layout'
// import Button from './Pages/Button/Button';
// import Button1 from '../src/Pages/Button1';
import SegmentControl from './SegmentControll';



function App() {
  return (
    <Router  style={{position:"relative"}}>
      <div style={{position:"absolute",Top:"0"}}>
      <Navbar/> 
      </div>
     
      <div style={{marginTop:"10rem",position:"absolute",marginLeft:"30rem"}}>
      <SegmentControl/>
     {/* <Button/>  */}
      </div>
      <Layout/>
    </Router>
  );
}

export default App;






// import React from 'react'
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Navbar from './Pages/Navbar/Navbar';

// import About from './Pages/About/About';
// import Retreats from './Pages/Retreats';
// import Home from './Switching/Home';
// import Contact from './Switching/Contact';

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route exact path='/' element={<Home/>}></Route>
//         <Route exact path='/about' element={<About/>}></Route>
//         <Route exact path='/retreats' element={<Retreats/>}></Route>
//         <Route exact path='/contact' element={<Contact/>}></Route>
//       </Routes>
//     </div>
//   )
// }

// export default App
