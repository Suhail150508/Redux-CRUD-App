// import React, { useId } from 'react'
// import {motion} from 'framer-motion'

// const Cart = ({
//     selectedId

// }) => {
//     // const {img,title,id,coverImg}=selectedId

//     // const {title,coverImg,img,id}=props.state.
// console.log(selectedId)
//     const hi =useId()

//   return (
//     <div>
        
//  <motion.div
//    transition={{layout:{duration: 3,}}}
//    initial={{opacity:.3, scale:1.26}}
//    animate={{opacity:1}}
//    layoutId={selectedId} style={{height:"22rem",borderRadius:"20px",width:"30rem",boxShadow:"3px 3px 5px white",zIndex:"10",
//    position:"absolute",marginLeft:"3rem",marginTop:"4rem"}}>
  
//   <motion.img style={{height:"10rem",width:"35rem",position:"relative",borderRadius:"10px"}} src={selectedId.coverImg} alt='img'></motion.img>
//   <motion.h4 style={{margin:"0 auto", position:"absolute",width:"33rem",opacity:".6",color:"white",padding:"1rem",marginTop:"-3.5rem",paddingLeft:"13rem"}}>this is first img</motion.h4>
//   <motion.div style={{backgroundColor:"#FFC153",alignItems:"center",justifyContent:"center",display:"flex",padding:"6rem 0",width:"35rem"}}>
//     <motion.h>{selectedId.item.title}</motion.h>
//   <motion.h4 style={{backgroundColor:"gray",position:"absolute",width:"33rem",color:"white",padding:"1.1rem ",marginTop:"-14.5rem",fontSize:"1rem",fontFamily:"popins-sans-serif",}}>Est sadipscing aliquyam eos dolor est. Sit diam invidunt takimata magna ipsum et diam.No takimata et accusam nonumy labore amet lorem erat. Eirmod nonumy ea ut takimata. Sit ipsum clita tempor vero sit. Takimata accusam et et sadipscing magna.</motion.h4>
//    <motion.img style={{height:"3rem",marginTop:"5rem",width:"3rem",borderRadius:"50%"}}  src={img} alt="img"></motion.img>
//    <motion.img style={{height:"3rem",marginTop:"5rem",width:"3rem",borderRadius:"50%"}} src={img} alt="img"></motion.img>
//    </motion.div>
//   <motion.button style={{textAlign:"center",padding:"2rem ",fontSize:"3rem",width:"35rem",padding:"2px 10px",backgroundColor:"lightgreen"}}><i class="fa fa-times" aria-hidden="true" fa-2x></i></motion.button>
// </motion.div>

//     </div>
//   )
// }

// export default Cart