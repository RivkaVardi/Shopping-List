import React, { useEffect, useState } from 'react';
import { Category, Item } from './types';
import { useItemStore } from './store';

const AddItem: React.FC = () => {

    const [categories, setCategories] = useState<Category[]>([]);
    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState<number>(0);
    const itemStore = useItemStore();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://localhost:7239/api/ShoppingList/GetAllCategories');
                if (!response.ok) {
                    alert('ארעה שגיאה')
                    throw new Error('Network response was not ok');
                }
                const data: Category[] = await response.json();
                setCategories(data);
            } catch (error) {
                alert('ארעה שגיאה')
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const add = (e: React.FormEvent) => {
        e.preventDefault();
        const categoryName = categories.find(x => x.id === category)!.categoryName;
        const item: Item = { itemName: name, categoryId: category, amount: 1, categoryName: categoryName };
        itemStore.addItem(item);
        setName('');
        setCategory(0);
    }

    return <form onSubmit={add} className="row g-3">
        <div className="col-auto">
            <label htmlFor="name" className="visually-hidden">שם מוצר</label>
            <input type='text' id='name' className="form-control" value={name} placeholder='שם מוצר'
                onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="col-auto">
            <label htmlFor="category" className="visually-hidden">בחר קטגוריה</label>
            <select id='category' className="form-select" value={category}
                onChange={(e) => setCategory(Number(e.target.value))} required>
                <option>בחר קטגוריה</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.categoryName}
                    </option>
                ))}
            </select>
        </div>
        <div className="col-auto">
            <button type='submit' className="btn btn-light mb-3" disabled={!name || !category}>הוסף</button>
        </div>
    </form>
}

export default AddItem;