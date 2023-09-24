import Image from 'next/image'
import idea from '@/app/assets/home/images/idea.svg'

export default function Intro() {
  return (
    <div className='bd-bottom'>
        <div className='flex flex-col lg:flex-row gap-8 justify-between items-center py-16 px-4 max-w-5xl m-auto'>
            <div className='flex-1 flex justify-center items-center w-full h-full'>
                <Image src={idea} alt='image'/>
            </div>
            <div className='flex-1 flex flex-col justify-center lg:items-start w-full h-full lg:ml-12'>
                <div className='flex flex-col'>
                    <h5 className="p1-semiBold lg:h5-semiBold text-gray text-center lg:text-left font-clash">Introduction to getlinked</h5>
                    <span className="text-primary-300 p1-semiBold lg:h5-semiBold text-center lg:text-left font-clash">tech Hackathon 1.0</span>
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
        </div>
    </div>
    
  )
}
