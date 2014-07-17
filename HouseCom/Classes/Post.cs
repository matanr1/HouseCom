using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HouseCom.Classes
{
    public class Post
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Enter Value")]
        [Display(Name = "Subject: ")]
        public string Subject { get; set; }
        public DateTime Published { get; set; }
        public bool Like { get; set; }
        [Display(Name = "Body: ")]
        public string Body { get; set; }
    }
}