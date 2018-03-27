using System;
using System.Collections.Generic;

namespace DarkSoulsCore.Models
{
    public partial class StartingClass
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Strength { get; set; }
        public int Dexterity { get; set; }
        public int Intelligence { get; set; }
        public int Faith { get; set; }
    }
}
