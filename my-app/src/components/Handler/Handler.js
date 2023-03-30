import React from 'react'
import Instagram from '../../assets/Instagram.png';
import Twitter from '../../assets/Twitter.png';
import LinkedIn from '../../assets/Linkedin.png';
import Facebook from '../../assets/Facebook.png';
import Codepen from '../../assets/Codepen.png';
import Deviant from '../../assets/deviantArt.png';
import Github from '../../assets/GitHub.png';
import Itch from '../../assets/Itch.io.png';
import Kofil from '../../assets/ko-fii.png';
import Wattpadd from '../../assets/Wattpadd.png';
import Soundcloud from '../../assets/Soundcloud.png';
import Musescore from '../../assets/Musescore.png';
import YouTubee from '../../assets/YouTubee.png';




function Handler () {
  return (
        <div className='min-w-[75%] bg-white border rounded-xl min-h-[5%] m-auto flex justify-center items-center md:h-[90px] top-[94%] left-[13%]  absolute '>
            <div className='flex justify-center items-center gap-x-0 md:gap-x-4'>
          <img src={Instagram} alt="pic" className='w-[20px] md:w-[50px]' />
          <img src={Twitter} alt="pic" className='w-[20px] md:w-[50px]' />
          <img src={LinkedIn} alt="pic" className='w-[20px] md:w-[50px]' />
          <img src={Facebook} alt="pic" className='w-[20px] md:w-[50px]' />
          <img src={Wattpadd } alt="pic" className='w-[20px] md:w-[50px]' />
          <img src={Deviant} alt="pic" className='w-[20px] md:w-[50px]' />
          <img src={Soundcloud} alt="pic" className='w-[20px] md:w-[50px]' />
          <img src={Musescore} alt="pic" className='w-[20px] md:w-[50px]' />
          <img src={Itch} alt="pic" className='w-[20px] md:w-[50px]' />
          <img src={Codepen} alt="pic" className='w-[20px] md:w-[50px]' />
          <img src={YouTubee} alt="pic" className='w-[20px] md:w-[50px]' />
          <img src={Github} alt="pic" className='w-[20px] md:w-[50px]' />
          <img src={Kofil} alt="pic" className='w-[20px] md:w-[50px]' />
         
          </div>
        </div>
  )
}


export default Handler;