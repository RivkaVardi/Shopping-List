using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Entities;

public partial class ShoppingListDbContext : DbContext
{
    public ShoppingListDbContext()
    {
    }

    public ShoppingListDbContext(DbContextOptions<ShoppingListDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Item> Items { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Categori__3213E83F469BFF55");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CategoryName)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("category_name");
        });

        modelBuilder.Entity<Item>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Items__3213E83F75EDFCD0");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Amount).HasColumnName("amount");
            entity.Property(e => e.CategoryId).HasColumnName("category_id");
            entity.Property(e => e.ItemName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("item_name");

            entity.HasOne(d => d.Category).WithMany(p => p.Items)
                .HasForeignKey(d => d.CategoryId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Items__category___398D8EEE");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
