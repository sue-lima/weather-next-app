import styles from '../app/page.module.css'
import { forecastType } from '../types/index'
import Image from 'next/image'
import sunrise from '../assets/sunrise.png'
import sunset from '../assets/sunset.png'
import { FaWind, FaCloudRain , FaMoon, FaSun, FaTemperatureHigh, FaArrowUp, FaArrowDown} from 'react-icons/fa'
import { ImLocation2, ImDroplet } from 'react-icons/im'
import { useState } from 'react'

interface ForecastProps {
  data: forecastType
}

export function Forecast({ data }: ForecastProps) {
  var threedays = data.days.slice(2, 5);
  var weekly = data.days.slice(2)
  var today = data.days[0].hours

  const [dayShow, setDayShow] = useState(true);
 
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
    moonPhaseName  = 'First Quarter';
    moonImage = 'firstQater'
  } else if (moonPhase > 0.25 && moonPhase < 0.5) {
    moonPhaseName  = 'Waxing Gibbous';
    moonImage = 'waxingCrescent'
  } else if (moonPhase == 0.5) {
    moonPhaseName  = 'Full Moon';
    moonImage = 'waxingCrescent'
  } else if (moonPhase > 0.5 && moonPhase < 0.75) {
    moonPhaseName  = 'Waning Gibbous';
    moonImage = 'waxingCrescent'
  } else if (moonPhase == 0.75) {
    moonPhaseName  = 'Last Quarter';
    moonImage = 'waxingCrescent'
  } else if (moonPhase > 0.75 && moonPhase < 1) {
    moonPhaseName  = 'Waning Crescent';
    moonImage = 'waxingCrescent'
  } else {
    moonPhaseName  = 'Moon Phase not found';
  }
 
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
                <Image src={require(`../assets/${data.currentConditions.icon}.png`)} alt='Forecast Image' width={65} height={65}/>
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
                <Image src={require(`../assets/${moonImage}.png`)} alt='MoonPhase' width={147} height={151}/>
                <p>{moonPhaseName}</p>
              </div>
              <div className={styles.forecast}>
                {threedays.map((day, index) => (
                  <div className={styles.days} key={index}>
                    <div className={styles.day}>
                      <strong>{new Date(day.datetime).toLocaleString("en-US", { weekday: 'long' })}</strong>
                      <p>{new Date(day.datetime).toLocaleString("en-US", { month: 'long', day: 'numeric' })}</p>
                      <Image src={require(`../assets/${day.icon}.png`)} alt='Sunset' width={65} height={65}/>
                      <p><FaArrowUp />{day.tempmax.toFixed()}° <span><FaArrowDown />{day.tempmin.toFixed()}°</span></p>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          <div className={styles.buttons}>
            <button onClick={() => setDayShow(true)} className={styles.buttonToday}>Today</button>
            <button onClick={() => setDayShow(false)} className={styles.buttonWeek}>Week</button>
          </div>
          {dayShow ? 
          (<div className={styles.contentWeek}>
            {today.map((today, index) => (
              <div className={styles.toggleDays} key={index}>
                <div className={styles.toggleDays}>
                  <strong>{today.datetime.slice(0, 5)}</strong>
                  <Image src={require(`../assets/${today.icon}.png`)} alt='Sunset' width={65} height={65}/>
                  <p>{today.temp.toFixed()}°</p>
                </div>
              </div>
            ))}
          </div>) :
          (<div className={styles.contentWeek}>
            {weekly.map((day, index) => (
              <div className={styles.toggleDays} key={index}>
                <div className={styles.toggleDays}>
                  <strong>{new Date(day.datetime).toLocaleString("en-US", { weekday: 'short' })} - <span>{new Date(day.datetime).toLocaleString("en-US", { month: 'short', day: 'numeric' })}</span></strong>
                  <Image src={require(`../assets/${day.icon}.png`)} alt='Sunset' width={65} height={65}/>
                  <p><FaArrowUp />{day.tempmax.toFixed()}°</p>
                  <p><FaArrowDown />{day.tempmin.toFixed()}°</p>
                </div>
              </div>
            ))}
          </div>)}
      </div>
    </section>
  )
}