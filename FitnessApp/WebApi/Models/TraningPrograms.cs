﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class TraningPrograms
    {
        public int TraningProgramID { get; set; }
        public string Name { get; set; }
        public ICollection<FavoriteTraningPrograms> FavoriteTraningPrograms { get; set; }
    }
}
