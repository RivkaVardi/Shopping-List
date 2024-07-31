import React from 'react';
import { observer } from 'mobx-react-lite';
import { useItemStore } from './store';

const ViewItems: React.FC = observer(() => {

  const itemStore = useItemStore();
  const items = itemStore.items;

  const headers = Object.keys(items);
  const rows = [];
  const maxLength = Math.max(...headers.map(header => items[header].length));

  for (let i = 0; i < maxLength; i++) {
    const row = headers.map(header => items[header][i] || '');
    rows.push(row);
  }

  return (
    <table className='table caption-top'>
      <caption>סה"כ {itemStore.totalItems} מוצרים</caption>
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((item, itemIndex) => (
              !item ? (
                <td key={itemIndex}></td>
              ) : item.amount === 1 ? (
                <td key={itemIndex}>{item.itemName}</td>
              ) : (
                <td key={itemIndex}>{item.itemName} ({item.amount})</td>
              )
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default ViewItems;