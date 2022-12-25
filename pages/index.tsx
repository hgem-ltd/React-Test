import styles from '../styles/Menu.module.css'
import menuData from '../menu.json' 
import Link from 'next/link';
import { useEffect } from 'react'
import type { MenuItem } from '../types/types';
import { useItemStore } from '../utils/store';
import type { ItemStore } from '../utils/store';

export default function Menu() {
  const menuItems = useItemStore((state) => state.menuItems)
  const setMenuItems = useItemStore((state) => state.setMenuItems)
  const basketItems = useItemStore((state) => state.basketItems)
  const setBasketItems = useItemStore((state) => state.setBasketItems)

  useEffect(() => {
    // Simulates an API data fetch 
    const fetchData = menuData;
    setMenuItems(fetchData)
  }, [])

  const addToBasket = (itemID : string) => {
    // Normally would send a POST request with item ID to API
    // Only ID will be saved in the basket. The original menu will be the only source of truth
    // for prices and names, because they might change
    
    // Determines whether item is already in basket, usually back-end logic
    if(basketItems.find((item) => item.id === itemID) === undefined) {
      // If not found
      setBasketItems([...basketItems, {"id": itemID, "quantity": 1}]) 
      return
    }
    // If already exists
    setBasketItems([...basketItems.map((item) => {
      if(item.id === itemID) {
        return {...item, quantity: item.quantity + 1}
      }
      return item
    })])
  }
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
            <button onClick={() => addToBasket(item.id)} className={styles.item_add}>Add to basket</button>
          </div>
          )
        })}
      </div>

    </div>
  )
}
