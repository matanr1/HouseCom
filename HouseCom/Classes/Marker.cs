using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HouseCom.Classes
{
    public class Marker
    {
        public int MarkerId { get; set; }

        public int PropertyId { get; set; }
        public virtual Property Property { get; set; }

        public Tuple<double, double> LatLng { get; set; }


    }
}