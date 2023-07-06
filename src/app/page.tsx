'use client'

import styles from './page.module.css'
import { Search } from '../components/Search'
import { Forecast } from '../components/Forecast'
import axios from 'axios'
import { useState } from 'react';
import { forecastType } from '../types/index'

export default function Home() {
  const apiKey = process.env.WEATHER_API_KEY;
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState<forecastType>({} as forecastType)

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?include=fcst%2Cobs%2Chistfcst%2Cstats%2Ccurrent%2Chours&key=${apiKey}&options=beta&unitGroup=metric&contentType=json`)
      .then((res) => {
        setData(res.data)
        setLocation("")
        setError("")
      })
      .catch(error => {
        setError(error)
      });
    }
  }

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className={styles.content}>
        <h2>Welcome!</h2>
        <p>Enter a city name to get the weather forecast</p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className={styles.content}>
        <h2>City not found</h2>
        <p>Please enter a valid city name</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className={styles.content}>
          <Forecast data={data}/>
        </div>
      </>
    );
  }

  return (
    <main>
      <div className={styles.bar}>
        <div className={styles.dark} title="Dark&Light mode">
          <i className={styles.toggle}></i>
        </div>
      </div>
      <div className={styles.searchBar}>
        <Search handleSearch={handleSearch} setLocation={setLocation}/>
      </div>
      {content}
    </main>
  )
}