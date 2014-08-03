using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HouseCom.Classes
{
    public class Marker
    {
        public int Id { get; set; }

        public int userId { get; set; }

        public Tuple<double, double> LatLng;
 

    }
}