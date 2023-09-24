import prizes from '@/app/assets/home/images/prizes.svg'
import Image from 'next/image'
import PrizeCards from './PrizeCards'

export default function Prizes() {
  return (
    <div>
        <div className='bd-bottom'>
            <div className='flex flex-col lg:flex-row gap-8 justify-between items-center px-4 py-16 max-w-5xl m-auto'>

                <div className='flex-1 flex justify-center items-center w-full h-full'>
                    <Image src={prizes} alt='image'/>
                </div>

                <div className='flex-1 flex-col flex  justify-center items w-full h-full'>
                    <div className='m-auto w-full lg:w-[70%]'>

                        <div className='flex flex-col'>
                                <h5 className="p1-semiBold lg:h5-semiBold text-gray text-center lg:text-left font-clash">Prizes and </h5>
                                <h5 className="text-primary-300 p1-semiBold lg:h5-semiBold text-center lg:text-left font-clash -mt-2">Rewards</h5>
                        </div>

                        <p className="p5-regular text-gray text-center lg:text-left">
                                Highlight of the prizes or rewards for winners and
                                for participants.
                        </p>
                    </div>

                    <div className='my-6'>
                        <PrizeCards/>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}
