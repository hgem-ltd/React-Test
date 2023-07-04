import React from "react"
import FoodMenuItem from "../FoodMenuItem/FoodMenuItem"
import styles from './FoodMenu.module.scss'

interface MenuProps {
    id: string,
    name: string,
    price: number,
    vegetarian: boolean
}

const FoodMenu: React.FC<{items: MenuProps[]}> = (props) => {
    return (
        <>
            <h1 className='page__title'>Menu</h1>
            <ul className={`menu ${styles['list--menu']}`}>
                {props.items.map(item => <FoodMenuItem key={item.id} item={item}/>)}
            </ul>
            {props.items.length < 1 && <p>No menu items loaded. Please try refreshing the page.</p>}
        </>
    )
}

export default FoodMenu;