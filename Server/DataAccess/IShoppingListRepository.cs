using Entities;

namespace DataAccess
{
    public interface IShoppingListRepository
    {
        Task<List<Category>> GetAllCategoriesAsync();
        Task SaveItemsAsync(List<Item> items);
    }
}
