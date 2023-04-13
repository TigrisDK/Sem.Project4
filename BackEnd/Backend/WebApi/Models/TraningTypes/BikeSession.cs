﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApi.Models.TraningTypes
{
    public class BikeSession
    {
        public int SessionID { get; set; }
        public DateTime Date { get; set; }
        public float Durration { get; set; }
        public float Distance { get; set; }
        public float AvgSpeed { get; set; }
        public string? Note { get; set; }

        public TraningData traningData { get; set; }
    }
}
