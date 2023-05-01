import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<div className="nav" style={{backgroundColor:"black"}}>
<ul style={{display:"flex",justifyContent:"right",marginRight:"3rem"}}>
   <Link style={{textDecoration:"none",color:"white",fontSize:"1.5rem",margin:"1.5rem",padding:"7px"}} to=''>Home</Link>
   <Link style={{textDecoration:"none",color:"white",fontSize:"1.5rem",margin:"1.5rem",padding:"7px"}} to='/show-book'>ShowBooks</Link>
   <Link style={{textDecoration:"none",color:"white",fontSize:"1.5rem",margin:"1.5rem",padding:"7px"}} to='/add-book'>AddBooks</Link>
</ul>

</div>

    </div>
  )
}

export default Navbar