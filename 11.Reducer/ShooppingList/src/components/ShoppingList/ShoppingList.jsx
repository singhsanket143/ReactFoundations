// CSS Imports
import './ShoppingList.css';

// Context imports
import { ShoppingItemsContext, ShoppingDispatchContext } from '../../providers/ShoppingContext';

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
            <ShoppingItemsContext.Provider value={shoppingItems}>
                <ShoppingDispatchContext.Provider value={dispatch}>
                    <Header />
                    <ToastContainer />
                    <div className="current-shopping-list">
                        <InputItem/>
                        <ItemList 
                            addQuantity={handleAddQuantity}
                            decQuantity={handleDecQuantity}
                        />
                    </div>
                </ShoppingDispatchContext.Provider>
            </ShoppingItemsContext.Provider>
        </>
    )
}

export default ShoppingList;