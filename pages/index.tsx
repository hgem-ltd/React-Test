import styles from '../styles/Menu.module.css'
import menuData from '../menu.json' 
import { useEffect } from 'react'
import type { MenuItem } from '../types/types';

export default function Menu() {
  const menu = menuData;
  useEffect(() => {
    // Simulates an API data fetch

  }, [])
  return (
    <div className={styles.wrapper}>
      <span>Menu</span>
      {menu.map((item : MenuItem, index : number) => {
        return (
        <div key={index}>
          <span>{item.name}</span>
          <span>£{item.price}</span>
          <span>{item.vegetarian? 'Veg' : ''}</span>
        </div>
        )
      })}
    </div>
  )
}
