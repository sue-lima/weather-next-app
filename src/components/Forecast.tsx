import styles from '../app/page.module.css'
import { forecastType } from '../types/index'
import Image from 'next/image'
import moon from '../assets/waxingGibbous.png'
import sunrise from '../assets/sunrise.png'
import sunset from '../assets/sunset.png'
import sun from '../assets/sun.png'
import sunny from '../assets/sunny.png'
import { FaWind, FaCloudRain , FaMoon, FaSun, FaTemperatureHigh, FaArrowUp, FaArrowDown} from 'react-icons/fa'
import { ImLocation2, ImDroplet } from 'react-icons/im'

interface ForecastProps {
  data: forecastType
}

export function Forecast({ data }: ForecastProps) {
  var threedays = data.days.slice(2, 5);
  var weekly = data.days.slice(2);
  var today = data.days[0].hours

  return(
    <section className={styles.secTemp}>
      <div className={styles.app}>
        <div className={styles.containerLeft}>
            <div className={styles.location}>
              <ImLocation2 />
              <span>{data.resolvedAddress}</span>
            </div>
            <div className={styles.temp}>
              <div className={styles.degrees}>
                <h1>{data.currentConditions.temp.toFixed()}°C</h1>
                <p><FaTemperatureHigh /> {data.currentConditions.feelslike.toFixed()}°C</p>
              </div>
              <div className={styles.conditions}>
                <Image src={sun} alt='Forecast Image' width={65} height={65}/>
                <p>{data.currentConditions.conditions}</p>
              </div>
            </div>
            <div className={styles.statist}>
              <div className={styles.info}>
                <FaWind size={20}/>
                <div>
                  <p>Wind</p>
                  <p>{data.currentConditions.windspeed}<span> kph</span></p>
                </div>
              </div>
              <div className={styles.info}>
                <ImDroplet size={20}/>
                <div>
                  <p>Humidity</p>
                  <p>{data.currentConditions.humidity.toFixed()} <span>%</span></p>
                </div>
              </div>
              <div className={styles.info}>
                <FaCloudRain size={20}/>
                <div>
                  <p>Rain</p>
                  <p>{data.currentConditions.precip} <span>mm</span></p>
                </div>
              </div>
            </div>
        </div>
          <div className={styles.containerRight}>
              <div className={styles.sunTime}>
                <div className={styles.title}>
                  <FaSun />
                  <span>Sun Time</span>
                </div>
                <div className={styles.time}>
                  <p>02:17 pm</p>
                </div>
                <div className={styles.sun}>
                  <div className={styles.sunrise}>
                    <Image src={sunrise} alt='Sunrise' width={65} height={65}/>
                    <p>{data.currentConditions.sunrise}</p>
                  </div>
                  <div className={styles.sunset}>
                    <Image src={sunset} alt='Sunset' width={65} height={65}/>
                    <p>{data.currentConditions.sunset}</p>
                  </div>
                </div>
              </div>
              <div className={styles.moonPhase}>
                <div className={styles.title}>
                  <FaMoon />
                  <span>Moon phase</span>
                </div>
                <Image src={moon} alt='MoonPhase' width={147} height={151}/>
                <p>Waxing Gibbous</p>
              </div>
              <div className={styles.forecast}>
                {threedays.map((day, index) => (
                  <div className={styles.days} key={index}>
                    <div className={styles.day}>
                      <strong>{new Date(day.datetime).toLocaleString("en-US", { weekday: 'long' })}</strong>
                      <p>{new Date(day.datetime).toLocaleString("en-US", { month: 'long', day: 'numeric' })}</p>
                      <Image src={sunny} alt='Sunset' width={65} height={65}/>
                      <p>{day.tempmax.toFixed()}° <span>{day.tempmin.toFixed()}°</span></p>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          <button>Today</button>
          <button>Week</button>
          <div className={styles.contentWeek}>
            {weekly.map((day, index) => (
              <div className={styles.days} key={index}>
                <div className={styles.day}>
                  <strong>{new Date(day.datetime).toLocaleString("en-US", { weekday: 'short' })}</strong>
                  <p>{new Date(day.datetime).toLocaleString("en-US", { month: 'short', day: 'numeric' })}</p>
                  <Image src={sunny} alt='Sunset' width={65} height={65}/>
                  <p>{day.tempmax.toFixed()}°</p>
                  <p>{day.tempmin.toFixed()}°</p>
                </div>
              </div>
            ))}
            {today.map((today, index) => (
              <div className={styles.days} key={index}>
                <div className={styles.day}>
                  <strong>{today.datetime.slice(0, 5)}</strong>
                  <Image src={sunny} alt='Sunset' width={65} height={65}/>
                  <p>{today.temp.toFixed()}°</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}