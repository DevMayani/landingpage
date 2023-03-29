import React from 'react'
import Image from '../../assets/GroupOne.png';




function MainOne() {
  return (
    <div className=''>

       <div className='p-5 grid md:grid-cols-2'>
            <div className='mt-[10px] w-full '>
             <div>
              <p className='text-xl  text-white'> The Best Choice</p>
              <p className='text-xl  text-white md:text-2xl'> Create and Live Stream <br className='md:hidden' />
              Real-time and <br className='md:hidden' />
              Recorded Videos</p>
             </div>
             <div className='mt-5 md:mt-15'>
                <p className=' text-white font-bold text-6xl '>Multiply <br className='md:hidden' />
                Your <br />
                Views
                </p>
                <div>
                <p className='text-xl w-[60%] text-white md:text-2xl mt-10'> Grow your <br className='md:hidden' />
             audience with a <br className='md:hidden' />
               single stream <br className='md:hidden' />
              to multiple <br className='md:hidden' /> platforms.</p>
             </div>
          <button className='px-7 py-2 mb-4 mt-2 rounded-3xl text-purple-600 font-semibold text-lg bg-white md:mt-5 text-xl'>
            Stream Now
            </button>
          </div>
            </div>

            <div className='hidden md:block'>
            <img src={Image} alt="img" className=' md:my-20 w-[75%] ml-32 '  />
            </div>

            <div className='block md:hidden'>
            <img src={Image} alt="img" className='my-5 ml-10 mt-10 md:my-20 w-[75%] ml-15 '  />
            </div>
       </div>
       

       
      

       

       

    </div>
  )
}


export default MainOne;

