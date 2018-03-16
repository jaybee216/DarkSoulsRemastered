using System;
using System.Collections.Generic;

namespace DarkSoulsReact.Models
{
    public partial class BaseWeapons
    {
        public int Id { get; set; }
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public bool IsHidden { get; set; }
    }
}
