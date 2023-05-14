import React, { useState } from 'react'
import './Button1.css'

const Button1 = () => {

    const [activeIndex,setActiveIndex]=useState();
    const handleClick =(index)=>{
        setActiveIndex(index)
    }
    const navItems = [
        { text:"About", icon: <i className="fa-solid fa-house"></i>},
        { text:"Home", icon:<i className="fa-solid fa-house"></i>},
        { text:"Retreats",icon: <i className="fa-solid fa-plus"></i>},
        { text:"mail", icon: <i className="fa-solid fa-gear"></i>},
        { text:"mail", icon: <i className="fa-solid fa-mail"></i>},
    
    
      ]

  return (
    <div>
      <ul className='ul'>
        {
            navItems.map((item,index)=>{
                return (
                    <li 
                    key={index}
                    className={`list ${index === activeIndex? "active":""}`}
                    onClick={()=>handleClick(index)}
                    >
                     <a href='#'>
                        <span className='icon'>
                            <span className='ion-icon'>{item.icon}</span> 
                        </span>
                        <span>
                            <span className='text'>{item.text}</span>
                        </span>
                     </a>
            
                    </li>
                )
   
            })}

            <div className='indicator'> </div>
      </ul>


    </div>
  )
}

export default Button1