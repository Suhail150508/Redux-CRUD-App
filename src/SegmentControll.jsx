import { useId, useState } from 'react'
import { motion} from 'framer-motion'
import './SegmentControll.css'
import React from 'react'
import { Link } from 'react-router-dom'



export default function SegmentControl()

{

  const [currentIndex, setCurrentIndex] = useState(1)
  const id =useId();
  

  const items = [
    {
     name:<Link to='/about'>About</Link>
    },
    {
      name:<Link to='/'>Home</Link>
    },
    {
      name:<Link to='/retreats'>Retreats</Link>
    },
     ]

  return (
    <>
      <div className='control-container'>
        {items.map((item,index) => {
          const {name}=item;
    
          return (
            <div
              className='control-item'
              onClick={() => setCurrentIndex(index)}
            >
              {currentIndex === index && (
                <motion.div
               layoutId={id}
               layout
               initial={{opacity:1}}
                animate={{opacity:1}}
                  className='control-item-bg'
                ></motion.div>
              )}
              <div className='control-item-text'>{name}</div>
            </div>
          )
        })}
      </div>

    </>
  )
}