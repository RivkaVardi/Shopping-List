using Entities;

namespace BussinessLogic
{
    public interface IShoppingListService
    {
        Task<List<Category>> GetAllCategoriesAsync();
        Task SaveItemsAsync(List<Item> items);
    }
}
