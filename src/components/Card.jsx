import React, { useState } from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion"

function Card({data, reference, index}) {

    const [sliderOpen, setSliderOpen] = useState(data.close)

    function sliderShow() {
        data.close = !data.close
        setSliderOpen(data.close)
    }

  return (
    <motion.div drag dragConstraints={reference} dragElastic={1.1} whileDrag={{scale: 1.2}} dragTransition={{bounceStiffness: 100, bounceDamping:10}} className='relative flex-shrink-0 w-60 h-72 px-8 py-10 rounded-[35px] bg-zinc-600/30 text-white overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm font-semibold leading-tight mt-5'>{data.decription}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex justify-between items-center mb-3 py-3 px-8'>
                <h5>{data.fileSize}</h5>
                <button onClick={sliderShow} className='w-7 h-7 rounded-full flex items-center justify-center bg-zinc-800 cursor-pointer'>
                    {sliderOpen? <RxCross1 size='0.8em' color='#fff'/> : <FaArrowDownLong size='0.8em' color='#fff'/>} 
                </button>
            </div>

            {sliderOpen? (
                <div className={`tag w-full py-3 ${data.tag.tagColor === 'green'? "bg-green-600" : "bg-blue-600"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>Download now</h3>
                </div>
                ) : null
            }
            
        </div>

    </motion.div>
  )
}

export default Card