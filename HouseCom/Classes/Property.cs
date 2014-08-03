using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HouseCom.Classes
{
    public class Property
    {
        [Display(Name="Id")]
        public int PropertyId { get; set; }
        public string Type {get;set;}
        public double Rooms { get; set; }

        public string City { get; set; }
        public bool State { get; set; }
        public bool ForSell { get; set; }
        public bool ForRent { get; set; }

        public double Price { get; set; }


        //public int MarkerId { get; set; }
        //public virtual Marker Marker { get; set; }

        public DateTime? DateModified { get; set; }
        public DateTime? DateCreated { get; set; }

        //public int CustomerId { get; set; }
        //public virtual Customer Customer { get; set; }
    }
}