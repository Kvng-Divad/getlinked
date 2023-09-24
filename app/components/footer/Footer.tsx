import React from 'react'
import line from '@/app/assets/home/images/line.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='bg-footer p-4 w-full h-full'>

      <div className='flex justify-between max-w-5xl m-auto p-8'>

        <div className='flex flex-col flex-1 justify-between items-start gap-16'>

            <div className='flex flex-col'>

              <p className="p1-semiBold lg:h6-semiBold font-clash text-gray"> get <span className='text-primary-300'>linked</span></p>

              <span className='p3-regular text-gray'>Getlinked Tech Hackathon is a technology innovation program 
                established by a group of organizations with the aim of showcasing 
                young and talented individuals in the field of technology
              </span>

            </div>
            
            <div className='flex gap-4'>
              <span className='p6-regular text-gray'>Terms of Use </span>
              <Image src={line} alt='line'/>
              <span className='p6-regular text-gray'>Privacy Policy</span>
            </div>

        </div>

        <div className='flex-1 flex gap-4 flex-col justify-center items-start'>
            <p className='p1-semiBold text-primary-300'></p>

            <div className='flex flex-col gap-4'>

              <Link href='#overview' className="p3-regular text-gray">Overview</Link>
              <Link href='#timeline' className="p3-regular text-gray">timeline</Link>
              <Link href='#faqs' className="p3-regular text-gray">FAQs</Link>
              <Link href='/contact' className="p3-regular text-gray">Contact</Link>
              <Link href='/register' className="p3-regular text-gray"></Link>

            </div>

            <div className='flex gap-4'>
           
                <span className='p3-regular text-primary-300'>Follow Us</span>

                <Image src={''} alt='icon'/>
                <Image src={''} alt='icon'/>
                <Image src={''} alt='icon'/>
              
            </div>
        </div>

        <div className=''>

        </div>
      </div>
        
    </div>
  )
}
