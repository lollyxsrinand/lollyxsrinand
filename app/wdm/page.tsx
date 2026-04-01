import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
    <Link 
    className='text-neutral-100 font-bold text-2xl underline underline-offset-4'
    href="https://colab.research.google.com/drive/1JKMO69HXCYg8fnVpgdqMgNW_UsjjZCZK?usp=sharing">have fun 😉</Link>

    </div>
  )
}

export default page