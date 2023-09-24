import Image from 'next/image'
import man from '@/app/assets/home/images/guy.svg'

export default function RightHero() {
  return (
    <div className=''>
        <div className='relative'>
            <div className='z-10 w-full h-full'>
                <Image src={man} alt="image" className='w-full h-full opacity-[.8]'/>
            </div>
        </div>
    </div>
  )
}