import React from 'react'
import line from '@/app/assets/home/images/line.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='bg-footer p-4 w-full h-full mt-8 lg:mt-4'>

      <div className='grid footer max-w-5xl m-auto p-8 lg:p-4 gap-10 w-full h-full'>

        <div className='flex flex-col flex-1 justify-between items-start gap-16 w-full h-full'>

            <div className='flex flex-col items-start'>

              <p className="p1-semiBold lg:h6-semiBold font-clash text-gray"> get <span className='text-primary-300'>linked</span></p>

              <span className='p6-regular text-gray w-[80%]'>Getlinked Tech Hackathon is a technology innovation program 
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

        <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-full align-start gap-4'>

          <div className='flex-1 flex gap-4 flex-col justify-start items-start w-full h-full'>

            <p className='p3-semiBold text-primary-300'>Useful Links</p>

            <div className='flex flex-col gap-4'>

              <Link href='#overview' className="p6-regular text-gray">Overview</Link>
              <Link href='#timeline' className="p6-regular text-gray">Timeline</Link>
              <Link href='#faqs' className="p6-regular text-gray">FAQs</Link>
              <Link href='/contact' className="p6-regular text-gray">Contact</Link>
              <Link href='/register' className="p6-regular text-gray"></Link>

            </div>

            <div className='flex gap-2'>

                <span className='p6-regular text-primary-300'>Follow Us</span>

                <Image src={''} alt='icon'/>
                <Image src={''} alt='icon'/>
                <Image src={''} alt='icon'/>
              
            </div>
          </div>

          <div className='flex-1 flex gap-4 flex-col justify-start items-start h-full w-full'>
            <p className='p3-semiBold text-primary-300'>Contact US</p>

            <div className='flex flex-col gap-4'>

              <p className='flex p6-regular gap-2 items-start'><Image src={""} alt="icon"/> +234 6707653444</p>

              <p className='flex p6-regular gap-2 items-start'><Image src={""} alt="icon"/> 27,Alara Street
                Yaba 100012
                Lagos State
              </p>

            </div>

          </div>

        </div>

      </div>
        
    </div>
  )
}
