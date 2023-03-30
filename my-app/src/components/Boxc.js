import React from 'react'
import ball from '../assets/ball.png'
import cone from '../assets/cone.png'
import gnew from '../assets/gnew.png'
import swim from '../assets/swim.png'
import xsplit from '../assets/xsplit.png'
import wnew from '../assets/wnew.png'

function Boxc () {
  return (
    <div className='bg-slate-300 md:p-20 '>
         <div className=' w-[90%] m-auto bg-slate-100 rounded-xl drop-shadow-2xl min-h-[200px] grid md:grid-cols-2 p-10'>
                <div className='grid md:col-span-1'>
                    <div className='flex justify-around items-center'>
                    <p className='font-normal md:w-[45%]'>Extra.Live is natively integrated into top streaming software, like OBS Studio, SLOBS, Elgato, XSplit, and many others.</p>
                    </div>
                </div>
                <div className=' grid md:col-span-1'>
                    <div className='flex justify-evenly items-center'>
                    <img src={cone} alt="pic" className=' mt-5  w-[50px] md:w-[50px]'  />
                    <img src={ball} alt="pic" className=' mt-5  w-[50px] md:w-[50px]'  />
                    <img src={swim} alt="pic" className=' mt-5  w-[50px] md:w-[50px]'  />
                    </div>

                    <div className='flex justify-evenly items-center'>
                   
                    <img src={xsplit} alt="pic" className=' mt-5  w-[50px] md:w-[50px]'  />
                    <img src={gnew} alt="pic" className=' mt-5  w-[50px] md:w-[50px]'  />
                    <img src={wnew} alt="pic" className=' mt-5  w-[50px] md:w-[50px]'  />
                    </div>

                    
                </div>

            </div>
        </div>
  )
}
export default Boxc;
