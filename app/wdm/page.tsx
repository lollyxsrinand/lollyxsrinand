'use client'
import gsap from 'gsap'
import { Download, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React, { useRef } from 'react'

const WdmItem = ({ text, href, downloadHref }: { text: string, href: string, downloadHref: string }) => {
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
    <div className='flex justify-center items-center gap-2.5'>
      <Link
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        href={href}
        className='relative flex justify-center items-center w-40 h-10 text-2xl'
      >
        <span ref={label_ref} className="absolute whitespace-nowrap hover:text-blue-400 transition-colors">{text}</span>
        <div
          ref={arrow_ref}
          className='absolute scale-0 h-10 w-10 rounded-full bg-white flex justify-center items-center opacity-0'
        >
          <ArrowUpRight
            className='rounded-full'
            color='#000000'
            size={24} 
          />
        </div>
      </Link>
      <a className='flex justify-center items-center h-10 w-10 rounded-full hover:text-black hover:bg-neutral-50 transition-colors' href={downloadHref} download>
        <Download size={24} />
      </a>
    </div>
  )
}

const wdmLinks = [
  { text: 'wdm week 1', driveLink: 'https://colab.research.google.com/drive/1bbau1IX8S_LQI60lwkO_t_69OQ1srImm?usp=sharing', download: '/wdm-files/wdm_week_1.ipynb' },
  { text: 'wdm week 2', driveLink: 'https://colab.research.google.com/drive/14APgyHoWsT69nozepbMrNMZSeCf9LUnl?usp=sharing', download: '/wdm-files/wdm_week_2.ipynb' },
  { text: 'wdm week 3', driveLink: 'https://colab.research.google.com/drive/14R_bgZwZrLNcYdhl374O3W6EFwd0oDpD?usp=sharing', download: '/wdm-files/wdm_week_3.ipynb' },
  { text: 'wdm week 4', driveLink: 'https://colab.research.google.com/drive/1ewfZTHrXs6ZMTkkj5nCh8S5U4uTSVy9q?usp=sharing', download: '/wdm-files/wdm_week_4.ipynb' },
  { text: 'wdm week 5', driveLink: 'https://colab.research.google.com/drive/1I_19OX0Aa_k_K6G1cwaPOqad1Sn4T8cz?usp=sharing', download: '/wdm-files/wdm_week_5.ipynb' },
]

const page = () => {
  return (
    <div className='h-screen w-full flex flex-col gap-2.5 justify-center items-center'>
      {wdmLinks.map((item, index) => (
        <WdmItem 
          key={index} 
          text={item.text} 
          href={item.driveLink} 
          downloadHref={item.download} 
        />
      ))}
    </div>
  )
}

export default page