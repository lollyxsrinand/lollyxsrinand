'use client'

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [currentLyric, setCurrentLyric] = useState('hi i am srinand')
  const [isPlaying, setIsPlaying] = useState(false)
  const lyricsData = [
    { time: 0, text: "hi im srinand" },
    { time: 3, text: "yo bois" },
    { time: 4.5, text: "i am sing song" },
    { time: 9, text: "soup 🫕 song" },
    { time: 13, text: "flop song" },

    { time: 19.7, text: "why this kolaveri" },
    { time: 21.5, text: "kolaveri" },
    { time: 22.3, text: "kolaveri kolaveri" },
    { time: 23.3, text: "kolaveri kolaveri di" },

    { time: 26.5, text: "why 🧐 this kolaveri" },
    { time: 28.3, text: "kolaveri" },
    { time: 29.2, text: "kolaveri kolaveri" },
    { time: 30, text: "kolaveri kolaveri di" },

    { time: 32, text: "rhythm correct ✅" },
    { time: 33, text: "why this kolaveri" },
    { time: 35, text: "kolaveri" },
    { time: 36.2, text: "kolaveri kolaveri" },
    { time: 36.8, text: "kolaveri kolaveri di" },

    { time: 38.5, text: "maintain" },
    { time: 39, text: "maintain pls 🙏" },

    { time: 40.5, text: "why this kolaveri" },
    { time: 43.5, text: "ah di" },

    { time: 47.5, text: "distance-u la" },
    { time: 49, text: "moon-u" },
    { time: 49.7, text: "moon-u moon-u" },

    {time: 51, text: "moon-u" },
    {time: 51.4, text: "color-u" },
    {time: 52.4, text: "white-u" },

    {time: 54.5, text: "white-u background" },
    {time: 55.9, text: "night-u" },
    {time: 56.7, text: "night-u night-u" },

    {time: 58.0, text: "night-u color" },
    {time: 59.3, text: "black-u" },

    {time: 60+1, text: "why this kolaveri" },
    {time: 60+2.5, text: "kolaveri" },
    {time: 60+3.3, text: "kolaveri x2" },
    {time: 60+4.3, text: "kolaveri di" },

    {time: 60+8, text: "why this kolaveri" },
    {time: 60+9.5, text: "kolaveri" },
    {time: 60+10.3, text: "kolaveri x2" },
    {time: 60+11.3, text: "kolaveri di" },

    {time: 60+14.7, text: "white-u skin-u" },
    {time: 60+16, text: "girl-u girl-u" },
    {time: 60+18, text: "girl-u hart-u" },
    {time: 60+19.5, text: "black-u" },

    {time: 60+22, text: "eyes eyes-u" },
    {time: 60+23.5, text: "meet-u" },
    {time: 60+24.5, text: "meet-u x2" },

    {time: 60+25.3, text: "my futur dark-u" },
    {time: 60+27.0, text: "my futur dark-uu" },
    {time: 60+27.2, text: "my futur dark-uuu" },
    {time: 60+27.5, text: "my futur dark-uuuu" },
    {time: 60+27.8, text: "my futur dark-uuuuu" },
    {time: 60+28.0, text: "my futur dark-uuuuuu" },
    {time: 60+28.3, text: "my futur dark-uuuuuuu" },

    {time: 60+28.7, text: "why" },
    {time: 60+29.0, text: "why dis" },
    {time: 60+29.3, text: "why dis kolaveri" },
    {time: 60+30.1, text: "why dis kolaveri kolaveri" },
    {time: 60+31, text: "why dis kolaveri kolaveri kolaveri" },
    {time: 60+31.9, text: "why dis kolaveri kolaveri kolaveri di" },

    {time: 60+35, text: "why" },
    {time: 60+35.4, text: "why dis" },
    {time: 60+35.6, text: "why dis kolaveri" },
    {time: 60+36.4, text: "why dis kolaveri kolaveri" },
    {time: 60+37.3, text: "why dis kolaveri kolaveri kolaveri" },
    {time: 60+38.2, text: "why dis kolaveri kolaveri kolaveri di" },


    {time: 60+42, text: "mama"},
    {time: 60+43.1, text: "mama notes eduthuko"},

    {time: 60+44.0, text: "appadiye kaila snacks eduthuko"},

    {time: 60+45.3, text: "pa"},
    {time: 60+45.8, text: "pa pa..."},
    {time: 60+46.2, text: "pa pa... pa"},
    {time: 60+46.6, text: "pa pa... pa pa"},

    {time: 60+47, text: "pa x1"},
    {time: 60+47.5, text: "pa x2"},
    {time: 60+48.1, text: "pa x3"},
    {time: 60+48.4, text: "pa x4"},

    {time: 60+48.8, text: "pa"},
    {time: 60+49.2, text: "pa pa..."},
    {time: 60+49.5, text: "pa pa... pa"},
    {time: 60+49.8, text: "pa pa... pa pa"},
    {time: 60+50.2, text: "pa pa... pa pa pa"},
    {time: 60+50.5, text: "pa pa... pa pa pa pa"},
    {time: 60+50.8, text: "pa pa... pa pa pa pa pa"},

    {time: 60+51.2, text: "siriya vaasi"},

    {time: 60+59, text: "heh"},
    {time: 60+59.2, text: "heh heh"},
    {time: 60+59.4, text: "heh heh heh"},
    {time: 60+59.6, text: "heh heh heh heh"},
    {time: 60+59.8, text: "heh heh heh heh heh"},

    {time: 120 + 0.6, text:'super mama ready'},
    {time: 120 + 1.8, text:'ready 1'},
    {time: 120 + 3, text:'ready 1 two'},
    {time: 120 + 4.4, text:'ready 1 two 3'},
    {time: 120 + 5.5, text:'ready 1 two 3 four'},
    {time: 120 + 6, texl:''},

    {time: 120 + 11.5, text:'MMMM?'},
    {time: 120 + 11.9, text:''},
    {time: 120 + 12.3, text:'MMMMMM?'},
    {time: 120 + 12.8, text:''},

    {time: 120 + 15.7, text:'aaaaaa...'},
    {time: 120 + 16.2, text:''},

    {time: 120 + 19, text:'??'},
    {time: 120 + 19.5, text:''},
    
    {time: 120 + 30.8, text:'whaa'},
    {time: 120 + 30.9, text:''},

    {time: 120 + 31.2, text:'what a change over mama'},

    {time: 120 + 33.5, text:'ok mama'},
    {time: 120 + 35.1, text:'now tune change-u'},
    {time: 120 + 36.3, text:''},

    {time: 120 + 40.6, text:'kaila glass-u'},
    {time: 120 + 42.5, text:'only inglis-u'},
    {time: 120 + 43.8, text:''},

    {time: 120 + 47.6, text:'hand la glass-u'},
    {time: 120 + 49.2, text:'glass la scotch-u'},
    {time: 120 + 51.0, text:'eyes a full a'},
    {time: 120 + 52.4, text:'😭😭😭'},
    {time: 120 + 53.2, text:''},

    {time: 120 + 54.4, text:'empty life-u'},
    {time: 120 + 56.1, text:'girl come-u'},

    {time: 120 + 58.0, text:'life-u reverse-u'},
    {time: 120 + 59.2, text:'GEAR-U'},
    {time: 120 + 59.9, text:''},

    {time: 180 + .7, text:'love-u'},
    {time: 180 + 1.6, text:'love-u love-u'},

    {time: 180 + 2.6, text:'oh'},
    {time: 180 + 3.1, text:' my'},
    {time: 180 + 3.5, text:'<3'},

    {time: 180 + 4.7, text:'u showed me'},
    {time: 180 + 5.7, text:'boww-u'},

    {time: 180 + 7.8, text:'coww-u'},
    {time: 180 + 8.4, text:'coww-u coww-u'},

    {time: 180 + 9.7, text:'holy'},
    {time: 180 + 10.2, text:'holy coww-u'},

    {time: 180 + 11.5, text:'i want you u here noww-u'},

    {time: 180 + 15.1, text:'god-u'},
    {time: 180 + 15.5, text:'i amm dyingg noww-u'},

    {time: 180 + 18.4, text:'shes happi noww-u'},

    {time: 180 + 21.8, text:'thiss-u'},
    {time: 180 + 22.5, text:'thiss-u song-u'},
    {time: 180 + 23.2, text:'thiss-u song-u for'},
    {time: 180 + 23.7, text:'thiss-u song-u for soup'},
    {time: 180 + 24.3, text:'thiss-u song-u for soup boys-u'},

    {time: 180 + 25.4, text:'we dont have choice-u'},

    {time: 180 + 28.5, text:'y dis'},
    {time: 180 + 29.3, text:'kolaveri x1'},
    {time: 180 + 30.3, text:'kolaveri x2'},
    {time: 180 + 30.3, text:'kolaveri x2'},
    {time: 180 + 31.0, text:'kolaveri x3'},
    {time: 180 + 32.0, text:'kolaveri x3 di'},

    {time: 180 + 32.3, text:'kolaveri x3 dii'},
    {time: 180 + 32.6, text:'kolaveri x3 diii'},
    {time: 180 + 32.9, text:'kolaveri x3 diiii'},
    {time: 180 + 33.2, text:'kolaveri x3 diiiii'},
    {time: 180 + 33.5, text:'kolaveri x3 diiiiii'},
    {time: 180 + 33.8, text:'kolaveri x3 diiiiiii'},
    {time: 180 + 34.1, text:'kolaveri x3 diiiiiiii'},
    {time: 180 + 34.4, text:'kolaveri x3 diiiiiiiii'},
    {time: 180 + 34.7, text:'kolaveri x3 diiiiiiiiii'},
    {time: 180 + 35.0, text:'kolaveri x3 diiiiiiiiiii'},

    {time: 180 + 35.4, text:'y dis kolaveri'},
    {time: 180 + 37.2, text:'y dis kolaveri kolaveri'},
    {time: 180 + 38.1, text:'y dis kolaveri kolaveri kolaveri'},
    {time: 180 + 38.8, text:'y dis kolaveri kolaveri kolaveri di'},

  ]
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = 0
    const tryPlay = () => {
      audio.play().then(() => {
        setIsPlaying(true)
      }).catch(() => {
        document.body.addEventListener(
          'click',
          () => {
            audio.play()
            setIsPlaying(true)
          },
          { once: true }
        )
      })
    }

    tryPlay()

    const updateLyrics = () => {
      const current = audio.currentTime
      for (let i = lyricsData.length - 1; i >= 0; i--) {
        if (current >= lyricsData[i].time) {
          setCurrentLyric(lyricsData[i].text)
          break
        }
      }
    }

    audio.addEventListener('timeupdate', updateLyrics)

    const handleEnded = () => setIsPlaying(false)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateLyrics)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])
  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-4">
      <h1 className="text-3xl mb-4">{currentLyric}</h1>
      <button className="px-4 py-2 bg-white text-black rounded" onClick={togglePlay} >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <audio ref={audioRef} src="/why-this-kolaveri-di.mp3" />
    </div>
  )
}
