using Entities.DBModels;
using Microsoft.EntityFrameworkCore;

namespace DataAccess
{
    public class ShoppingListRepository : IShoppingListRepository
    {
        ShoppingListContext dbContext;
        public ShoppingListRepository(ShoppingListContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public Task<List<Category>> GetAllCategoriesAsync()
        {
            return dbContext.Categories.ToListAsync();
        }
        public async Task SaveItemsAsync(List<Item> items)
        {
            dbContext.Items.AddRange(items);
            await dbContext.SaveChangesAsync();
        }
    }
}
