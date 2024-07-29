using System;
using System.Collections.Generic;

namespace Entities.DBModels;

public partial class Item
{
    public int Id { get; set; }

    public int? CategoryId { get; set; }

    public string? ItemName { get; set; }

    public int? Amount { get; set; }

    public virtual Category? Category { get; set; }
}
