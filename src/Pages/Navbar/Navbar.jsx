import React,{useState} from 'react'
import logo from '../Assests/Image/logo.png'
import './Navbar.css'
import Snavbar from './Snavbar'
import { Link } from 'react-router-dom'


const Navbar = () => {



const [toggle, setToggle]=useState(false);

  return (

<main>

<div style={{position:"absolute",marginTop:"2rem",display:"flex",justifyContent:"space-between",gap:"47rem"}}>
  <div style={{paddingLeft:"4rem"}}>

    <img className='imglogo' style={{height:"50px",width:"50px",borderRadius:"50%"}} src={logo} alt='logo'/>
  </div>




<div >
<ul  style={{display:"flex",justifyContent:"right",marginRight:"2rem"}}>
<Link to="/designpage"> <li style={{fontSize:"1rem",marginRight:"1rem",paddingLeft:"2rem",paddingTop:"3px",paddingBottom:"3px",paddingRight:"15px",height:"20px",width:"85px",listStyleType:"none",borderRadius:"15px",backgroundColor:"#FFC153",opacity:".7"}}>community </li></Link>
<Link to="/retreats">  <li style={{fontSize:"1rem",marginRight:"1rem",paddingLeft:"2rem",paddingTop:"3px",paddingBottom:"3px",height:"20px",width:"85px",borderRadius:"15px",listStyleType:"none",backgroundColor:"#8E5E17",opacity:"1"}}>helling</li></Link>
<Link to="/contact"> <li style={{fontSize:"1rem",marginRight:"1rem",paddingLeft:"2rem",paddingTop:"3px",paddingBottom:"3px",height:"20px",width:"85px",borderRadius:"15px",listStyleType:"none",backgroundColor:"#FFC153",opacity:"1"}}>Contact</li></Link>

      </ul>
</div>
    
{
 toggle && <div style={{position:"absolute",}}><Snavbar/></div> 
}
      </div>


      <button   style={{fontSize:"1rem",position:"absolute",marginLeft:"80.4rem",marginTop:"2rem"}} onClick={()=>setToggle(!toggle)}>
 {
       toggle ? <i style={{fontSize:"2rem",color:"white",position:"absolute"}} class="fa-solid fa-xmark fa-3x"></i>:(
       
        <i style={{fontSize:"2rem",color:"white",position:"absolute"}} class="fa-solid fa-bars fa-2x"/>)
       }
 </button> 
      </main>
  )
}

export default Navbar










// import React,{useState} from 'react'
// import { NavLink } from 'react-router-dom'
// import Snavbar from '../Snavbar';
// import './Navbar.css'

// function Navbar() {

//  const [openBtn, setOpenBtn]=useState(true);
// const [clossBtn, setCloseBtn]=useState(false);
// const [newNavbar, setNewNavbar]=useState(false);



//   return (
//     <main >
//  <div class="header  ">
//             <div class="logo">
//                <h1><span style={{color:"#0e2",fontSize:"2.5rem"}}>J</span>unaid</h1> 
//             </div>


//              {
//               newNavbar &&  <Snavbar/>
//              }
    
//            <ul className='navbar'>
//             <li><NavLink className='nblink'  to="/" style={{textDecoration:"none"}}>Home</NavLink></li>
//             <li><NavLink className='nblink' to="/about" style={{textDecoration:"none"}}>About</NavLink></li>
//             <li><NavLink className='nblink' to="/service" style={{textDecoration:"none"}}>Service</NavLink></li>
//             <li><NavLink className='nblink' to="/contact" style={{textDecoration:"none"}}>Contact</NavLink></li>
//            </ul>

 
//             {

//               openBtn && <button class="open-btn"onClick={()=>
//                 setOpenBtn(false)&
//                 setCloseBtn(true)&
//                 setNewNavbar(true)
//               } style={{margin:"2rem"}}><i class="fa-solid fa-bars"></i></button>
//             }
//             {

//               clossBtn && <button class="closs-btn" onClick={()=>
//                 setOpenBtn(true)&
//                 setCloseBtn(false)&
//                 setNewNavbar(false)
              
//               } ><i class="fa-solid fa-xmark"></i></button>
//             }
            
           
//         </div>

      
//     </main>
//   )
// }

// export default Navbar