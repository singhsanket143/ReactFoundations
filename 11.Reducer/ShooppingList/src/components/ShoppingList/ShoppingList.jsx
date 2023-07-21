// CSS Imports
import './ShoppingList.css';

// Component imports
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";

function ShoppingList() {
    return (
        <>
            <Header />

            <div className="current-shopping-list">
                <InputItem />
            </div>
        </>
    )
}

export default ShoppingList;