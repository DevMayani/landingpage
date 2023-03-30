import React from 'react'

function Faq () {
  return (
    <div className='mt-10  md:px-20'>
    <div className=' text-center'>
      <h4 className='text-3xl underline text-purple-600 decoration-1 underline-offset-8'>FAQ</h4>
      <p className='mt-5'>Common questions and answers</p>
      </div>
     <div className='grid leading-2 md:grid-cols-3 p-10'>
      <div className='col-span-full md:col-span-1  p-5'>
         <p className='font-bold '>What is Extra.Live?</p>
         <p className='mt-2 text-sm font-light'>Extra Live is a cloud based service to schedule & live stream pre-recorded videos as well as real-time streaming to 40+ social media platforms including Facebook Live, YouTube, Instagram, Twitch or any Custom RTMP Streaming Destination.</p>
         <p className='mt-10 font-bold'>Video formats & qualities?</p>
         <p className='mt-2 font-light text-sm'>Extra Live is a cloud based service to schedule & live stream pre-recorded videos as well as real-time streaming to 40+ social media platforms including Facebook Live, YouTube, Instagram, Twitch or any Custom RTMP Streaming Destination..</p>
      </div>
      <div className='col-span-full md:col-span-1 p-5'>
         <p className='font-bold'>Who can use Extra.Live?</p>
         <p className='mt-2 font-light text-sm' >Extra Live is a cloud based service to schedule & live stream pre-recorded videos as well as real-time streaming to 40+ social media platforms including Facebook Live, YouTube, Instagram, Twitch or any Custom RTMP Streaming Destination.</p>
         <p className='mt-10 font-bold'>More Questions?</p>
         <p className='mt-2 font-light text-sm'>Have a look at Extra Live <span className=' text-purple-600 cursor-pointer hover:underline'>Knowledge base</span> for frequently asked questions. <span className=' text-purple-600 hover:underline cursor-pointer'>Email</span> or <span className=' text-purple-600 cursor-pointer hover:underline'>chat</span>  with us live to know anything!</p>
      </div>
      <div className='col-span-full mt-5 md:col-span-1'>
        <center className='border bg-purple-600 rounded-xl min-h-[280px]'>
          <div className=''>
            <h1 className='text-white mt-5 font-bold'>CAN'T FIND A SUITABLE <br />ANSWER? </h1>
            <p className='text-white mt-3'>Ask our Support team</p>
            <div className='flex flex-col w-[80%] md:[70%]'>
            <button className='border rounded-xl px-8 py-2 transparent mt-5 text-white  font-bold'>Knowledge Base</button>
            <button className='border rounded-xl px-8 py-2 transparent mt-5 text-white font-bold' >Email Us</button>
            </div>
          </div>
        </center>

      </div>
     </div>

    </div>
  )
}

export default Faq;
