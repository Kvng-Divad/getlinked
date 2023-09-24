import lock from '@/app/assets/home/images/lock.svg'
import back from '@/app/assets/home/images/back.svg'
import mark from '@/app/assets/home/images/mark.svg'
import Image from 'next/image'

export default function Policy() {
  return (
    <div className='h-full w-full'>
        <div className='flex flex-col lg:flex-row gap-16 justify-between lg:items-center px-4 py-28 max-w-5xl m-auto gap-8'>

            <div className='flex-1 flex-col flex justify-center items-start w-full lg:w-[90%] h-full gap-8'>

                <div className='flex-1 flex flex-col justify-center lg:items-start w-full  h-full'>
                    <div className='flex flex-col '>
                        <h5 className="p1-semiBold lg:h5-semiBold text-gray text-center lg:text-left font-clash">Rules and</h5>
                        <h5 className="text-primary-300 p1-semiBold lg:h5-semiBold text-center lg:text-left font-clash -mt-2">Guidelines</h5>

                        <span className='p5-regular text-gray/75 text-center lg:text-left mt-4'>                        
                            Last updated on September 12, 2023
                        </span>
                    </div>


                    <p className="p5-regular text-gray text-center lg:text-left mt-6">
                        Below are our privacy & policy, which outline a lot of goodies. 
                        it’s our aim to always take of our participant
                    </p>
                </div>

                <div className='my-12 bd-all p-6 lg:p-12 w-full lg:w-90%'>

                    <p className='p5-regular text-gray text-center lg:text-left'>
                        At getlinked tech Hackathon 1.0, we value your privacy
                        and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, disclose, 
                        and safeguard your data when you participate in our tech 
                        hackathon event. By participating in our event, you consent 
                        to the practices described in this policy.
                    </p>


                    <p className="p3-semiBold text-primary-300 text-center lg:text-left font-clash mt-8">Licensing Policy</p>
                    <p className="text-gray p5-semiBold text-center lg:text-left font-clash -mt-2">Here are terms of our Standard License:</p>

                    <div className='mt-8'>
                        <div className='flex gap-4 items-start'>
                            <Image src={mark} alt='image'/>
                            <p className='p5-regular text-gray'>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                        </div>

                        <div className='flex gap-4 items-start mt-8'>
                            <Image src={mark} alt='image'/>
                            <p className='p5-regular text-gray '>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className='flex-1 w-full h-full flex justify-center lg:justify-start items-center'>
                <div className='relative lg:-mt-44 lg:ml-8'>
                    <Image src={back} alt='image'/>
                    <div className='absolute top-28 right-4 lg:top-44 lg:right-8 w-[100%] h-[100%]'>
                        <Image src={lock} alt='image' className=''/>   
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
