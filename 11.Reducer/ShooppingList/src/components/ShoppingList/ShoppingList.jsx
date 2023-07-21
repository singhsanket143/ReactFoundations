// CSS Imports
import './ShoppingList.css';

// Component imports
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from '../ItemList/ItemList';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ShoppingList() {

    const [shoppingItems, setShoppingItems] = useState([]);

    function handleAddItem(itemName) {
        setShoppingItems([
            ...shoppingItems, 
            {id: uuidv4(), name: itemName, quantity: 1}
        ]);
    }

    function handleAddQuantity(itemId) {
        const newShoppingItems = shoppingItems.map(item => {
            if(item.id == itemId) item.quantity++;
            return item;
        });
        setShoppingItems(newShoppingItems);
    }

    function handleDecQuantity(itemId) {
        let newShoppingItems = shoppingItems.map(item => {
            if(item.id == itemId) item.quantity--;
            return item;
        });
        newShoppingItems = newShoppingItems.filter(item => item.quantity > 0);
        setShoppingItems(newShoppingItems);
    }

    return (
        <>
            <Header />
            <ToastContainer />
            <div className="current-shopping-list">
                <InputItem
                    addItem={handleAddItem}
                />
                <ItemList 
                    shoppingItems={shoppingItems}
                    addQuantity={handleAddQuantity}
                    decQuantity={handleDecQuantity}
                />
            </div>
        </>
    )
}

export default ShoppingList;