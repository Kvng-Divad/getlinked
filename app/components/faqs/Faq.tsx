import faq from '@/app/assets/home/images/faq.svg'
import { PlusIcon} from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Faq() {
    const accordion = [
        {
         description:"Can I work on a project I started before the hackathon? ",
        },
        {
         description:"What happens if I need help during the hackathon?",
        },
        {
         description:"What happens if I don't have an idea for a project?"
        },
        {
         description:"Can I join a team or do I have to come with one?"
        },
        {
         description:"What happens after the hackathon ends"
        },
        {
         description:"Can I work on a project I started before the hackathon?"
        },
    ]
  return (
    <div className='bd-bottom'>
        <div className='flex flex-col lg:flex-row gap-8 justify-between items-center px-4 py-16 max-w-5xl m-auto'>
            <div className='flex-1 flex flex-col justify-center lg:items-start w-full h-full'>
                <div className='flex flex-col'>
                    <h5 className="p1-semiBold lg:h5-semiBold text-gray text-center lg:text-left font-clash">Frequently Ask</h5>
                    <span className="text-primary-300 p1-semiBold lg:h5-semiBold text-center lg:text-left font-clash">Questions</span>
                </div>

                <div className='my-2'>
                    <p className="p5-regular text-gray text-center lg:text-left">
                        We got answers to the questions that you might
                    </p>

                    <p className="p5-regular text-gray text-center lg:text-left">
                        want to ask about getlinked Hackathon 1.0
                    </p>
                </div>

                <div className='my-8'>
                    {
                        accordion.map((data, index)=> {
                            return(
                                <div className='w-full bd-bottom2' key={index}>
                                    <div className='flex justify-between items-center my-4 gap-4' >
                                        <span className='text-gray p5-regular'>{data.description}</span>
                                        <PlusIcon className='text-primary-300 w-[16px] h-[16px]'/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
                
            </div>
            <div className='flex-1 flex justify-center items-center w-full h-full'>
                <Image src={faq} alt='image'/>
            </div>
        </div>
    </div>
  )
}
