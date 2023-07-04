import { useState, useEffect } from "react"

type menu = {
    id: string,
    name: string,
    price: number,
    vegetarian: boolean
}[]

export const useMenuItems = () => {
    const [menuItems, setMenuItems] = useState<menu>([])

    const getMenuItems = () => {
        fetch("http://localhost:3030/dishes", {
            method: "GET",
            redirect: "follow",
        })
            .then((response) => response.json())
            .then((result) => setMenuItems(result))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getMenuItems()
    }, [])

    return menuItems;
}