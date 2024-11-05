using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeAPI.Models
{
    public class CoffeeConsumption
    {
        public int Id { get; set;}
        public int Amount { get; set;}
        public DateTime Date { get; set;}
        public string CoffeeType { get; set;}
    }
}