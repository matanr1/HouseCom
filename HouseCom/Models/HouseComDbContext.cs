using System;
using System.Collections.Generic;
//using System.Data.Entity;
using System.Linq;
//using System.Web;

using MySql.Data.Entity;
using MySql.Web;
using System.Data.Entity;

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

        public DbSet<HouseCom.Classes.House> Houses { get; set; }
    
    }
}
