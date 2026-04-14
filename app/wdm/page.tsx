import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full flex flex-col gap-2.5 justify-center items-center'>
      <div className='flex justify-center items-center gap-2.5'>
        <Link
          className='hover:text-blue-400 transition-colors text-2xl'
          href="https://colab.research.google.com/drive/1bbau1IX8S_LQI60lwkO_t_69OQ1srImm?usp=sharing">wdm week 1</Link>
        <a className='p-1 rounded-full hover:text-black hover:bg-neutral-50 transition-colors' href="/wdm-files/wdm_week_1.ipynb" download>
          <Download size={24} />
        </a>
      </div>
      <div className='flex justify-center items-center gap-2.5'>
        <Link
          className='hover:text-blue-400 transition-colors text-2xl'
          href="https://colab.research.google.com/drive/14APgyHoWsT69nozepbMrNMZSeCf9LUnl?usp=sharing">wdm week 2</Link>
        <a className='p-1 rounded-full hover:text-black hover:bg-neutral-50 transition-colors' href="/wdm-files/wdm_week_2.ipynb" download>
          <Download size={24} />
        </a>
      </div>
      <div className='flex justify-center items-center gap-2.5'>
        <Link
          className='hover:text-blue-400 transition-colors text-2xl'
          href="https://colab.research.google.com/drive/14R_bgZwZrLNcYdhl374O3W6EFwd0oDpD?usp=sharing">wdm week 3</Link>
        <a className='p-1 rounded-full hover:text-black hover:bg-neutral-50 transition-colors' href="/wdm-files/wdm_week_3.ipynb" download>
          <Download size={24} />
        </a>
      </div>
      <div className='flex justify-center items-center gap-2.5'>
        <Link
          className='hover:text-blue-400 transition-colors text-2xl'
          href="https://colab.research.google.com/drive/1ewfZTHrXs6ZMTkkj5nCh8S5U4uTSVy9q?usp=sharing">wdm week 4</Link>
        <a className='p-1 rounded-full hover:text-black hover:bg-neutral-50 transition-colors' href="/wdm-files/wdm_week_4.ipynb" download>
          <Download size={24} />
        </a>
      </div>
      <div className='flex justify-center items-center gap-2.5'>
        <Link
          className='hover:text-blue-400 transition-colors text-2xl'
          href="https://colab.research.google.com/drive/1I_19OX0Aa_k_K6G1cwaPOqad1Sn4T8cz?usp=sharing">wdm week 5</Link>
        <a className='p-1 rounded-full hover:text-black hover:bg-neutral-50 transition-colors' href="/wdm-files/wdm_week_5.ipynb" download>
          <Download size={24} />
        </a>
      </div>
    </div>
  )
}

export default page