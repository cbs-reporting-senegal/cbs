using Concepts;
using Concepts.HealthRisks;
using Dolittle.ReadModels;
using System;

namespace Read.CaseReports
{
    public class CaseReport : IReadModel
    {
        public DateTimeOffset Received { get; set; }
        public Region Region { get; set; }
        public HealthRiskId HealthRiskId { get; set; }
        public HealthRiskName HealthRiskName { get; set; }
        public NumberOfPeople Female { get; set; }
        public NumberOfPeople Male { get; set; }
        public NumberOfPeople Over5 { get; set; }
        public NumberOfPeople Under5 { get; set; }
    }
}
