import React from 'react';
import { observer } from 'mobx-react-lite';
import { useItemStore } from './store';

const ViewItems: React.FC = observer(() => {
  
  const itemStore = useItemStore();
  const items = itemStore.items;

  return (
    <div>
      <h3>סה"כ {itemStore.totalItems} מוצרים</h3>
      {Object.keys(items).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {items[Number(category)].map((item, index) => (
              item.amount === 1 ? (
                <li key={index}>{item.itemName}</li>
              ):(
                <li key={index}>{item.itemName} ({item.amount})</li>
              )
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
});

export default ViewItems;