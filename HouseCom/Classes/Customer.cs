using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HouseCom.Classes
{
    public class Customer
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        public Employee CreatedBy { get; set; }
        public Employee ModifiedBy { get; set; }
        public ICollection<Product> Products { get; set; }
    }
}