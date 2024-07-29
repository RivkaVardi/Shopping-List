using System;
using System.Collections.Generic;

namespace Entities.DBModels;

public partial class Category
{
    public int Id { get; set; }

    public string? CategoryName { get; set; }

    public virtual ICollection<Item> Items { get; set; } = new List<Item>();
}
