import '../styles/content-today.css'
import { forecastType } from '../types/index'
import { FaWind, FaCloudRain } from 'react-icons/fa'
import { ImDroplet } from 'react-icons/im'
import { IoMdTimer } from 'react-icons/io'

interface ContentTodayProps {
  data: forecastType
}

export function ContentToday({ data }: ContentTodayProps) {
  return (
    <div className='contentToday'>
      <h2>Today's Highlight</h2>
      <div className='statist'>
        <div className='info'>
          <FaWind size={30}/>
          <div className='info-content'>
            <p>Wind: <span>{data.currentConditions.windspeed} kph</span></p>
          </div>
        </div>
        <div className='info'>
          <ImDroplet size={30}/>
          <div className='info-content'>
            <p>Humidity: <span>{data.currentConditions.humidity.toFixed()} %</span></p>
          </div>
        </div>
        <div className='info'>
            <FaCloudRain size={30}/>
            <div className='info-content'>
              <p>Rain: <span>{data.currentConditions.precip} mm</span></p>
            </div>
        </div>
        <div className='info'>
          <IoMdTimer size={30}/>
          <div className='info-content'>
            <p>Pressure: <span> {data.currentConditions.pressure.toFixed()} mb</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}