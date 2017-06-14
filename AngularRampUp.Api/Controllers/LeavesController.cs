using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularRampUp.Api.Models;
using Microsoft.AspNetCore.Http;

namespace AngularRampUp.Api.Controllers
{
    [Route("api/[controller]")]
    public class LeavesController : Controller
    {
        NeuPortalContext dbContext;
        public LeavesController(NeuPortalContext db)
        {
            dbContext = db;
        }
        Leave l;
        List<Leave> leaves;
       
        // GET api/values
        [HttpGet]
        public IEnumerable<Leave> Get()
        {
            return dbContext.Leave.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public Leave Post([FromBody]Leave value)
        {
            //var leave = Newtonsoft.Json.JsonConvert.DeserializeObject<Leave>(value);
            if (value.Id == 0)
            {
                dbContext.Leave.Add(value);
            }
            else
            {
                dbContext.Entry(value).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            }
            dbContext.SaveChanges();
            return value;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            dbContext.Leave.Remove(dbContext.Leave.First(x => x.Id == id));
            dbContext.SaveChanges();
        }
    }
}
