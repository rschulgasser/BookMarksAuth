using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactBookMarkManager.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBookMarkManager.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookMarks : ControllerBase
    {
        private string _connectionString;

        public BookMarks(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("gettopfive")]
        public List<MostUsedBookMarks> GetTopFive()
        {
            var repo = new BookMarkRepository(_connectionString);
            return repo.GetTopFiveBookMarks();
        }
        [Authorize]
        [HttpPost]
        [Route("addbookmark")]
        public void AddBookMark(BookMark bookMark)
        {
            var accountRepo = new UserRepository(_connectionString);
            bookMark.UserId = accountRepo.GetByEmail(User.Identity.Name).Id;
            var repo = new BookMarkRepository(_connectionString);
            repo.AddBookmark(bookMark);
        }
        [Authorize]
        [HttpGet]
        [Route("getbookmarks")]
        public List<BookMark> GetBookMarks()
        {
            var accountRepo = new UserRepository(_connectionString);
            int userId = accountRepo.GetByEmail(User.Identity.Name).Id;
            var repo = new BookMarkRepository(_connectionString);
            return repo.GetBookMarks(userId);
        }
        [Authorize]
        [HttpPost]
        [Route("deletebookmark")]
        public void DeleteBookMark(BookMark bookMark)
        {
          
            var repo = new BookMarkRepository(_connectionString);
            repo.DeleteBookMark(bookMark);
        }
        [Authorize]
        [HttpPost]
        [Route("updatebookmark")]
        public void UpdateBookMark(BookMark bookMark)
        {

            var repo = new BookMarkRepository(_connectionString);
            repo.UpdateBookMark(bookMark);
        }
    }
}
