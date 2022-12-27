import styles from '../styles/Menu.module.css'
import menuData from '../menu.json' 
import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react'
import type { MenuItem } from '../types/types';
import { BasketItem, useItemStore } from '../utils/store';
import type { ItemStore } from '../utils/store';
import MenuItemComponent from '../components/MenuItemComponent';

export default function Menu() {
  const menuItems = useItemStore((state) => state.menuItems)
  const setMenuItems = useItemStore((state) => state.setMenuItems)
  const basketItems = useItemStore((state) => state.basketItems)

  useEffect(() => {
    // Simulates an API data fetch #
    console.log(menuItems)
    const fetchData = menuData;
    setMenuItems(fetchData)
  }, [])
 
  const totalBasketItems = () => {
    // Could use Array.reduce too, but I prefer this for simplicity
    let total = 0;
    basketItems.forEach((item) => total += item.quantity)
    return total
  } 
  return (
    <div className={styles.component_wrapper}>
        <title>Menu</title>

        <nav className={styles.nav_wrapper}>
          <span className={styles.menu_title}>Menu</span>
          <Link data-cy="basketLink" href="/checkout" className={styles.basket_link}>
            <span>Basket</span>
            <div className={styles.basket_num_wrapper}>
              <span className={styles.basket_num} data-cy="cartCounter">{totalBasketItems()}</span>
            </div>
          </Link>
        </nav>

        <span className={styles.legend}><span className={styles.legend_veg}>Veg</span> - Vegetarian</span>
        
        <div className={styles.menu_wrapper}>
          {menuItems?.map((item : MenuItem, index : number) => (
            <MenuItemComponent item={item} index={index} />
          ))}
        </div>

    </div>
  )
}
