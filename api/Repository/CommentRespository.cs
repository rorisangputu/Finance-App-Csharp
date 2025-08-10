using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class CommentRespository : ICommentRepository
    {
        private readonly ApplicationDbContext _context;
        public CommentRespository(ApplicationDbContext dbContext)
        {
            _context = dbContext;
        }
        public async Task<List<Comment>> GetAllAsync()
        {
            return await _context.Comments.ToListAsync();
        }
    }
}