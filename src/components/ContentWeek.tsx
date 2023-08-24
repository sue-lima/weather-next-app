import '../styles/content-week.css'
import Image from 'next/image'
import { forecastType } from '../types/index'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

interface ContentWeekProps {
  data: forecastType
}

export function ContentWeek({ data }: ContentWeekProps) {
  var weekly = data.days.slice(2)
  
  return (
    <div className='contentWeek'>
      <h2>Next days</h2>
      <Splide
      options={{
        perPage: 5,
        width: "700px",
        pagination: false,
        breakpoints: {
          1023: {
            perPage: 3,
            width: "430px",
          },
          767: {
            perPage: 2,
            width: "300px",
          },
        }
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
  )
}