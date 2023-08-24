export type forecastType = {
  resolvedAddress: string
  days: [
    {
      datetime: string
      tempmax: number
      tempmin: number
      icon: string
      hours: [
        {
          datetime: string
          icon: string
          temp: number
        }
      ]
    }
  ]
  currentConditions: {
    temp: number
    feelslike: number
    precip: number
    windspeed: number
    humidity: number
    conditions: string
    icon: string
    sunrise: string
    sunset: string
    moonphase: number
    pressure: number
  }
}