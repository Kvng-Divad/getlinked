import Image from 'next/image'
import rules from '@/app/assets/home/images/rules.svg'

export default function Rules() {
  return (
    <div className='bd-bottom'>
        <div className='flex flex-col lg:flex-row gap-8 justify-between items-center px-4 py-16 max-w-5xl m-auto'>
            <div className='flex-1 flex flex-col justify-center lg:items-start w-full h-full'>
                <div className='flex flex-col'>
                    <h5 className="p1-semiBold lg:h5-semiBold text-gray text-center lg:text-left font-clash">Rules and</h5>
                    <h5 className="text-primary-300 p1-semiBold lg:h5-semiBold text-center lg:text-left font-clash -mt-2">Guidelines</h5>
                </div>


                <p className="p5-regular text-gray text-center lg:text-left">
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you&apos;re a coding genius, a 
                    design maverick, or a concept wizard, you&apos;ll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that&apos;s what we&apos;re all about!
                </p>
            </div>
            <div className='flex-1 flex justify-center items-center w-full h-full'>
                <Image src={rules} alt='image'/>
            </div>
        </div>
    </div>
 
  )
}
