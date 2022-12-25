import React, { useEffect } from 'react'
import styles from '../styles/Checkout.module.css'
import Link from 'next/link';
import { useItemStore } from '../utils/store';

const Checkout = () => {
    const basketItems = useItemStore((state) => state.basketItems)
    const menuItems = useItemStore((state) => state.menuItems)
    useEffect(() => {
        // Would usually call API to get basket item IDs and quantity,
        // which would then be used to find names and prices from menu.
        // For the purposes of this test, I will get them from my state storage
    }, [])

  return (
    <div className={styles.component_wrapper}>
        <Link href="/">Home</Link>
        {basketItems.map((basketItem, index : number) => {
            const quantity = basketItem.quantity
            const item = menuItems.find((menuItem) => menuItem.id === basketItem.id)
            return (
                <div key={index}>
                    <span>{item?.name}</span>
                    <span>{item?.price}</span>
                    <span>Qty: {quantity}</span>
                </div>
            )
        })}
    </div>
  )
}

export default Checkout