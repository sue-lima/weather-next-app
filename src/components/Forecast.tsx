import '../styles/forecast.css'
import { forecastType } from '../types/index'
import Image from 'next/image'
import sunrise from '../assets/sunrise.png'
import sunset from '../assets/sunset.png'
import { FaTemperatureHigh } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

interface ForecastProps {
  data: forecastType
}

export function Forecast({ data }: ForecastProps) {
  var moonPhase = data.currentConditions.moonphase
  var moonPhaseName = ''
  var moonImage = ''

  if (moonPhase == 0) {
    moonPhaseName  = 'New Moon';
    moonImage = 'newMoon'
  } else if (moonPhase > 0 && moonPhase < 0.25) {
    moonPhaseName  = 'Waxing Crescent';
    moonImage = 'waxingCrescent'
  } else if (moonPhase == 0.25) {
    moonPhaseName  = 'First Qarter';
    moonImage = 'firstQarter'
  } else if (moonPhase > 0.25 && moonPhase < 0.5) {
    moonPhaseName  = 'Waxing Gibbous';
    moonImage = 'waxingGibbous'
  } else if (moonPhase == 0.5) {
    moonPhaseName  = 'Full Moon';
    moonImage = 'fullMoon'
  } else if (moonPhase > 0.5 && moonPhase < 0.75) {
    moonPhaseName  = 'Waning Gibbous';
    moonImage = 'waningGibbous'
  } else if (moonPhase == 0.75) {
    moonPhaseName  = 'Last Qarter';
    moonImage = 'lastQarter'
  } else if (moonPhase > 0.75 && moonPhase < 1) {
    moonPhaseName  = 'Waning Crescent';
    moonImage = 'waningCrescent'
  } else {
    moonPhaseName  = 'Moon Phase not found';
  }
 
  return(
    <section className='forecastContainer'>
      <div className='location'>
        <ImLocation2 />
        <span>{data.resolvedAddress}</span>
      </div>
      
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

      <div className='moonPhase'>
        <div className='title'>
          <BsFillMoonFill />
          <span>Moon phase</span>
        </div>
        <Image src={require(`../assets/${moonImage}.png`)} alt='MoonPhase' width={147} height={151}/>
        <p>{moonPhaseName}</p>
      </div>

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
    </section>
  )
}