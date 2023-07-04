import { createContext } from "react";

const BasketContext = createContext({
    items: [],
    total: 0,
    remove: (id) => {},
    add: (item) => {}
})

export default BasketContext
