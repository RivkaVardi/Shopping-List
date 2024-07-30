import React, { ChangeEvent, useEffect, useState } from 'react';
import { Category, Item } from './types';

const AddItem = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState<number>(0);

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

    const add = () => {
        const item: Item = { itemName: name, categoryId: category, amount: 1 };
        console.log(item);
    }

    return <>
        <input type='text' value={name} maxLength={50} placeholder='שם מוצר' onChange={(e) => setName(e.target.value)}></input>
        <select value={category} onChange={(e) => setCategory(Number(e.target.value))}>
            {categories.map(category => (
                <option key={category.id} value={category.id}>
                    {category.categoryName}
                </option>
            ))}
        </select>
        <button onClick={add}>הוסף</button>
    </>
}

export default AddItem;