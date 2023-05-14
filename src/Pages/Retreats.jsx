import React from 'react'
import bgimg3 from './Assests/Image/cover-image-1.png'
import {motion} from 'framer-motion'
const Retreats = () => {
  return (
    <motion.div style={{
      height:"100vh",
      width:"100vw",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      backgroundImage: `url(${bgimg3})`}}
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      >
       
      </motion.div>
  )
}

export default Retreats