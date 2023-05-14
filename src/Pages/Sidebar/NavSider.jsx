// import  React,{useState} from "react";
// import { motion } from "framer-motion"
// import Snavbar from "../Navbar/Snavbar"

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
// }

// export const MyComponent = () => {
//   const [isOpen, setIsOpen] =useState(false)

//   return (
//     <motion.nav
//       animate={isOpen ? "open" : "closed"}
//       variants={variants}
//     >
//       <Toggle onClick={() => setIsOpen(isOpen => !isOpen)}></Toggle>

//       <Snavbar/>

//       {/* <Items /> */}
//     </motion.nav>
//   )
// }