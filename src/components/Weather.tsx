import '../styles/weather.css'
import { forecastType } from '../types/index'
import Image from 'next/image'
import { FaTemperatureHigh } from 'react-icons/fa'

interface WeatherProps {
  data: forecastType
}

export function Weather({ data }: WeatherProps) {
  return (
    <div className='weather'>
      <div className='degrees'>
        <h1>{data.currentConditions.temp.toFixed()}°C</h1>
        <p><FaTemperatureHigh /> {data.currentConditions.feelslike.toFixed()}°C</p>
      </div>
      <div className='conditions'>
        <Image id='img' src={require(`../assets/${data.currentConditions.icon}.png`)} alt='Forecast Image' width={65} height={65}/>
        <p>{data.currentConditions.conditions}</p>
      </div>
    </div>
  )
}