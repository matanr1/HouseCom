using HouseCom.Classes;
using HouseCom.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HouseCom.Controllers
{
    public class MapsController : Controller
    {
        // GET: Maps
        public ActionResult Index()
        {
            var model = new PostIndexModel();
            model.Loaction = new Loaction();
            return View(model);
        }



        public ActionResult SaveLoaction(Loaction loaction)
        {
            var data = new{
                Name = loaction.Name,
                Latitude = loaction.Latitude,
                Longitude = loaction.Longitude
            };
            return Json(data, JsonRequestBehavior.AllowGet);
        }
    }
}