import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';
import { Item } from './types';

class ItemStore {

    items: Record<number, Item[]> = {};
    totalItems: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    addItem(item: Item) {
        this.totalItems++;
        if (!this.items[item.categoryId]) {
            this.items[item.categoryId] = [];
        }
        const existItem = this.items[item.categoryId].find(x => x.itemName === item.itemName);
        if (existItem)
            existItem.amount++;
        else
            this.items[item.categoryId].push(item);
    }
}

const itemStore = new ItemStore();
const ItemStoreContext = createContext(itemStore);

export const useItemStore = () => useContext(ItemStoreContext);
// export default itemStore;