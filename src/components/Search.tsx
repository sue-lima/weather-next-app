'use client'

import '../styles/search.css'
import { FaSearch } from 'react-icons/fa'

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

export function Search({ handleSearch, setLocation }: InputProps) {
  return (
    <div className='searchBar'>
      <div className='searchInput'>
        <FaSearch />
        <input type="text" onKeyDown={handleSearch} onChange={(e) => setLocation(e.target.value.toLowerCase())} placeholder='Search for a City'/>
      </div>
    </div>
  )
}