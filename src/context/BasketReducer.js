const BasketReducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            const newTotal = state.total + action.meal.price * action.meal.amount;

            const existingItemIndex = state.items.findIndex(
                item => item.id === action.meal.id
            );
            const existingItem = state.items[existingItemIndex];
            let menuItems
          
            if (existingItem) {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount + action.meal.amount,
                };
                menuItems = [...state.items];
                menuItems[existingItemIndex] = updatedItem;
            } else {
                // concat returns a new array so we don't accidentally modify state
                menuItems = state.items.concat(action.meal);
            }

            return {
                total: newTotal,
                items: menuItems
            }
        }
        case 'REMOVE': {
            const existingItemIndex = state.items.findIndex(
                item => {
                    return item.id === action.id
                }
            );

            const existingItem = state.items[existingItemIndex];
            const updatedTotal = state.total - existingItem.price

            let menuItems
            
            if (existingItem.amount === 1) {
                menuItems = state.items.filter(item => (
                    item.id !== action.id
                ))
            } else {
                const item = {...existingItem, amount: existingItem.amount -1 }
                menuItems = [...state.items]
                menuItems[existingItemIndex] = item
            }

            return {
                items: menuItems,
                total: updatedTotal
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
          }
    }
};

export default BasketReducer