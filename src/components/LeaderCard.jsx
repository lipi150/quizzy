import React from 'react'
import { PiMedalFill } from "react-icons/pi";


const LeaderCard = ({names, srno}) => {
  return (
    <>
       <div className='flex rounded-lg bg-bgc4 h-12 box-shadow items-center p-2'>
            <div className='flex items-center gap-1'>
                 <div>{srno}.</div>
                 <div className='text-c2 mt-1'><PiMedalFill/></div>
                 <div className='w-3 h-3 rounded-full bg-white flex mt-1'></div>
                 <div>{names}</div>
            </div>
            <div className='flex  flex-grow justify-end'>0/223 <label className='text-c2 font-bold'>XP</label></div>
       </div>
       
    </>
  )
}

export default LeaderCard