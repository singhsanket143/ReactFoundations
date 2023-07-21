// CSS imports
import './ItemList.css';

// Components imports
import Item from '../Item/Item';
function ItemList({ shoppingItems }) {
    return (
        <div className="shopping-items-wrapper">
            {
                shoppingItems && shoppingItems.map(item => {
                    return (
                        <Item 
                            itemName={item.name}
                            quantity={item.quantity}
                            key={item.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default ItemList;