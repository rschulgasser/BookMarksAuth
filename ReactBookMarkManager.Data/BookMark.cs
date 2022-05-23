using System;

namespace ReactBookMarkManager.Data
{
    public class BookMark
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string URL { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}
