using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace AngularRampUp.Api.Models
{
    public partial class Leave
    {
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public string EngagementManager { get; set; }
        [DataMember]
        public string Project { get; set; }
        [DataMember]
        public DateTime? StartDate { get; set; }
        [DataMember]
        public DateTime? EndDate { get; set; }
        [DataMember]
        public string LeaveType { get; set; }
        [DataMember]
        public int? NumberOfDays { get; set; }
    }
}
