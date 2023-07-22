// CSS imports
import './ItemList.css';

// Components imports
import Item from '../Item/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';

// Context imports
import { ShoppingItemsContext, ShoppingDispatchContext } from '../../providers/ShoppingContext';

// utils
import { showError } from '../../utils/showToasts';

function ItemList() {

    const shoppingItems = useContext(ShoppingItemsContext);
    const dispatch = useContext(ShoppingDispatchContext);

    return (
        <div className="shopping-items-wrapper">
            {
                shoppingItems && shoppingItems.map(item => {
                    return (
                        <div key={item.id} className='items-list'>
                            <div className='change-quanity add-item'
                                onClick={() => dispatch({type: 'increment_item', itemId: item.id})}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <Item 
                                itemName={item.name}
                                quantity={item.quantity}
                                
                            />
                            <div className='change-quanity remove-item'
                                onClick={() => {
                                    if(item.quantity == 1) showError(`${item.name} removed from the list`)
                                    dispatch({type: 'decrement_item', itemId: item.id})

                                }}
                            >
                                <FontAwesomeIcon icon={faMinus} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default React.memo(ItemList);