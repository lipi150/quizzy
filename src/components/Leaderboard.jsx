import React from 'react'
import LeaderCard from './LeaderCard'
import leaderData from './leaderData'
import { useState } from 'react'

const Leaderboard = () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className='bg-bgc1 lg:bg-bgc5 rounded-lg lg:box-shadow'>
                <div className='flex flex-row'>
                    <div className='lg:box-shadow bg-bgc1 h-10 flex items-center p-3 rounded-lg text-sm flex-grow'>Leaderboard</div>
                    <div className='flex p-2 bg-bgc5 cursor-pointer font-bold hover:bg-bgc2 hover:text-black box-shadow rounded-lg lg:hidden ml-10' onClick={()=>setShow(!show)}><button>{show? 'hide' :'show'} Leaderboard</button></div>
                </div>
                {show &&
                    <div className='pt-2 pl-4 pr-4 pb-2 flex flex-col gap-2 overflow-y-scroll h-[18rem]'>
                        {leaderData.map((item) => (
                            <LeaderCard id={item.id} names={item.names} srno={item.srno} />
                        ))}

                    </div>
                }

            </div>
        </>
    )
}

export default Leaderboard