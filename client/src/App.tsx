import React from 'react';
import './App.css';
import AddItem from './ShoppingList/AddItem';
// import itemStore, {ItemStoreContext} from './ShoppingList/store';
import ViewItems from './ShoppingList/ViewItems';

const App: React.FC = () => {
  return (
    // <ItemStoreContext.Provider value={itemStore}>
    <div>
      <AddItem></AddItem>
      <ViewItems></ViewItems>
    </div>
    // </ItemStoreContext.Provider>
  );
}

export default App;
