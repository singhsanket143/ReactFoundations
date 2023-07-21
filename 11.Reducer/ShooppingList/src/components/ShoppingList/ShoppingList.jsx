// CSS Imports
import './ShoppingList.css';

// Component imports
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from '../ItemList/ItemList';
import { ToastContainer } from 'react-toastify';
import { useReducer } from 'react';

// reducer imports
import ItemReducer from '../../reducers/itemReducer';

function ShoppingList() {

    // const [shoppingItems, setShoppingItems] = useState([]);
    const [shoppingItems, dispatch] = useReducer(ItemReducer, []);
    function handleAddItem(name) {
        dispatch({
            type: 'add_item',
            itemName: name
        });
    }

    function handleAddQuantity(id) {
        dispatch({
            type: 'increment_item',
            itemId: id
        })
    }

    function handleDecQuantity(id) {
        dispatch({
            type: 'decrement_item',
            itemId: id
        })
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