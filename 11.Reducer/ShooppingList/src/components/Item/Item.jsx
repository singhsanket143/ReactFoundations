// CSS imports
import './Item.css'

import React from 'react';

function Item({itemName, quantity}) {
    return (
        <div className="item-wrapper">
            <div className="item-name">
                {itemName}
            </div>
            <div className="item-quantity">
                {quantity}
            </div>
        </div>
    );  
}

export default React.memo(Item);