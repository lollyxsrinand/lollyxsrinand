'use client'
import { LucideCircle, LucidePlay } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player'
import gsap from 'gsap'


const Player = () => {
    // should change this to a better way 
    // on top of my head i think can of making a /new_song accessable only by me
    // and i can just provide yt link i want, and image cover. 
    // automating it fancy shit is too much complexity
    const song_cover = '/asal.jpeg';
    const youtube_url = 'https://www.youtube.com/watch?v=62rZEdzckn0';

    const arrow_ref = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            setRotation((prev) => (prev + 1) % 360);
        }, 20);
        return () => clearInterval(interval);
    }, [isPlaying]);
    const onMouseEnter = () => {
        gsap.to(arrow_ref.current, {
            scale: 1,
            opacity: 1,
            duration: 0.2,
        })
    }
    const onMouseLeave = () => {
        gsap.to(arrow_ref.current, {
            scale: 0,
            opacity: 0,
            duration: 0.2,
        })
    }

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`h-28 w-28 md:h-48 md:w-48 rounded-2xl flex justify-center items-center gap-2.5 bg-neutral-200 flex-col absolute hover:opacity-100 ${isPlaying ? 'opacity-100' : ''} opacity-0 transition-all duration-300`}>
            {/* <div ref={arrow_ref} className='absolute top-0 right-0 scale-0 h-10 w-10 rounded-full bg-black flex justify-center items-center shadow-2xl opacity-0'>
                <ArrowUpRight color='white' size={32} />
            </div> */}
            <div className="hidden">
                <ReactPlayer
                    src={youtube_url}
                    playing={isPlaying}
                    width="0"
                    height="0"
                    volume={0.5} // cuz i don wanna blast your dums
                    config={{
                        youtube: {
                            origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://lollyxsrinand.vercel.app',
                        }
                    }}
                />
            </div>

            <div onClick={() => setIsPlaying(!isPlaying)} className="flex justify-center items-center cursor-pointer" style={{ transform: `rotate(${rotation}deg)` }} >

                {isPlaying
                    ? <LucideCircle fill='#ffffff' className='absolute z-20 text-white pointer-events-none md:h-4 md:w-4 h-2 w-2' />
                    : <LucidePlay fill='#ffffff' className='text-white absolute z-20 pointer-events-none h-3 w-3 md:h-6 md:w-6' />
                }

                <Image className="rounded-full select-none h-14 w-14 md:h-24 md:w-24" src={song_cover} width={100} height={100} alt="album art" priority />
            </div>
            <p className='font-extralight text-black text-xl select-none'>outside</p>
        </div>
    );
}

export default Player;