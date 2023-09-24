import Image from 'next/image'
import attribute from '@/app/assets/home/images/key.svg'
import ButtonP from '../buttonP/ButtonP'

export default function Attributes() {
    const keys = [
        {
         title:"Innovation and Creativity",
         description:"Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
        },
        {
         title:"Functionality",
         description:"Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
        },
        {
         title:"Impact and Relevance",
         description:"Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
        },
        {
         title:"Technical Complexity",
         description:"Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
        },
        {
            title:"Adherence to Hackathon Rules",
            description:"Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
        },
    ]
  return (
    <div className='bd-bottom'>
        <div className='flex flex-col lg:flex-row gap-8 justify-between items-center py-16 px-4 max-w-5xl m-auto'>
            <div className='flex-1 flex justify-center items-center w-full h-full'>
                <Image src={attribute} alt='image'/>
            </div>
            <div className='flex-1 flex flex-col justify-center lg:items-start w-full h-full lg:ml-12'>
                <div className='flex flex-col'>
                    <h5 className="p1-semiBold lg:h5-semiBold text-gray text-center lg:text-left font-clash">Judging Criteria</h5>
                    <span className='text-primary-300 p1-semiBold lg:h5-semiBold text-center lg:text-left font-clash'>Key attributes</span>
                </div>

                <div className='flex flex-col gap-4 my-6'>
                    {
                        keys.map((data, index)=> {
                            return(
                                <div key={index} className=''>
                                    <p className="p3-regular text-primary-400 text-center lg:text-left mr-2">
                                        {data.title}:
                                        <span className="p5-regular text-gray text-center lg:text-left ml-2">{data.description}</span>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='m-auto lg:m-0'>
                    <ButtonP title='Read more' events={''}/>
                </div>
            </div>
        </div>
    </div>
  )
}
