import React from 'react'
import LeftHero from './LeftHero'
import RightHero from './RightHero'

export default function HeroSection() {
  return (
    <div className='bd-bottom'>
        <div className='flex w-100vh h-[100%] lg:h-100vh py-4 flex-col max-w-[1350px] m-auto gap-4'>
          <div className='flex justify-center w-full lg:justify-end lg:pr-10 2xl:pr-0'>
            <div className='relative '>
              <h5 className='p5-semiBold sm:p3-semiBold md:h6-semiBold italic lg:header-text'>Igniting a Revolution in HR Innovation</h5>
              <span className='absolute bottom-0 right-0 h-[12px] w-[35%] lg:w-full mt-4 flex justify-center lg:justify-end'>
                <svg xmlns="http://www.w3.org/2000/svg" width="255" height="17" viewBox="0 0 255 17" fill="none">
                  <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5"/>
                </svg>
              </span>
            </div>
          </div>
          
          <div className='flex flex-col lg:flex-row gap-4 justify-between w-full h-full'>
            <div className='flex-1'>
              <LeftHero/>
            </div>
            <div className='flex-1'>
              <RightHero/>
            </div>
          </div>

        </div>
    </div>
    
  )
}
