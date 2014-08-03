using HouseCom.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HouseCom.Models
{
    public class CustomerPropertyModel
    {
        public List<Customer> Customers { get; set; }
        public Customer Customer { get; set; }
        public List<Property> Properties { get; set; }
        public Property Property { get; set; }
    }
}