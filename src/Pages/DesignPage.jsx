import React from 'react'
import bgimg1 from '../Pages/Assests/Image/cover-image-1.png'
import {motion} from 'framer-motion'

const DesignPage = () => {
  return (



    <motion.div style={{
        height:"100vh",
        width:"100vw",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundImage: `url(${bgimg1})`}}
        initial={{ opacity: 0, scale: .5 }}
        animate={{ opacity: 1, scale: 1 }}
    
        transition={{
          transition:0,
          // duration: 0, 
          // delay: 0,
   
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
  
    
          
          
          
    </motion.div>
  )
}

export default DesignPage