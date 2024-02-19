import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
const MainCard = ({date, main}) => {
    return (
        <>
            <div className='bg-bgc6 h-60 w-72 box-shadow p-4 rounded-xl cursor-pointer hover:bg-bgc5'>
                <div className='text-sm text-gray-400'>Last Practice etc etc</div>
                <div className='text-sm text-gray-400'>{date}</div>
                <div className='text-white'><FaArrowTrendUp size={80} /></div>
                <div className='text-2xl font-bold text-white'>{main}</div>
                <div className='text-sm text-gray-400'>A description of the above parameter goes here</div>
            </div>
        </>
    )
}

export default MainCard