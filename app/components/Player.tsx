'use client'
import { LucideCircle, LucidePlay } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'


const Player = () => {
    const song_cover = '/asal.jpeg';
    const youtube_url = 'https://www.youtube.com/watch?v=62rZEdzckn0'; 
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            setRotation((prev) => (prev + 1) % 360);
        }, 20);
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <div className={`h-48 w-48 rounded-2xl flex justify-center items-center gap-2.5 bg-neutral-200 flex-col absolute hover:opacity-100 ${isPlaying ? 'opacity-100':''} opacity-0 transition-all duration-300`}>
            
            <div className="hidden">
                <ReactPlayer 
                    src={youtube_url}
                    playing={isPlaying}
                    width="0"
                    height="0"
                    volume={0.5}
                    config={{
                        youtube: {
                            origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://lollyxsrinand.vercel.app',
                        }
                    }}
                />
            </div>

            <div onClick={() => setIsPlaying(!isPlaying)} className="flex justify-center items-center cursor-pointer" style={{ transform: `rotate(${rotation}deg)` }} >

                {isPlaying ? (
                    <LucideCircle fill='#ffffff' size={24} className='absolute z-20 text-white pointer-events-none' />
                ) : (
                    <LucidePlay fill='#ffffff' size={32} className='text-white absolute z-20 pointer-events-none' />
                )}

                <Image className="rounded-full select-none" src={song_cover} width={100} height={100} alt="album art" priority />
            </div>
            <p className='font-extralight text-black text-xl select-none'>outside</p>
        </div>
    );
}

export default Player;