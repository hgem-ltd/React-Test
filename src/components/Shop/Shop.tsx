import React from "react"
import FoodMenu from "./FoodMenu/FoodMenu"
import { useMenuItems } from "../../hooks/useMenuItems"

const Shop: React.FC = () => {
    
    const menuItems = useMenuItems();

    return (
        <div>
            <FoodMenu items={menuItems}/>
        </div>
    )
}

export default Shop;