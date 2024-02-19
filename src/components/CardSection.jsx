import React from 'react'
import MainCard from './MainCard'
import mainCardData from './mainCardData'
const CardSection = () => {
  return (
    <>
      <div className='flex flex-col mb-10'>
        <div className='p-12 text-2xl font-bold text-white'>
          <div>Hey,<label className='text-c2'>Name!</label></div>
          <div>How's your prep for the <label className='text-c2'>March SAT</label></div>
        </div>

        <div className='flex flex-col lg:flex-row lg:items-center lg:w-[40rem] gap-8 lg:flex-wrap ml-16'>
          {mainCardData.map((item) => (
            <MainCard id={item.id} date={item.date} heading={item.main}/>
          ))}

        </div>
      </div>
    </>
  )
}

export default CardSection