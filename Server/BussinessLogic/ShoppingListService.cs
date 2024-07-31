using DataAccess;
using Entities;

namespace BussinessLogic
{
    public class ShoppingListService: IShoppingListService
    {
        IShoppingListRepository repository;
        public ShoppingListService(IShoppingListRepository repository)
        {
            this.repository = repository;
        }

        public async Task<List<Category>> GetAllCategoriesAsync()
        {
            return await repository.GetAllCategoriesAsync();
        }

        public async Task SaveItemsAsync(List<Item> items)
        {
            await repository.SaveItemsAsync(items);
        }
    }
}
