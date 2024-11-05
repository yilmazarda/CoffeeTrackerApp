using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoffeeAPI.Data;
using CoffeeAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoffeeController : ControllerBase
    {
        private readonly ICoffeeRepository _repository;

        public CoffeeController(ICoffeeRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CoffeeConsumption>>> GetCoffeeConsumptions() {
            var coffeeConsumptions = await _repository.GetAllAsync();
            return Ok(coffeeConsumptions);
        }   

        [HttpGet("{id}")]
        public async Task<ActionResult<CoffeeConsumption>> GetCoffeeById(int id) {
            var coffeeConsumption = await _repository.GetByIdAsync(id);
            return Ok(coffeeConsumption);
        }

        [HttpPost]
        public async Task<ActionResult> PostCoffee([FromBody] CoffeeConsumption coffeeConsumption){
            await _repository.AddAsync(coffeeConsumption);
            return CreatedAtAction(nameof(GetCoffeeById), new { id = coffeeConsumption.Id }, coffeeConsumption);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<CoffeeConsumption>> PutCoffee(int id,[FromBody] CoffeeConsumption coffeeConsumption)
        {
            var findCoffee = await _repository.GetByIdAsync(id);
            
            if(findCoffee == null)
            {
                return NotFound();
            }

            findCoffee.Amount = coffeeConsumption.Amount;
            findCoffee.Date = coffeeConsumption.Date;
            findCoffee.CoffeeType = coffeeConsumption.CoffeeType;
            await _repository.UpdateAsync(findCoffee);

            return Ok(findCoffee);
        }   

        [HttpDelete("{id}")]
        public async Task<ActionResult<CoffeeConsumption>> DeleteCoffee(int id)
        {
            var findCoffee = await _repository.GetByIdAsync(id);

            if(findCoffee == null)
            {
                return NotFound();
            }

            await _repository.DeleteAsync(findCoffee);

            return NoContent();
        }
    }
}