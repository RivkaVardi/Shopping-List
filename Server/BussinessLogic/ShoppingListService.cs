using DataAccess;
using Entities.DBModels;

namespace BussinessLogic
{
    public class ShoppingListService: IShoppingListService
    {
        IShoppingListRepository repository;
        public ShoppingListService(IShoppingListRepository repository)
        {
            this.repository = repository;
        }
        public Task<List<Category>> GetAllCategoriesAsync()
        {
            return repository.GetAllCategoriesAsync();
        }
        public async Task SaveItemsAsync(List<Item> items)
        {
            await repository.SaveItemsAsync(items);
        }
    }
}
