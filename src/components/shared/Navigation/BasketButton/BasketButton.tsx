import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BasketContext from "../../../../context/BasketContext";
import BasketIcon from "../BasketIcon/BasketIcon";
import styles from './BasketButton.module.scss';

interface Item {
    id: string,
    name: string,
    amount: number,
    price: number,
}

const BasketButton = () => {

    const basketContext = useContext(BasketContext);
    const navigate = useNavigate();

    const { items } = basketContext

    const itemsCount = items.reduce((accumulator: number, currentItem: Item) => {
        return accumulator + currentItem.amount
    }, 0)

    return (
        <button className={styles['button--basket']} onClick={() => {navigate('/basket')}}>
            <BasketIcon />
            <span className={styles['button__count']}>{itemsCount}</span>
        </button>
    )
}

export default BasketButton;