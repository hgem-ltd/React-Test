import React, { useContext } from "react"
import MealForm from "../MealForm/MealForm"
import BasketContext from "../../../context/BasketContext"
import styles from './FoodMenuItem.module.scss'

interface Item {
    id: string,
    name: string,
    price: number,
    vegetarian: boolean
}

const FoodMenuItem: React.FC<{item: Item}> = (props) => {
    const basketContext = useContext(BasketContext);
    const price = `£${props.item.price.toFixed(2)}`;

    const addToCart = (amount: number) => {
        basketContext.add({
            id: props.item.id,
            name: props.item.name,
            amount: amount,
            price: props.item.price
        })
    }

    return (
        <div className={styles['menu-item']}>
            <div className={styles['menu-item__details']}>
                <p className={styles['menu-item__name']}>
                    {props.item.name}
                    <span className='vegetarian'>{(props.item.vegetarian)? ' V' : null}</span>
                </p>
                
                <p className={styles['menu-item__price']}>{price}</p>
            </div>
            <MealForm mealId={props.item.id} onAdd={addToCart} />
        </div>
    )
}

export default FoodMenuItem;