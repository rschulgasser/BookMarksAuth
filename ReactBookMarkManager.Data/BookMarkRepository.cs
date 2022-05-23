using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ReactBookMarkManager.Data
{
    public class BookMarkRepository
    {
        private readonly string _connectionString;

        public BookMarkRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<MostUsedBookMarks> GetTopFiveBookMarks()
        {

            using var ctx = new BookMarkContext(_connectionString);
            return ctx.BookMarks.GroupBy(p => p.URL)
                 .Select(g => new MostUsedBookMarks
                 {
                     Count = g.Count(),
                     URL = g.Key

                 })
                   .OrderByDescending(p => p.Count)
                   .Take(5)
                   .ToList();


        }
        public void AddBookmark(BookMark bookMark)
        {
            using var ctx = new BookMarkContext(_connectionString);
            ctx.BookMarks.Add(bookMark);
            ctx.SaveChanges();
        }
        public List<BookMark> GetBookMarks(int userId)
        {

            using var ctx = new BookMarkContext(_connectionString);
           return ctx.BookMarks.Where(w => w.UserId ==userId).ToList();
        }
        public void DeleteBookMark(BookMark bookMark)
        {
            using var ctx = new BookMarkContext(_connectionString);
            //var carsToDelete = context.Cars.Where(c => c.PersonId == personId);
            //context.Cars.RemoveRange(carsToDelete);
            ctx.Database.ExecuteSqlInterpolated($"DELETE FROM bookmarks WHERE Id = {bookMark.Id}");
           ctx.SaveChanges();
        }
        public void UpdateBookMark(BookMark bookMark)
        {
            using var ctx = new BookMarkContext(_connectionString);
             ctx.Database.ExecuteSqlInterpolated($"Update bookmarks set title={bookMark.Title} WHERE Id = {bookMark.Id} ");
            ctx.SaveChanges();
        }

    }
}
