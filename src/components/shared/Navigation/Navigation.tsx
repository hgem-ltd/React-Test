import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import BasketButton from "./BasketButton/BasketButton";

const Navigation = () => {
    return (
        <nav className={styles['nav--main']}>
            <ul >
                <li>
                    <NavLink to="/">Menu</NavLink>
                </li>
                <li>
                    <BasketButton />
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;