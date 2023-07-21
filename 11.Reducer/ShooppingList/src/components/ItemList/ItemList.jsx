// CSS imports
import './ItemList.css';

// Components imports
import Item from '../Item/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function ItemList({ shoppingItems }) {
    return (
        <div className="shopping-items-wrapper">
            {
                shoppingItems && shoppingItems.map(item => {
                    return (
                        <div key={item.id} className='items-list'>
                            <div className='change-quanity add-item'>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <Item 
                                itemName={item.name}
                                quantity={item.quantity}
                                
                            />
                            <div className='change-quanity remove-item'>
                                <FontAwesomeIcon icon={faMinus} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList;