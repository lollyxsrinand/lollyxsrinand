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
      opacity: 0,
      duration: 0.2,
    })
    gsap.to(arrow_ref.current, {
      scale: 1,
      opacity: 1,
      duration: 0.2,
    })
  }
  const onMouseLeave = () => {
    gsap.to(label_ref.current, {
      scale: 1,
      opacity: 1,
      duration: 0.2,
    })
    gsap.to(arrow_ref.current, {
      scale: 0,
      opacity: 0,
      duration: 0.2,
    })
  }
  return (
  <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={() => window.location.pathname = "/icode"} className="relative flex gap-2 justify-center items-center w-52 h-52 rounded-2xl bg-neutral-200 text-black font-extralight text-4xl cursor-pointer">
    <h1 ref={label_ref}>i code</h1>
    <div ref={arrow_ref} className='absolute scale-0 h-10 w-10 rounded-full bg-black flex justify-center items-center shadow-2xl opacity-0'>
      <ArrowUpRight color='white' size={32} />
    </div>
  </div>
  )
}

export default Write