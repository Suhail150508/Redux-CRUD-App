import React,{useState} from 'react'
import bgimg from '../Assests/Image/bg-2.png'
import { motion}from 'framer-motion'
import coverImg2 from '../Assests/Image/cover-image-2.png'
import coverImg1 from '../Assests/Image/cover-image-1.png'
import coverImg3 from '../Assests/Image/cover-image-3.png'
import coverImg4 from '../Assests/Image/cover-image-4.png'
import coverImg5 from '../Assests/Image/cover-image-5.png'
import coverImg6 from '../Assests/Image/cover-image-6.png'
import img1 from '../Assests/Image/Icons Image/Daria-Halprin.png'
import img2 from '../Assests/Image/Icons Image/dorothy_charless.png'
import img3 from '../Assests/Image/Icons Image/Helmon.png'
import img4 from '../Assests/Image/Icons Image/Janis.png'
import Footer from '../Assests/Image/Icons Image/footerImg.png'






const items =[
  {
     id:"1",
    coverImg: coverImg1,
    title:"Relational Gestalt Body",
    img:img1,
    mg:img2
  },
  {
     id:"2",
     coverImg: coverImg2,
    title:"Nourshing the whole ",
    img:img2,
    mg:img3
  },
  {
     id:"3",
     coverImg: coverImg3,
    title:"If you body could speak",
    img:img3,
    mg:img4
  },
  {
     id:"4",
     coverImg: coverImg4,
    title:"Centered Awareness",
    img:img4,
    mg:img1
  },
  {
     id:"5",
     coverImg: coverImg5,
    title:"Goot tree ",
    img:img1,
    mg:img2
  },
  {
     id:"6",
     coverImg: coverImg6,
    title:"Body Centered Awareness",
    img:img2,
    mg:img3
  },
 
]

const Home = () => {

  const [selectedId, setSelectedId] = useState(null)
  const [showFooter,setShowFooter]=useState(false)

  
  return (
  
    <motion.div style={{
      height:"auto",
      width:"100vw",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      backgroundImage: `url(${bgimg})`}}
      initial={{ opacity: 0, scale: .5 }}
      animate={{ opacity: 1, scale: 1 }}
  
      transition={{
        transition:0,
        // duration: 0, 
        // delay: 0,
 
        ease: [0, 0.71, 0.2, 1.01]
      }}
      >


      {/*.......... for cart information..........  */}

<motion.div  style={{display:"flex",flexWrap:"wrap",padding:"15rem",}}>
{
  items.map((item)=>{
    const{coverImg,title,img,mg}=item;
    return (
      <motion.div 
   transition={{layout:{duration: 7,type:"spring"}}}
    layoutId={item}
   style={{height:"auto",width:"15rem",margin:"1rem",borderRadius:"15px",}}
   layout
   onClick={() => setSelectedId(item)}
  >
   <motion.div>
  <motion.img style={{height:"10rem",width:"15rem",position:"relative",borderRadius:"10px"}} src={coverImg}></motion.img>
  <motion.h4 style={{backgroundColor:"gray",position:"absolute",width:"13rem",opacity:".6",color:"white",padding:"1rem",marginTop:"-2.5rem"}}>{title}</motion.h4>
  </motion.div>
   <motion.div style={{backgroundColor:"#FFC153",alignItems:"center",justifyContent:"center",display:"flex",padding:"2rem 0",}}>
   <motion.img style={{height:"2rem",width:"2rem",borderRadius:"50%"}}  src={img} alt="img"></motion.img>
   <motion.img style={{height:"2rem",width:"2rem",borderRadius:"50%"}} src={mg} alt="img"></motion.img>
   </motion.div>
   <motion.div>
     <motion.p style={{backgroundColor:"#8E5E17",textAlign:"center",padding:"10px 0",borderRadius:"10px"}}>APRIL 27-30, 2023</motion.p>
   </motion.div>

      </motion.div>
    )
  })
}


{selectedId && ( 
 <motion.div
 transition={{layout:{duration: 3,}}}
 initial={{opacity:.3, scale:1.26}}
 animate={{opacity:1}}
 layoutId={selectedId} style={{height:"22rem",borderRadius:"20px",width:"30rem",boxShadow:"3px 3px 5px white",zIndex:"10",
 position:"absolute",marginLeft:"3rem",marginTop:"4rem"}}>

  <motion.button style={{marginTop:"2rem",marginLeft:"2rem",zIndex:"10",backgroudColor:"gray",height:"15px",width:"15px",position:"absolute"}}  onClick={() => setSelectedId(null)} ><i style={{fontSize:"2rem",background:"green",padding:"6px"}} class="fa fa-chevron-left" fa-4x aria-hidden="true"></i> </motion.button>
  <motion.img style={{height:"10rem",width:"35rem",position:"relative",borderRadius:"10px"}} src={selectedId.coverImg}></motion.img>
  <motion.h4 style={{margin:"0 auto", position:"absolute",width:"33rem",opacity:".6",color:"white",padding:"1rem",marginTop:"-3.5rem",paddingLeft:"13rem"}}>this is first img</motion.h4>
  <motion.div style={{backgroundColor:"#FFC153",alignItems:"center",justifyContent:"center",display:"flex",padding:"6rem 0",width:"35rem"}}>
  <motion.h4 style={{backgroundColor:"gray",position:"absolute",width:"33rem",color:"white",padding:"1.1rem ",marginTop:"-14.5rem",fontSize:"1rem",fontFamily:"popins-sans-serif",}}>Est sadipscing aliquyam eos dolor est. Sit diam invidunt takimata magna ipsum et diam.No takimata et accusam nonumy labore amet lorem erat. Eirmod nonumy ea ut takimata. Sit ipsum clita tempor vero sit. Takimata accusam et et sadipscing magna.</motion.h4>
   <motion.img style={{height:"3rem",marginTop:"5rem",width:"3rem",borderRadius:"50%"}}  src={selectedId.img} alt="img"></motion.img>
   <motion.img style={{height:"3rem",marginTop:"5rem",width:"3rem",borderRadius:"50%"}} src={selectedId.mg} alt="img"></motion.img>
   </motion.div>
   <motion.p style={{textAlign:"center",fontSize:"1rem",width:"35rem",padding:"20px 6px",backgroundColor:"lightgreen"}}>APRIL 27-30, 2023</motion.p>
  
</motion.div>


)
}

</motion.div>


{/* footer section from here */}

{
  showFooter && (
   <motion.div style={{position:"relative"}}>
     <motion.img style={{height:"12rem",opacity:".6",width:"100%",marginTop:"10rem",position:"relative"}} src={Footer} alt="footer"/>
     
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
        <h3  style={{color:"red",}}>This is footer</h3>
       <p>Ipsum eirmod est nonumy.</p>
       <p>Ipsum eirmod est nonumy.</p>
       <p>Ipsum eirmod est nonumy.</p>
       </motion.div>
 
     </motion.div>
   </motion.div>
  )
}
<motion.button style={{fontSize:"2rem",width:"100%",padding:"1.5rem"}} onClick={()=>setShowFooter(true)}>
  
{showFooter ? (<h2 style={{color:"#24f",marginTop:"-20rem",marginLeft:"30rem",position:"absolute",fontFamily:"normal"}}>Visit Now</h2>)
:(<h2 style={{backgroundColor:"green",fontSize:"2rem",width:"100%",padding:"1.5rem",marginLeft:"-1.7rem"}}>Show Footer
</h2>)} 
  </motion.button>

    </motion.div>
  )
}

export default Home