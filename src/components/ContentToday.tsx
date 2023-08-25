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
            <p>Wind: </p>
            <span>{data.currentConditions.windspeed} kph</span>
          </div>
        </div>
        <div className='info'>
          <ImDroplet size={30}/>
          <div className='info-content'>
            <p>Humidity: </p>
            <span>{data.currentConditions.humidity.toFixed()} %</span>
          </div>
        </div>
        <div className='info'>
            <FaCloudRain size={30}/>
            <div className='info-content'>
              <p>Rain: </p>
              <span>{data.currentConditions.precip} mm</span>
            </div>
        </div>
        <div className='info'>
          <IoMdTimer size={30}/>
          <div className='info-content'>
            <p>Pressure:</p>
            <span>{data.currentConditions.pressure.toFixed()} mb</span>
          </div>
        </div>
      </div>
    </div>
  )
}