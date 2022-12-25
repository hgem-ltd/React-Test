import styles from '../styles/Menu.module.css'
import menuData from '../menu.json' 
import Link from 'next/link';
import { useEffect } from 'react'
import type { MenuItem } from '../types/types';
import { useItemStore } from '../utils/store';
import type { ItemStore } from '../utils/store';
export default function Menu() {
  const menuItems = useItemStore((state : ItemStore) => state.menuItems)
  const setMenuItems = useItemStore((state : ItemStore) => state.setMenuItems)
  useEffect(() => {
    // Simulates an API data fetch 
    const fetchData = menuData;
    setMenuItems(fetchData)
  }, [])
  return (
    <div className={styles.component_wrapper}>

      <div className={styles.menu_basket_wrapper}>
        <span className={styles.menu_title}>Menu</span>
        <Link href="/checkout" className={styles.basket_link}>Basket</Link>
      </div>

      <div className={styles.menu_wrapper}>
        {menuItems.map((item : MenuItem, index : number) => {
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
