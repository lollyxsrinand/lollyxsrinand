import React from 'react'
import Player from './Player'

const Listen = () => {
    return (
    <div className="flex justify-center items-center w-28 h-28 md:w-52 md:h-52 rounded-2xl bg-neutral-200 text-black md:font-extralight text-2xl md:text-4xl">
        <h1 className='absolute'>i listen</h1>
        <Player />
    </div>
    )
}

export default Listen