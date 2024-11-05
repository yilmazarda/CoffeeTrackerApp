using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoffeeAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CoffeeAPI.Data
{
    public class CoffeeContext : DbContext
    {
        public DbSet<CoffeeConsumption> CoffeeConsumptions {get; set;}

        public CoffeeContext(DbContextOptions<CoffeeContext> options) : base(options) {

        }
    }
}