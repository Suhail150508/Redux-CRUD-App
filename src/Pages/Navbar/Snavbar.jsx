import React from 'react'
import { Link } from 'react-router-dom'
import './Snavbar.css'

const Snavbar = () => {
 

  return (
<main>

<ul className='nav1 '>

            <li ><Link className='nb '  to="/" style={{textDecoration:"none",
            textAlign:"center",fontSize:"1.8rem",marginTop:".1rem" }}>Home</Link></li>
            <li><Link className='nb' to="/about" style={{textDecoration:"none",
            textAlign:"center",fontSize:"1.8rem",marginTop:".1rem"}}>About</Link></li>
            <li><Link className='nb' to="#" style={{textDecoration:"none",
             textAlign:"center",fontSize:"1.8rem",marginTop:".1rem"}}>Service</Link></li>
            <li> <Link className='nb' to="/contact" style={{textDecoration:"none",  
            textAlign:"center",fontSize:"1.8rem",marginTop:".1rem"}}>Contact</Link></li>
            <li> <Link className='nb' to="/retreats" style={{textDecoration:"none",  
            textAlign:"center",fontSize:"1.8rem",marginTop:".1rem"}}>Retreats</Link></li>
        </ul>
</main>
  )
}

export default Snavbar