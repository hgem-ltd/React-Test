import styles from './BasketItem.module.scss'

type BasketItemProps = {
    id: string,
    name: string,
    price: number,
    vegetarian: boolean,
    amount: string,
    onRemove: Function,
    onAdd: Function
}

const BasketItem: React.FC<BasketItemProps> = (props) => {
    const price = `£${props.price.toFixed(2)}`
    const total = `£${props.price * parseInt(props.amount)}`

    const triggerAdd = () => {
        props.onAdd()
    }

    const triggerRemove = () => {
        props.onRemove(props.id)
    }

    return (
        <li>
            <p className="column">{props.name}{props.vegetarian? <span className='vegetarian'> V</span>: null}</p>
            <p className="column">{price}</p>
            <div className={`column ${styles['quantity-wrap']}`}>
                <button onClick={triggerRemove}>-</button>
                <p>{props.amount}</p>
                <button onClick={triggerAdd}>+</button>
            </div>
            <p className="column">{total}</p>
        </li>
    )
}

export default BasketItem;