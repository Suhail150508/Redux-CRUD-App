import { NavLink } from 'react-router-dom'
import './Button.css';



const Button = () => {



  return (

<div>
<ul className='nav'>

<NavLink activeClassName ="active" exact  to="/about"><li>About</li></NavLink>
<NavLink to="/"  activeClassName ="active" exact ><li>Home</li></NavLink>
<NavLink to="/retreats"  activeClassName ="active" exact ><li>retreats</li></NavLink>




</ul>
</div>
   
  
  )
}

export default Button