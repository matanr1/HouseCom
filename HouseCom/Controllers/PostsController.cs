using HouseCom.Classes;
using HouseCom.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HouseCom.Controllers
{
    public class PostsController : Controller
    {
        HouseComDbContext db = new HouseComDbContext();
        // GET: Posts
        public ActionResult Index()
        {
            var model = new PostIndexModel();
            model.List =  db.Posts.ToList();
            model.NewPost = new Post();

            return View(model);
        }

        [HttpPost]
        public ActionResult Index(PostIndexModel post)
        {

            var newPost = post.NewPost;
            if (ModelState.IsValid)
            {
                newPost.Published = DateTime.Now;
                db.Posts.Add(newPost);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            var model = new PostIndexModel();
            model.List = db.Posts.ToList();
            model.NewPost = new Post();

            return View(model);
        }

        protected override void Dispose(bool disposing)
        {
            if (db != null)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}