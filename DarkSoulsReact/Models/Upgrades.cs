using System;
using System.Collections.Generic;

namespace DarkSoulsReact.Models
{
    public partial class Upgrades
    {
        public int Id { get; set; }
        public string EnglishName { get; set; }
        public string Name { get; set; }
        public int? InfusionId { get; set; }
        public double? MaterialId01 { get; set; }
        public double? ItemNum01 { get; set; }
        public bool IsDisableDispNum01 { get; set; }
        public double? MaterialId02 { get; set; }
        public double? ItemNum02 { get; set; }
        public bool IsDisableDispNum02 { get; set; }
        public double? MaterialId03 { get; set; }
        public double? ItemNum03 { get; set; }
        public bool IsDisableDispNum03 { get; set; }
        public double? MaterialId04 { get; set; }
        public double? ItemNum04 { get; set; }
        public bool IsDisableDispNum04 { get; set; }
        public double? MaterialId05 { get; set; }
        public double? ItemNum05 { get; set; }
        public bool IsDisableDispNum05 { get; set; }
    }
}
