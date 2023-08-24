import '../styles/location.css'
import { forecastType } from '../types/index'
import { ImLocation2 } from 'react-icons/im'

interface LocationProps {
  data: forecastType
}

export function Location({ data }: LocationProps) {
  return (
    <div className='location'>
      <ImLocation2 />
      <span>{data.resolvedAddress}</span>
    </div>
  )
}