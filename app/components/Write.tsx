'use client'
import gsap from 'gsap'
import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'

const Write = () => {
    const label_ref = useRef(null)
    const arrow_ref = useRef(null)
    const onMouseEnter = () => {
        gsap.to(label_ref.current, {
            scale: 0,
            filter: 'blur(4px)',
            opacity: 0,
            duration: 0.2,
        })
        gsap.to(arrow_ref.current, {
            scale: 1,
            filter: 'blur(0px)',
            opacity: 1,
            duration: 0.2,
        })
    }
    const onMouseLeave = () => {
        gsap.to(label_ref.current, {
            scale: 1,
            filter: 'blur(0px)',
            opacity: 1,
            duration: 0.2,
        })
        gsap.to(arrow_ref.current, {
            scale: 0,
            filter: 'blur(10px)',
            opacity: 0,
            duration: 0.2,
        })
    }
    return (
        <a href="/iwrite"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="relative flex gap-2 justify-center items-center w-28 h-28 md:w-52 md:h-52 rounded-2xl bg-neutral-200 text-black md:font-extralight text-2xl md:text-4xl cursor-pointer">

            <h1 ref={label_ref}>i write</h1>
            <div
                ref={arrow_ref}
                className='absolute scale-0 h-10 w-10 rounded-full bg-black flex justify-center items-center opacity-0'>

                <ArrowUpRight
                    className='bg-black rounded-full'
                    color='#ffffff'
                    size={32} />
            </div>
        </a>
    )
}

export default Write