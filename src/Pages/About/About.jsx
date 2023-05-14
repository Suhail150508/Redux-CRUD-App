import React, { useState } from 'react'
import bgimg1 from '../Assests/Image/bg-1.png'
import {motion} from 'framer-motion'
import Footer from '../Assests/Image/Icons Image/footerImg.png'



const About = () => {

  const [showFooter,setShowFooter]=useState(false)


  return (
  
    <motion.div style={{
      height:"100vh",
      width:"100vw",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      backgroundImage: `url(${bgimg1})`}}
      // intial={{opacity:0}}
      // animate={{opacity:1}}
      // exit={{opacity:0}}

      initial={{ opacity: .8, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      >
        <h1 style={{color:"white",borderBottom:"2px solid white",paddingBottom:"2rem",paddingTop:"18rem",textAlign:"center",fontSize:"3rem",fontWeight:"normal",width:"25rem",
        height:"20rem",
        marginLeft:"28rem"}}>About Us</h1>

{/* footer section from here */}

{
showFooter && (
   <motion.div style={{position:"relative" ,marginTop:"0rem",}}>
     <motion.img style={{height:"5rem",opacity:".6",width:"100%",marginTop:"4rem",position:"relative"}} src={Footer} alt="footer"/>
     
     <motion.div style={{display:"flex",justifyContent:"space-around",marginTop:"-9rem"}}>
     <motion.div style={{color:"gold",backgroudColor:"gray",opacity:".8"}}>
        <h3 style={{opacity:"1",color:"red"}}>This is footer</h3>
       <p style={{opacity:'1'}}>Ipsum eirmod est nonumy.</p>
       <p>Ipsum eirmod est nonumy.</p>
       <p>Ipsum eirmod est nonumy.</p>
       </motion.div>
      <motion.div style={{color:"gold",backgroudColor:"gray",opacity:".8"}}>
        <h3  style={{color:"red",opacity:"1"}}>This is footer</h3>
       <p>Ipsum eirmod est nonumy.</p>
       <p>Ipsum eirmod est nonumy.</p>
       <p>Ipsum eirmod est nonumy.</p>
       </motion.div>
      <motion.div style={{color:"gold",backgroudColor:"gray",opacity:".8"}}>
        <h3  style={{color:"red",opacity:"1"}}>This is footer</h3>
       <p>Ipsum eirmod est nonumy.</p>
       <p>Ipsum eirmod est nonumy.</p>
       <p>Ipsum eirmod est nonumy.</p>
       </motion.div>
      <motion.div style={{color:"gold",backgroudColor:"gray",opacity:".8"}}>
        <h3  style={{color:"red",opacity:"1",}}>This is footer</h3>
       <p>Ipsum eirmod est nonumy.</p>
       <p>Ipsum eirmod est nonumy.</p>
       <p>Ipsum eirmod est nonumy.</p>
       </motion.div>
 
     </motion.div>
   </motion.div>
  )
}
<motion.button style={{fontSize:"2rem",width:"100%",padding:"1.5rem"}} onClick={()=>setShowFooter(true)}>
  
{showFooter? (<h2 style={{color:"#24f",marginTop:"-12rem",marginLeft:"30rem",position:"absolute",fontFamily:"normal"}}>Visit Now</h2>):(<h2 style={{backgroundColor:"green",fontSize:"2rem",width:"100%",padding:"1.5rem",marginLeft:"-1.7rem"}}>Show Footer</h2>)
} 
</motion.button>


    </motion.div>
   
  )

}
export default About
