using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularRampUp.Api.Models
{
    public class Leave
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Project { get; set; }
        public string EnagementManager { get; set; }
        public int NumberOfDays { get; set; }
        public string LeaveType { get; set; }

        public Leave GetLeave(int id)
        {
            return new Leave
            {
                EnagementManager = "Arvid " + id,
                StartDate = DateTime.Today.AddDays(new Random().Next(20, 50)),
                EndDate = StartDate.AddDays(id),
                Project = "Project "+ id,
                LeaveType = "Casual",
                NumberOfDays = 2
            };
        }
    }
}
