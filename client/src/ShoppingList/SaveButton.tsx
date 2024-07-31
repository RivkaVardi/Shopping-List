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
                alert('הרשימה נשמרה בהצלחה');
            } else {
                alert("שמירה נכשלה");
            }
        } catch (error) {
            console.error("Error saving list:", error);
            alert('ארעה שגיאה בעת שמירת הרשימה');
        }
    }
    
    return <button onClick={save} className='btn btn-light'>שמור</button>
});

export default SaveButton;