import React from 'react';
import { useItemStore } from './store';
import { observer } from 'mobx-react-lite';

const SaveButton: React.FC = observer(() => {
    
    const itemStore = useItemStore();
    const itemsArray = Object.values(itemStore.items).flat();

    const save = async () => {
        try {
            const response = await fetch("https://localhost:7239/api/ShoppingList/SaveItems", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(itemsArray),
            });

            if (response.ok) {
                alert("List saved successfully!");
                //   store.clearList();
            } else {
                alert("Failed to save the list.");
            }
        } catch (error) {
            console.error("Error saving list:", error);
            alert("An error occurred while saving the list.");
        }
    }
    return <button onClick={save}>שמור</button>
});

export default SaveButton;