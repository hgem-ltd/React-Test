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
    <div className={styles.component_wrapper}>
        <span className={styles.menu_title}>Menu</span>
      <div className={styles.menu_wrapper}>
        {menu.map((item : MenuItem, index : number) => {
          return (
          <div className={styles.item_wrapper} key={index}>
            <span className={styles.item_name}>{item.name}</span>
            {item.vegetarian && <span className={styles.item_veg}>Vegetarian</span>}  
            <span className={styles.item_price}>£{item.price}</span>
            <button className={styles.item_add}>Add to basket</button>
          </div>
          )
        })}
      </div>
    </div>
  )
}
