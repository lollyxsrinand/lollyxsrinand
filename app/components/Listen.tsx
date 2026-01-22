import React from 'react'
import Player from './Player'

const Listen = () => {
    return (
    <div className="flex justify-center items-center w-52 h-52 rounded-2xl bg-neutral-200 text-black font-extralight text-4xl">
        <h1 className='absolute'>i listen</h1>
        <Player />
    </div>
    )
}

export default Listen