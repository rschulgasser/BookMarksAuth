using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactBookMarkManager.Data
{
    public class BookMarkContext: DbContext
    {
        private readonly string _connectionString;

        public BookMarkContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        public DbSet<BookMark> BookMarks { get; set; }
        public DbSet<User> Users { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
    }
}
