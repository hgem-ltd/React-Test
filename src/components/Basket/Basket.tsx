import { useContext } from "react"
import BasketContext from "../../context/BasketContext"
import BasketItem from "./BasketItem/BasketItem"
import styles from './Basket.module.scss'

type Item = {
    id: string,
    name: string,
    price: number,
    vegetarian: boolean,
    amount: string,
    onRemove: Function,
    onAdd: Function
}

const Basket = () => {
    const basketContext = useContext(BasketContext)

    const totalAmount = `£${basketContext.total.toFixed(2)}`

    const itemRemove = (id: string) => {
        basketContext.remove(id)
    }

    const itemAdd = (item: Item) => {
        basketContext.add({...item, amount: 1})
    }

    const basketTitles = <li>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Totals</p>
    </li>

    const basketItems = <ul>{basketTitles}{basketContext.items.map(
        (item: Item) => (
            <BasketItem
                key={item.id}
                id={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={itemRemove.bind(null, item.id)}
                onAdd={itemAdd.bind(null, item)}
                vegetarian={true}

            />
        ))}</ul>

    return (
        <>
            <h1 className='page__title'>Basket</h1>
            <div className={styles.basket}>
                {basketItems}
                <div className={styles['basket__totals']}>
                    <p>Total Amount</p>
                    <p>{totalAmount}</p>
                </div>
                <div className={styles['basket__buttons']}>
                    <button>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default Basket