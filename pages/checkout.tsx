import React, { useEffect } from 'react'
import styles from '../styles/Checkout.module.css'
import Link from 'next/link';
import { useItemStore } from '../utils/store';

const Checkout = () => {
    const basketItems = useItemStore((state) => state.basketItems)
    const setBasketItems = useItemStore((state) => state.setBasketItems)
    const menuItems = useItemStore((state) => state.menuItems)
    useEffect(() => {
        // Would usually call API to get basket item IDs and quantity,
        // which would then be used to find names and prices from menu.
        // For the purposes of this test, I will get them from my state storage
    }, [])
    const calcTotal = () => {
        if(basketItems.length === 0) return 0
        const prices = basketItems.map((item) => {
            const price = menuItems.find((menuItem) => menuItem.id === item.id)?.price
            if(price) {
                return price*item.quantity
            }      
            return
        })
        const total = prices.reduce((sum, curr) => {
            if(sum && curr) {
                return sum + curr
            }
        })
        return total
    }
    const increaseQty = (itemID: string) => {
        setBasketItems([...basketItems.map((item) => {
            if(item.id === itemID) {
                return {...item, quantity: item.quantity + 1}
            }
            return item
        })])
    }
    const decreaseQty = (itemID: string, qty: number) => {
        if (qty > 1) {
            setBasketItems([...basketItems.map((item) => {
                if(item.id === itemID) {
                    return {...item, quantity: item.quantity - 1}
                }
                return item
            })])
        } else {
            setBasketItems([...basketItems.filter((item) => item.id !== itemID)])
        }
        
    }

  return (
    <div className={styles.component_wrapper}>
        <Link href="/">Home</Link>
        {basketItems.map((basketItem, index : number) => {
            const quantity = basketItem.quantity
            const item = menuItems.find((menuItem) => menuItem.id === basketItem.id)
            return (
                <div key={index}>
                    <span>{item?.name}</span>
                    <span>£{item?.price}</span>
                    <button onClick={() => decreaseQty(basketItem.id, basketItem.quantity)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => increaseQty(basketItem.id)}>+</button>
                </div>
            )
        })}
        <span>Total: £{calcTotal()}</span>
    </div>
  )
}

export default Checkout