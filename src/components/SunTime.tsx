import '../styles/sun-time.css'
import { forecastType } from '../types/index'
import Image from 'next/image'
import sunrise from '../assets/sunrise.png'
import sunset from '../assets/sunset.png'
import { BsFillSunFill } from 'react-icons/bs'

interface SunTimeProps {
  data: forecastType
}

export function SunTime({ data }: SunTimeProps) {
  return (
    <div className='sunTime'>
      <div className='title'>
        <BsFillSunFill />
        <span>Sun Time</span>
      </div>
      <div className='sun'>
        <div className='sunrise'>
          <span>Sunrise</span>
          <Image src={sunrise} alt='Sunrise' width={80} height={80}/>
          <p>{data.currentConditions.sunrise}</p>
        </div>
        <div className='sunset'>
          <span>Sunset</span>
          <Image src={sunset} alt='Sunset' width={80} height={80}/>
          <p>{data.currentConditions.sunset}</p>
        </div>
      </div>
    </div>
  )
}