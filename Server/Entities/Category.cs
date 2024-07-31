using System;
using System.Collections.Generic;

namespace Entities;

public partial class Category
{
    public int Id { get; set; }

    public string CategoryName { get; set; } = null!;

    public virtual ICollection<Item> Items { get; set; } = new List<Item>();
}
