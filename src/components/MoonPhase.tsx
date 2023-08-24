import '../styles/moon-phase.css'
import { forecastType } from '../types/index'
import Image from 'next/image'
import { BsFillMoonFill } from 'react-icons/bs'

interface MoonPhaseProps {
  data: forecastType
}

export function MoonPhase({ data }: MoonPhaseProps) {
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
    moonPhaseName  = 'First Qarter';
    moonImage = 'firstQarter'
  } else if (moonPhase > 0.25 && moonPhase < 0.5) {
    moonPhaseName  = 'Waxing Gibbous';
    moonImage = 'waxingGibbous'
  } else if (moonPhase == 0.5) {
    moonPhaseName  = 'Full Moon';
    moonImage = 'fullMoon'
  } else if (moonPhase > 0.5 && moonPhase < 0.75) {
    moonPhaseName  = 'Waning Gibbous';
    moonImage = 'waningGibbous'
  } else if (moonPhase == 0.75) {
    moonPhaseName  = 'Last Qarter';
    moonImage = 'lastQarter'
  } else if (moonPhase > 0.75 && moonPhase < 1) {
    moonPhaseName  = 'Waning Crescent';
    moonImage = 'waningCrescent'
  } else {
    moonPhaseName  = 'Moon Phase not found';
  }
  
  return (
    <div className='moonPhase'>
      <div className='title'>
        <BsFillMoonFill />
        <span>Moon phase</span>
      </div>
      <Image src={require(`../assets/${moonImage}.png`)} alt='MoonPhase' width={147} height={151}/>
      <p>{moonPhaseName}</p>
    </div>
  )
}