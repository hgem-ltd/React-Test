import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles['header__text']}>
            <Link to='/'><h1>YourRestaurant</h1></Link>
            <Navigation />
        </header>
    )
}

export default Header;