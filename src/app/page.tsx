'use client'

import styles from './page.module.css'
import axios from 'axios'
import { useState } from 'react';
import { forecastType } from '../types/index'
import { DarkMode } from '../components/DarkMode'
import { Search } from '../components/Search'
import { Forecast } from '../components/Forecast'
import { Overview } from '../components/Overview'
import { Attribution }from '../components/Attribution'
import { ThemeProvider } from 'next-themes'

export default function Home() {
  require('dotenv').config();
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

  var content;
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
        <Forecast data={data} />
        <Overview data={data} />
      </>
    );
  }

  return (
    <ThemeProvider>
      <header>
        <Search handleSearch={handleSearch} setLocation={setLocation} />
        <DarkMode />
      </header>
      <main>
        {content}
      </main>
      <footer>
        <Attribution />
      </footer>
    </ThemeProvider>
  )
}