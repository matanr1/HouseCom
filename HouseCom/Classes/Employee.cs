using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HouseCom.Classes
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }

    }
}