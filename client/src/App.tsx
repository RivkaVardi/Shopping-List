import React from 'react';
import './App.css';
import AddItem from './ShoppingList/AddItem';
import ViewItems from './ShoppingList/ViewItems';
import SaveButton from './ShoppingList/SaveButton';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>רשימת קניות</h1>
      <br/>
      <AddItem></AddItem>
      <ViewItems></ViewItems>
      <SaveButton></SaveButton>
    </div>
  );
}

export default App;
