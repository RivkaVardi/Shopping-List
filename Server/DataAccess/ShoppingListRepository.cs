using Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess
{
    public class ShoppingListRepository : IShoppingListRepository
    {
        ShoppingListDbContext dbContext;
        public ShoppingListRepository(ShoppingListDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<List<Category>> GetAllCategoriesAsync()
        {
            return await dbContext.Categories.ToListAsync();
        }

        public async Task SaveItemsAsync(List<Item> items)
        {
            dbContext.Items.AddRange(items);
            await dbContext.SaveChangesAsync();
        }
    }
}
