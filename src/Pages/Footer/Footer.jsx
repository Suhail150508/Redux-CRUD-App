import React from 'react'
import footer from '../Assests/Image/Icons Image/footerImg.png'
import {motion} from 'framer-motion'

const Footer = ({
    bookVisibilty
}) => {
  return (

    <motion.div style={{display:bookVisibilty? "none":"block",
        height:"10rem",
        width:"100vw", 
         position:"relative"
       }}
        >
        <motion.img style={{width:"100vw",height:"10rem"}} src={footer} alt="img"></motion.img>
        <h1 style={{textAlign:"center",position:"absolute",marginTop:"-8.8rem",marginLeft:"34rem"}}>Footer Section</h1>
       </motion.div>
  )
}

export default Footer