'use client'

import styles from '../app/page.module.css'
import { FaSearch } from 'react-icons/fa'

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

export function Search({ handleSearch, setLocation }: InputProps) {
  return (
    <div className={styles.searchInput}>
      <FaSearch />
      <input type="text" onKeyDown={handleSearch} onChange={(e) => setLocation(e.target.value)} placeholder='Search for a City'/>
    </div>
  )
}