using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HouseCom.Classes
{
    public class Customer
    {
        [Display(Name = "Id")]
        public int CustomerId { get; set; }
        [Display(Name = "First Name")]
        public string FirstName { get; set; }
        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public DateTime? DateCreated { get; set; }
        public DateTime? DateModified { get; set; }
        public Employee CreatedBy { get; set; }
        public Employee ModifiedBy { get; set; }
        public virtual ICollection<Property> Properties { get; set; }
    }
}