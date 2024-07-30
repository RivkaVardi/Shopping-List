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
                    throw new Error('Network response was not ok');
                }
                const data: Category[] = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const add = (e: React.FormEvent) => {
        e.preventDefault();
        const categoryName = categories.find(x=> x.id===category)!.categoryName;
        const item: Item = { itemName: name, categoryId: category, amount: 1, categoryName:categoryName };
        itemStore.addItem(item);
        setName('');
        setCategory(0);
    }

    return <form onSubmit={add}>
        <input type='text' value={name} maxLength={50} placeholder='שם מוצר' onChange={(e) => setName(e.target.value)}></input>
        <select value={category} onChange={(e) => setCategory(Number(e.target.value))}>
        <option>--בחר קטגוריה--</option>
            {categories.map(category => (
                <option key={category.id} value={category.id}>
                    {category.categoryName}
                </option>
            ))}
        </select>
        <button type='submit'>הוסף</button>
    </form>
}

export default AddItem;