import React from 'react'
import { PiMedalFill } from "react-icons/pi";
import { TbLogout2 } from "react-icons/tb";
import Streak from './Streak';
import Leaderboard from './Leaderboard';

const ChatSat = () => {
    return (
        <>
            <div className='background-gradient p-5  lg:h-screen overflow-y-hidden'>
                <div className='flex flex-col gap-4'>

                    <div className='flex flex-row'>
                        <div className='flex flex-row items-center gap-2'>
                            <div className=' w-4 h-4 bg-white rounded-full'></div>
                            <div className='text-white'>Chat<label className='font-bold'>SAT</label></div>
                        </div>

                        <div className='flex flex-grow gap-2 justify-end lg:hidden'>
                            <div className='flex items-center gap-2'>
                                <div className=' w-6 h-6 bg-white rounded-full '></div>
                                <div className='-mt-1'>Name</div>
                            </div>

                            <div className='flex items-center gap-2'>
                                <div><TbLogout2 /></div>
                                <div className='-mt-1 text-sm'>Sign Out</div>
                            </div>
                        </div>
                    </div>


                    <div className='box-shadow w-80 bg-bgc1 h-10 flex items-center p-3 rounded-lg text-white'>New Thread</div>

                    <div className='bg-bgc1 box-shadow p-3 flex flex-row rounded-lg items-center justify-center gap-4'>
                        <div className='flex justify-center items-center h-28'>
                            <Streak />
                        </div>
                        <div>
                            <div className='flex items-center justify-end  text-2xl w-40'>
                                <div className='text-c2 '><PiMedalFill size={30} /></div>
                                <div className='flex items-center justify-center pb-1  gap-2'>0/223 <label className='text-c2 font-bold'>XP</label></div>
                            </div>
                            <div className='flex justify-end'>
                                <div className='bg-bgc3 pl-3 pr-3 pt-1 pb-1 rounded-md flex justify-center items-center text-c2 w-fit text-md box-shadow cursor-pointer hover:text-white'>Take a Quiz</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Leaderboard />
                    </div>

                    <div className='flex-col gap-2 hidden lg:flex'>
                        <div className='flex items-center gap-2'>
                            <div className=' w-6 h-6 bg-white rounded-full '></div>
                            <div className='-mt-1'>Name</div>
                        </div>

                        <div className='flex items-center gap-2'>
                            <div><TbLogout2 /></div>
                            <div className='-mt-1 text-sm cursor-pointer'>Sign Out</div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default ChatSat