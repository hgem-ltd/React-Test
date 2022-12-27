import React from 'react'
import type { MenuItem } from '../types/types'
import styles from '../styles/Menu.module.css'
import { useItemStore } from '../utils/store'
type Props = {
    item : MenuItem
} 
const MenuItemComponent = ({item} : Props) => {
  const basketItems = useItemStore((state) => state.basketItems)
  const setBasketItems = useItemStore((state) => state.setBasketItems)

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
    <div data-type="menuItem" data-id={item.id} className={styles.item_wrapper}>
        <span className={styles.item_name} title={item.name}>{item.name}</span>
        {item.vegetarian && <span title="Vegetarian dish" className={styles.item_veg}>Veg</span>}
        <span className={styles.item_price}>£{item.price}</span>
        <button data-cy="addItem" onClick={() => addToBasket(item.id)} className={styles.item_add}>Add to basket</button>
    </div>
  )
}

export default MenuItemComponent