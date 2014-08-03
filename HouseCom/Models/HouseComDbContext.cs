using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Data.Entity;
using HouseCom.Classes;

namespace HouseCom.Models
{
    public class HouseComDbContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public HouseComDbContext()
            : base("name=DefaultConnection")
        {
        }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<Property> Properties { get; set; }

        public DbSet<House> Houses { get; set; }

        public DbSet<Post> Posts { get; set; }

        public DbSet<Loaction> Loactions { get; set; }
    
    }
}
