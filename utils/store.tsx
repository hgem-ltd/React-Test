import create from 'zustand'
import type { MenuItem } from '../types/types'
export type BasketItem = {
    "id": string,
    "quantity": number
}
export type ItemStore = {
    menuItems: MenuItem[] | [],
    setMenuItems : (items: MenuItem[]) => void,
    basketItems: BasketItem[] | [],
    setBasketItems: (items: BasketItem[]) => void
}
export const useItemStore = create<ItemStore>((set) => ({
    menuItems: [],
    setMenuItems: (items) => set(({menuItems: items})),
    basketItems: [],
    setBasketItems: (items) => set(({basketItems: items}))
}))