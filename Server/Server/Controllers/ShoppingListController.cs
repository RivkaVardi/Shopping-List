using BussinessLogic;
using Entities.DBModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ShoppingListController : ControllerBase
    {
        IShoppingListService service;
        public ShoppingListController(IShoppingListService service)
        {
            this.service = service; 
        }

        [HttpGet]
        public Task<List<Category>> GetAllCategoriesAsync()
        {
            return service.GetAllCategoriesAsync();
        }

        [HttpPost]
        public async Task SaveItemsAsync(List<Item> items)
        {
            await service.SaveItemsAsync(items);
        }
    }
}
