import Image from 'next/image'
import bulb from '@/app/assets/home/icons/bulb.svg'
import chain from '@/app/assets/home/icons/chain.svg'
import fire from '@/app/assets/home/icons/fire.svg'
import ButtonP from '../buttonP/ButtonP'

export default function LeftHero() {
  return (
    <div className='p-6 py-8 lg:py-12 flex flex-col justify-center m-auto lg:m-0 gap-4'> 

        <div className='flex flex-col'>
            <p className='h5-semiBold m-auto lg:m-0 md:h3-semiBold xl:h2-semiBold 2xl:h1-semiBold font-clash text-gray relative'>
                getlinked Tech
                <span className='absolute -top-4 md:-top-6 xl:-top-8 right-2 md:right-4 lg:right-[25%] xl:right-[18%] 2xl:right-[9%]'>
                    <Image src={bulb} alt='icon' className='h-8 w-8 md:h-12 md:w-12 xl:w-14 xl:h-16'/>
                </span>
            </p>
            <p className='h5-semiBold m-auto lg:m-0 md:h3-semiBold xl:h2-semiBold 2xl:h1-semiBold font-clash text-gray flex items-center'>
                    Hackathon  
                <span className='text-primary-300'>1.0</span>
                <Image src={chain} alt='icon' className='w-8 h-8 md:w-12 md:h-12 ml-2 xl:w-20 xl:h-20' />
                <Image src={fire} alt='icon' className='w-8 h-8 md:w-12 md:h-12 xl:w-14 xl:h-14 '/>
            </p>
        </div>

        <div>
            <p className='text-gray p6-regular lg:p1-regular text-center lg:text-left'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
        </div>

        <div className='m-auto lg:m-0'>
            <ButtonP title='Register' events={''}/>
        </div>

        <div className='flex items-center gap-x-4 m-auto lg:m-0 '>
            <p className='h3-regular lg:hero-regular font-unica text-gray'>
                00
                <span className='p5-regular font-mons text-gray'>H</span>
            </p>

            <p className='h3-regular lg:hero-regular font-unica text-gray'>
                00
                <span className='p5-regular font-mons text-gray'>M</span>
            </p>

            <p className='h3-regular lg:hero-regular font-unica text-gray'>
                00
                <span className='p5-regular font-mons text-gray'>s</span>
            </p>
        </div>

    </div>
  )
}
