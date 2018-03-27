using System;
using System.Collections.Generic;

namespace DarkSoulsCore.Models
{
    public partial class BaseWeapons
    {
        public int Id { get; set; }
        public int Categoryid { get; set; }
        public string Name { get; set; }
        public bool IsHidden { get; set; }
    }
}
