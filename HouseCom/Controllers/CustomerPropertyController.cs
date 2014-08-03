using HouseCom.Classes;
using HouseCom.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HouseCom.Controllers
{
    public class CustomerPropertyController : Controller
    {
        private HouseComDbContext db = new HouseComDbContext();

        // GET: CustomerProperty
        public ActionResult Index()
        {
            var model = new CustomerPropertyModel();

            model.Customers = db.Customers.ToList();
            model.Customer = new Customer();
            model.Properties = db.Properties.ToList();
            model.Property = new Property();

            return View(model);
        }

        [HttpPost]
        public ActionResult CreateCustomer(Customer customer)
        {
            if (ModelState.IsValid)
            {
                customer.DateCreated = DateTime.Now;
                db.Customers.Add(customer);
                db.SaveChanges();
            }
            return RedirectToAction("Index");
        }

        public ActionResult CreateProperty(Property property)
        {
            if (ModelState.IsValid)
            {
                property.DateCreated = DateTime.Now;
                db.Properties.Add(property);
                db.SaveChanges();
            }
            return RedirectToAction("Index");
        }

        [HttpPost]
        public ActionResult View(int id)
        {
            var data = db.Customers.Where(m => m.CustomerId == id).FirstOrDefault();
            return Json(data, JsonRequestBehavior.AllowGet);
        }
    }
}