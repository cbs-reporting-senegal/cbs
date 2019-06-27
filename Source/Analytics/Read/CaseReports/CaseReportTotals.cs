using Concepts;
using Dolittle.ReadModels;
using System;

namespace Read.CaseReports
{
    public class CaseReportTotals : IReadModel
    {
        public Day Id { get; set; }
        public NumberOfPeople Female { get; set; }
        public NumberOfPeople Male { get; set; }
        public NumberOfPeople Over5 { get; set; }
        public NumberOfPeople Under5 { get; set; }
    }
}