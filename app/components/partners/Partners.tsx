import liberty from '@/app/assets/home/images/liberty.svg'
import liberti from '@/app/assets/home/images/liberti.svg'
import wisper from '@/app/assets/home/images/wisper.svg'
import visual from '@/app/assets/home/images/vizual.svg'
import paybox from '@/app/assets/home/images/paybox.svg'
import winwise from '@/app/assets/home/images/winwise.svg'
import Image from 'next/image'

export default function Partners() {
  return (
    <div>
        <div className='bd-bottom'>
            <div className='px-4 py-16 max-w-5xl m-auto'>

                <div className='flex flex-col items-center ' >
                    <h5 className="p1-semiBold lg:h5-semiBold text-gray text-center font-clash">Partners and Sponsors </h5>
                    
                    <p className="p5-regular text-gray text-center">
                        Getlinked Hackathon 1.0 is honored to have the following major 
                        companies as its partners and sponsors
                    </p>

                </div>

                <div className='bd-all py-12 px-20 md:px-28 lg:py-24 lg:px-48 my-16 gap-6 sm:max-w-lg md:max-w-2xl lg:max-w-5xl m-auto'>

                    <div className='flex justify-around gap-4 mx-auto'>

                        <div className='relative bd-bottom3 pb-4 lg:pb-6 pt-2 px-4 lg:px-12'>
                            <div className='flex-justify-center items-center w-8 h-8 sm:w-12 h-12 md:w-16 h-16 lg:w-32 lg:h-32'>
                                <Image src={liberty} alt='image'className='m-auto w-full h-full'/>
                            </div>
                        </div>
                        <div className='line'></div>

                        <div className='relative bd-bottom3 pb-4 lg:pb-6 pt-2 px-4 lg:px-12'>
                            <div className='flex-justify-center items-center w-8 h-8 sm:w-12 h-12 md:w-16 h-16 lg:w-32 lg:h-32'>
                                <Image src={liberti} alt='image'className='m-auto w-full h-full'/>
                            </div>
                        </div>
                        <div className='line'></div>

                        <div className='relative bd-bottom3 pb-4 lg:pb-6 pt-2 px-4 lg:px-12'>
                            <div className='flex-justify-center items-center w-8 h-8 sm:w-12 h-12 md:w-16 h-16 lg:w-32 lg:h-32'>
                                <Image src={winwise} alt='image'className='m-auto w-full h-full'/>
                            </div>
                        </div>
                        

                    </div>

                    <div className='flex justify-around gap-4 mx-auto'>

                        <div className='relative pt-2 lg:pt-6 pb-2 px-4 lg:px-12'>
                            <div className='flex-justify-center items-center w-8 h-8 sm:w-12 h-12 md:w-16 md:h-16 lg:w-32 lg:h-32'>
                                <Image src={wisper} alt='image'className='m-auto w-full h-full'/>
                            </div>
                        </div>
                        <div className='line2 mt-4'></div>

                        <div className='relative pt-2 lg:pt-6 pb-2 px-4 lg:px-12'>
                            <div className='flex-justify-center items-center w-8 h-8 sm:w-12 h-12 md:w-16 md:h-16 lg:w-32 lg:h-32'>
                                <Image src={paybox} alt='image'className='m-auto w-full h-full'/>
                            </div>
                        </div>
                        <div className='line2 mt-4'></div>

                        <div className='relative pt-2 lg:pt-6 pb-2 px-4 lg:px-12'>
                            <div className='flex-justify-center items-center w-8 h-8 sm:w-12 h-12 md:w-16 md:h-16 lg:w-32 lg:h-32'>
                                <Image src={visual} alt='image'className='m-auto w-full h-full'/>
                            </div>
                        </div>
                        

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}
