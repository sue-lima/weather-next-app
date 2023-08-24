import '../styles/overview.css'
import { forecastType } from '../types/index'
import { ContentToday } from '../components/ContentToday'
import { ContentHourly } from '../components/ContentHourly'
import { ContentWeek } from '../components/ContentWeek'

interface OverviewProps {
  data: forecastType
}

export function Overview({ data }: OverviewProps) {
  return(
    <section className='overviewContainer'>
      <ContentToday data={data}/>
      <ContentHourly data={data}/>
      <ContentWeek data={data}/>
    </section>
  )
}