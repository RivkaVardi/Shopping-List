using AutoMapper;
using Entities;
using Entities.DTO;

namespace Server
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<CategoryDto, Category>();
            CreateMap<Category, CategoryDto>();
            CreateMap<ItemDto, Item>();
            CreateMap<Item, ItemDto>();
        }
    }
}
