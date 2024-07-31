using AutoMapper;
using BussinessLogic;
using Entities;
using Entities.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ShoppingListController : ControllerBase
    {
        IShoppingListService service;
        IMapper mapper;
        public ShoppingListController(IShoppingListService service, IMapper mapper)
        {
            this.service = service; 
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<List<CategoryDto>> GetAllCategoriesAsync()
        {
            var categories =  await service.GetAllCategoriesAsync();
            return mapper.Map<List<CategoryDto>>(categories);
        }

        [HttpPost]
        public async Task SaveItemsAsync(List<ItemDto> itemsDto)
        {
            var items = mapper.Map<List<Item>>(itemsDto);
            await service.SaveItemsAsync(items);
        }
    }
}
