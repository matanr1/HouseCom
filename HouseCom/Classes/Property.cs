using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HouseCom.Classes
{
    public class Property
    {
        public int pId {get;set;}
        public string type {get;set;}
        public long rooms { get; set; }
        public string city { get; set; }
        public bool state { get; set; }
        public bool ForSell { get; set; }
        public bool forRent { get; set; }
        public Marker mark {get; set;}
        public DateTime DateCreated { get; set; }
        public int price { get; set; }
    }
}