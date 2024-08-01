namespace Entities.DTO
{
    public class ItemDto
    {
        public int Id { get; set; }

        public int CategoryId { get; set; }

        public string ItemName { get; set; } = null!;

        public int? Amount { get; set; }

        public string? CategoryName { get; set; }
    }
}
