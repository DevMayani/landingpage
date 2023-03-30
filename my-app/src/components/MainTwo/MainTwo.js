import React, {useState} from 'react';
import Image from '../../assets/GroupThree.png';
import Imageframe from '../../assets/Frame.png';
import ImageframeOne from '../../assets/FrameOne.png';
import ImageframeThree from '../../assets/FrameThree.png';
import ImageframeFour from '../../assets/GroupFour.png';
import ImageframeSix from '../../assets/GroupSix.png';
import ImageOne from '../../assets/One.png';
import ImageTwo from '../../assets/Two.png';
import VectorOne from '../../assets/VectorOne.png';
import ImageframeFive from '../../assets/GroupFive.png';
import ImageframeC from '../../assets/GroupC.png';
import Imagegroupone from '../../assets/Group 1 (5).png';
import Youtubee from '../../assets/GroupThen.png';
import Aaa from '../../assets/GroupA.png';
import Bee from '../../assets/Group B.png';
import Dee from '../../assets/GroupD.png';
import ball from '../../assets/ball.png';
function MainTwo () {

    const [name , setName] = useState([
        {
        id: 1,
        picture : Image,
        subName : 'SOCIAL',
        subNamestwo: 'MEDIA STREAMING',
        feedback : 'Multicast to 10+ streaming networks including Facebook Live, YouTube, Instagram, Twitter, Wowza Media Systems, Twitch & more.'
      },
      {
      id: 2,
        picture : Imageframe,
        subName : 'CLOUD STORAGE',
        subNamestwo: 'INTEGRATION',
        feedback : 'Import videos directly from any S3 or cloud storage from across the world and save your internet bandwidth - Google Drive, Dropbox, OneDrive, pCloud, Zoom & Webex recordings, Box, Frame.io, S3 Amazon, etc.'
      },
      {
        id: 3,
          picture : ImageframeOne,
          subName : 'REAL-TIME (RTMP)',
          subNamestwo: 'STREAMING',
          feedback : 'Use any streaming tool like OBS, SlingStudio, Zoom, Ecamm, Webex, Wirecast, XSplit, Vmix, etc and start multistreaming across social media.'
        },
       {
        id: 4,
            picture : ImageframeFour,
            subName : 'EMBED PLAYER',
            feedback : 'Embed live streams on your own website or anywhere you wish and reach wider audience with ease'
       },
      {
        id: 5,
            picture : ImageframeThree,
            subName : 'PLAYLIST STREAMING',
            feedback : 'Stream from a playlist'
       },
    ])
    const [newname , setNewname] = useState([

        {
            id: 1,
            picture : Image,
            cath: ImageOne,
            sub : 'SOCIAL',
            subNamestwo: 'MEDIA STREAMING',
            feedback : 'Multicast to 10+ streaming networks including Facebook Live, YouTube, Instagram, Twitter, Wowza Media Systems, Twitch & more.'
          },
          {
          id: 2,
            picture : ImageframeFive,
            cath: ImageTwo,
            sub : 'CLOUD STORAGE',
            subNamestwo: 'INTEGRATION',
            feedback : 'Import videos directly from any S3 or cloud storage from across the world and save your internet bandwidth - Google Drive, Dropbox, OneDrive, pCloud, Zoom & Webex recordings, Box, Frame.io, S3 Amazon, etc.'
          },
          {
            id: 3,
              picture : VectorOne,
              cath: Imagegroupone,
              sub : 'REAL-TIME (RTMP)',
              subNamestwo: 'STREAMING',
              feedback : 'Use any streaming tool like OBS, SlingStudio, Zoom, Ecamm, Webex, Wirecast, XSplit, Vmix, etc and start multistreaming across social media.'
            },
            
    ])

    const [lastname , setLastname] = useState([

        {
            id: 1,
            picture : Dee,
            cath: ImageOne,
            sub : 'Get Streaming Settings (RTMP)',
            feedback : 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint..'
          },
          {
          id: 2,
            picture : Bee,
            cath: ImageTwo,
            sub : 'Configure Streaming Tool',
            feedback : 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint..'
          },
          {
            id: 3,
              picture : Aaa,
              cath: Imagegroupone,
              sub : 'Start Multicasting',
              feedback : 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint..'
            },
            
    ])


  return (
    <div className='bg-slate-300 min-h-screen'>

        <div>
          <div className='p-5 flex justify-center items-center  md:p-10'>
            <p className='mt-10 text-2xl text-purple-500 md:text-4xl '>Extra.Lives Features</p>
        </div>
        </div>
        
        <div >
            <p className='font-light text-center md:text-xl '>
                Extra.Live helps you manage Streams efficienly. <br className='md:hidden'/>
                Schedule and post planning, live streaming, statictics, <br className='md:hidden'/>
                and much more. All of this will quickly help you grow your brand, potential customers and get <br className='md:hidden'/>results.
            </p>
        </div>
         

         <div className='p-10'>
         <div className='flex items-center gap-y-5 flex-col mt-[100px] m-auto cursor:pointer hover:drop-shadow-xl md:flex-row flex-wrap max-w-[80%]'>
            {
                name.map((datum) => {
                    return(
                        <div className='w-[100%] flex justify-center items-center cursor:pointer md:w-[33.333%] '>
                        <div className='border w-[250px] bg-white rounded-xl  p-5'>
                        <img src={datum.picture} alt="pic" className=' w-[50px]'  />
                        <p className='mt-[50px] uppercase'>{datum.subName}<br />
                        {datum.subNamestwo}</p>
                       <p className='mt-[15px] font-normal text-sm text-slate-500'>{datum.feedback}</p>
               </div>
            </div>
                    )
                })
            }

        </div>

        <div className='flex justify-center items-center mt-2 '>
        <button className='text-lg  border border-purple-600 px-10 py-2 mb-4 rounded-2xl text-purple-600 mt-5 transparent md:mt-10'>See more</button>
        </div>


        <div className='p-5 flex justify-center items-center  md:p-10'>
            <p className='mt-5 text-2xl text-purple-500 underline md:text-4xl'>How it works</p>
        </div>
        <div className='mt-[-10px] md:mt-[-20px]'>
            <p className='font-light text-center md:text-xl '>
            Video Live Streaming Simplified</p>
        </div>

         

        <div className=' flex justify-center items-center flex-col md:flex-row'>
        
        <div className='px-5 mt-5 md:mt-[-150px]'>
        <p className='font-semibold text-center text-purple-500 md:text-xl '>
        Pre-recorded Streaming</p>
        <img src={ImageframeSix} alt="pic" className=' mt-5  w-[500px] md:w-[450px] ml-[50px]'  />
        </div>

        <div className='w-[100%] flex items-center gap-y-5 flex-col  m-auto cursor:pointer hover:drop-shadow-xl md:flex-row flex-wrap gap-x-6 min-w-[50%]'>
        {
            newname.map((datum) => {
                return(
                    <div className='w-[100%] flex justify-center items-center cursor:pointer md:w-[40%] '>
                    <div className='border w-[250px] bg-white rounded-xl  p-5'>
                        <div className='flex justify-around items-center'>
                        <img src={datum.picture} alt="pic" className=' w-[50px]'  />
                        <img src={datum.cath} alt="pic" className=' w-[50px]'  />
                        </div>
                    <p className='mt-[50px] uppercase'>{datum.sub}<br />
                    {datum.subNamestwo}</p>
                   <p className='mt-[15px] font-normal text-sm text-slate-500'>{datum.feedback}</p>
           </div>
        </div>
                )
            })
        }
        <div className='w-[100%] flex justify-center items-center mt-2 md:w-[50%] '>
            <div>
                <button className='text-lg  bg-purple-600 px-[90px] py-1 mb-4 rounded-2xl text-white mt-5 md:px-[100px] mt-[40px]'>
            Get Started</button>
            <div className='flex justify-start items-center'>
        <img src={Youtubee} alt="pic" className=' w-[100px]'  />
            <p>Watch videos</p>
        </div>
            </div>
        
        </div>
        
        </div>
        

    </div>



    <div className=' flex justify-center items-center mt-5 flex-col md:flex-row'>
        
        

        <div className='w-[100%] flex items-center gap-y-5 flex-col  m-auto cursor:pointer hover:drop-shadow-xl md:flex-row flex-wrap gap-x-6 min-w-[50%]'>
        {
            lastname.map((datum) => {
                return(
                    <div className='w-[100%] flex justify-center items-center cursor:pointer md:w-[40%] '>
                    <div className='border w-[250px] bg-white rounded-xl  p-5'>
                        <div className='flex justify-around items-center'>
                        <img src={datum.picture} alt="pic" className=' w-[50px]'  />
                        <img src={datum.cath} alt="pic" className=' w-[50px]'  />
                        </div>
                    <p className='mt-[50px] uppercase'>{datum.sub}<br />
                    {datum.subNamestwo}</p>
                   <p className='mt-[15px] font-normal text-sm text-slate-500'>{datum.feedback}</p>
           </div>
        </div>
                )
            })
        }
        <div className='w-[100%] flex justify-center items-center mt-2 md:w-[50%] '>
            <div>
                <button className='text-lg  bg-purple-600 px-[90px] py-1 mb-4 rounded-2xl text-white mt-5 md:px-[100px] mt-[40px]'>
            Get Started</button>
            <div className='flex justify-start items-center'>
        <img src={Youtubee} alt="pic" className=' w-[100px]'  />
            <p>Watch videos</p>
        </div>
            </div>
        
        </div>
        
        </div>
        <div className='px-5 mt-5 md:mt-[-150px]'>
        <p className='font-semibold text-center text-purple-500 md:text-xl '>
        Real-time Streaming</p>
        <img src={ImageframeSix} alt="pic" className=' mt-5  w-[500px] md:w-[450px] ml-[50px]'  />
        </div>

        

    </div>

         </div>

        


    </div>
  )
}


export default MainTwo;