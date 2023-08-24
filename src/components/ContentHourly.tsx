import '../styles/content-hourly.css'
import Image from 'next/image'
import { forecastType } from '../types/index'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

interface ContentHourlyProps {
  data: forecastType
}

export function ContentHourly({ data }: ContentHourlyProps) {
  var today = data.days[0].hours
  
  return (
    <div className='contentHourly'>
      <h2>Hourly</h2>
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
  )
}