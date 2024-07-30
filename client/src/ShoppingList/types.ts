export interface Category{
    id: number,
    categoryName: string
}

export interface Item{
    id?: number,
    categoryId: number,
    itemName: string,
    amount: number,
    categoryName: string
}