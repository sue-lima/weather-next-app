import styles from './page.module.css'
import Image from 'next/image'
import moon from '../assets/waxingGibbous.png'
import sunrise from '../assets/sunrise.png'
import sunset from '../assets/sunset.png'
import sun from '../assets/sun.png'
import sunny from '../assets/sunny.png'
import storm from '../assets/storm.png'
import { FaSearch, FaLocationArrow, FaWind, FaPercent, FaCloudRain , FaMoon, FaSun} from 'react-icons/fa'

export default function Home() {
  return (
    <main>
      <div className={styles.bar}>
        <div className={styles.dark} title="Dark&Light mode">
          <i className={styles.toggle}></i>
        </div>
      </div>
      <div className={styles.searchBar}>
        <div className={styles.searchInput}>
          <FaSearch />
          <input type="text" placeholder='Search for a City'/>
        </div>
      </div>
      <section className={styles.secTemp}>
        <div className={styles.containerLeft}>
          <div className={styles.location}>
            <FaLocationArrow />
            <strong>São Paulo, SP</strong>
          </div>
          <div className={styles.temp}>
            <h1>21°</h1>
            <p>16° <span>9°</span></p>
          </div>
          <div className={styles.statist}>
            <div className={styles.info}>
              <FaWind />
              <p>Wind</p>
              <h5>17 <span>km/h</span></h5>
            </div>
            <div className={styles.info}>
              <FaPercent />
              <p>Precip</p>
              <h5>0 <span>%</span></h5>
            </div>
            <div className={styles.info}>
              <FaCloudRain />
              <p>Rain</p>
              <h5>17 <span>%</span></h5>
            </div>
          </div>
        </div>
        <div className={styles.containerRight}>
            <div className={styles.sunTime}>
              <div className={styles.title}>
                <FaSun />
                <strong>Sun Time</strong>
              </div>
              <div className={styles.time}>
                <p>02:17 pm</p>
              </div>
              <div className={styles.sun}>
                <div className={styles.sunrise}>
                  <Image src={sunrise} alt='Sunrise' width={65} height={65}/>
                  <p>05:45</p>
                </div>
                <div className={styles.sunset}>
                  <Image src={sunset} alt='Sunset' width={65} height={65}/>
                  <p>17:48</p>
                </div>
              </div>
            </div>
            <div className={styles.moonPhase}>
              <div className={styles.title}>
                <FaMoon />
                <strong>Moon phase</strong>
              </div>
              <Image src={moon} alt='MoonPhase' width={147} height={151}/>
              <p>Waxing Gibbous</p>
            </div>
            <div className={styles.forecast}>
              <div className={styles.days}>
                <div className={styles.day}>
                  <strong>Wednesday</strong>
                  <Image src={sunny} alt='Sunset' width={65} height={65}/>
                  <p>26° <span>21°</span></p>
                </div>
              </div>
              <div className={styles.days}>
                <div className={styles.day}>
                  <strong>Thursday</strong>
                  <Image src={sun} alt='Sunset' width={65} height={65}/>
                  <p>22° <span>18°</span></p>
                </div>
              </div>
              <div className={styles.days}>
                <div className={styles.day}>
                  <strong>Friday</strong>
                  <Image src={storm} alt='Sunset' width={65} height={65}/>
                  <p>19° <span>13°</span></p>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className={styles.weekly}>
        <div className={styles.week}>
          <div className={styles.forecast}>
              <div className={styles.days}>
                <div className={styles.day}>
                  <strong>Wednesday</strong>
                  <Image src={sunny} alt='Sunset' width={65} height={65}/>
                  <p>26° <span>21°</span></p>
                </div>
              </div>
              <div className={styles.days}>
                <div className={styles.day}>
                  <strong>Thursday</strong>
                  <Image src={sun} alt='Sunset' width={65} height={65}/>
                  <p>22° <span>18°</span></p>
                </div>
              </div>
              <div className={styles.days}>
                <div className={styles.day}>
                  <strong>Friday</strong>
                  <Image src={storm} alt='Sunset' width={65} height={65}/>
                  <p>19° <span>13°</span></p>
                </div>
              </div>
              <div className={styles.days}>
                <div className={styles.day}>
                  <strong>Saturday</strong>
                  <Image src={sunny} alt='Sunset' width={65} height={65}/>
                  <p>26° <span>21°</span></p>
                </div>
              </div>
              <div className={styles.days}>
                <div className={styles.day}>
                  <strong>Sunday</strong>
                  <Image src={sunny} alt='Sunset' width={65} height={65}/>
                  <p>26° <span>21°</span></p>
                </div>
              </div>
              <div className={styles.days}>
                <div className={styles.day}>
                  <strong>Monday</strong>
                  <Image src={storm} alt='Sunset' width={65} height={65}/>
                  <p>19° <span>13°</span></p>
                </div>
              </div>
              <div className={styles.days}>
                <div className={styles.day}>
                  <strong>Tuesday</strong>
                  <Image src={storm} alt='Sunset' width={65} height={65}/>
                  <p>19° <span>13°</span></p>
                </div>
              </div>
              <div className={styles.days}>
                <div className={styles.day}>
                  <strong>Wednesday</strong>
                  <Image src={storm} alt='Sunset' width={65} height={65}/>
                  <p>19° <span>13°</span></p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </main>
  )
}
