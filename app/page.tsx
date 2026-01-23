import React from 'react'

import Clock from './components/Clock'
import Listen from './components/Listen'
import Write from './components/Write'
import Code  from './components/Code'
import Type from './components/Type'
import Cook from './components/Cook'

const Home = async () => {

  return (
    <div className="flex flex-col p-2.5 gap-5">
      <div className='w-full flex justify-between items-center'>
        <div className='flex flex-col gap-2.5'>
          <h1 className='h-fit text-center text-3xl md:text-4xl font-extralight text-black bg-neutral-100 p-2.5 rounded-2xl'>i{`'`}m srinand ツ</h1>
          <p className="font-extralight">give up on your dreams and die.</p>
        </div>
        <Clock />
      </div>

      <div className='w-full flex flex-col gap-2.5'>

        <div className='flex gap-2.5'>
          <Write />
          <Code />
          <Listen />
        </div>

        <div className='flex gap-2.5'>
          <Cook />
          <Type />
        </div>

      </div>

    </div>
  )
}

export default Home

//62  
// rip spotify man
// const token = '';
// async function fetchWebApi(endpoint: string, method: string) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//   });
//   return await res.json();
// }
// console.log((await fetchWebApi('v1/me/player', 'GET')));