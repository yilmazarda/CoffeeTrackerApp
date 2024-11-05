using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoffeeAPI.Models;

namespace CoffeeAPI.Data
{
    public class CoffeeRepository : Repository<CoffeeConsumption>, ICoffeeRepository
    {
        public CoffeeRepository(CoffeeContext coffeeContext) : base(coffeeContext)
        {
            
        }
    }
}