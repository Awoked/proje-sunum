import { Expo, gsap } from 'gsap';
import React, { useEffect } from 'react'

const Cards = ({ title, content, activeSlide, centered, listContent }) => {


    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(".content h2",
            {
                opacity: 0,
                y: 60
            },
            {
                opacity: 1,
                y: 0,
                duration: .6
            }
        )
        tl.fromTo(".content p",
            {
                x: "-100%",
            },
            {
                x: 0,
                duration: 1,
                ease: Expo.easeInOut
            }

        )

        tl.fromTo(".content ul",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: .5
            }
        )

    }, [activeSlide]);

    return (
        <div className='flex gap-24 text-white h-full items-center'>

            <div className={`content flex flex-col gap-5 w-full md:w-2/3 ${centered && "!w-full text-center"}`}>
                <div className='overflow-hidden py-2'>
                    <h2 className='text-4xl font-bold'>
                        {title}
                    </h2>
                </div>
                <div className='overflow-hidden py-1'>
                    <p className='text-xl font-medium leading-relaxed'>
                        {content}
                    </p>
                    {
                        listContent &&
                        <ul className='py-2'>
                            {
                                listContent.map((data, index) => (
                                    <li>
                                        {
                                            data.linkUrl ?
                                                <a href={data.linkUrl} target='_blank' className='transition-all duration-300 hover:text-violet-700'>{data.title}</a>
                                                :
                                                data.title
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    }
                </div>
            </div>

        </div>
    )
}

export default Cards