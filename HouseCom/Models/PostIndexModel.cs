using HouseCom.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HouseCom.Models
{
    public class PostIndexModel
    {
        public List<Post> List { get; set; }
        public Post NewPost { get; set; }
        public Loaction Loaction { get; set; }
    }
}