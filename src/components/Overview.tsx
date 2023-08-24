import '../styles/overview.css'
import Image from 'next/image'
import { forecastType } from '../types/index'
import { FaWind, FaCloudRain , FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { ImDroplet } from 'react-icons/im'
import { IoMdTimer } from 'react-icons/io'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

interface OverviewProps {
  data: forecastType
}

export function Overview({ data }: OverviewProps) {
  var today = data.days[0].hours
  var weekly = data.days.slice(2)

  return(
    <section className='overviewContainer'>
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

      <div className='contentHourly'>
        <h2>Hourly</h2>
        <Splide
        options={{
          perPage: 5,
          width: "700px",
        }}>
          {today.map((today, index) => (
            <SplideSlide key={index}>
              <div className='toggleDays'>
                <strong>{today.datetime.slice(0, 5)}</strong>
                <Image src={require(`../assets/${today.icon}.png`)} alt='Sunset' width={65} height={65} />
                <p>{today.temp.toFixed()}°</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className='contentWeek'>
        <h2>Next days</h2>
        <Splide
        options={{
          perPage: 5,
          width: "700px",
        }}>
          {weekly.map((day, index) => (
            <SplideSlide key={index}>
              <div className='toggleDays'>
                <strong>{new Date(day.datetime).toLocaleString("en-US", { weekday: 'short' })} | <span>{new Date(day.datetime).toLocaleString("en-US", { month: 'short', day: 'numeric' })}</span></strong>
                <Image src={require(`../assets/${day.icon}.png`)} alt='Sunset' width={65} height={65} />
                <p><FaArrowUp className='arrowUp' />{day.tempmax.toFixed()}° <span><FaArrowDown className='arrowDown' />{day.tempmin.toFixed()}°</span></p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}