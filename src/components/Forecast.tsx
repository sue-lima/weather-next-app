import '../styles/forecast.css'
import { forecastType } from '../types/index'
import { Location } from '../components/Location'
import { Weather } from '../components/Weather'
import { MoonPhase } from '../components/MoonPhase'
import { SunTime } from '../components/SunTime'

interface ForecastProps {
  data: forecastType
}

export function Forecast({ data }: ForecastProps) {
  return(
    <section className='forecastContainer'>
      <Location data={data}/>
      <Weather data={data}/>
      <MoonPhase data={data}/>
      <SunTime data={data}/>
    </section>
  )
}