import { useReducer } from "react";
import BasketContext from "./BasketContext";
import BasketReducer from './BasketReducer'

const defaultBasket = {
    total: 0,
    items: []
}

const BasketProvider = props => {
    const [basketState, dispatch] = useReducer(BasketReducer, defaultBasket)

    const addItemToBasket = meal => {
        dispatch({type: 'ADD', meal: meal})
    }
    const removeItemFromBasket = id => {
        dispatch({type: 'REMOVE', id: id})
    }

    const basketContext = {
        total: basketState.total,
        items: basketState.items,
        add: addItemToBasket,
        remove: removeItemFromBasket
    }

    return (
        <BasketContext.Provider value={basketContext}>
            {props.children}
        </BasketContext.Provider>
    )
};

export default BasketProvider