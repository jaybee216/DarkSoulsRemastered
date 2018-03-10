﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DarkSoulsReact.DTO
{
    public class WeaponUpgrade
    {
        public int WeaponUpgradeId { get; set; }
        public string Name { get; set; }
        public int InfusionId { get; set; }
        public double PhysicsAtkRate { get; set; }
        public double MagicAtkRate { get; set; }
        public double FireAtkRate { get; set; }
        public double ThunderAtkRate { get; set; }
        public double CorrectStrengthRate { get; set; }
        public double CorrectAgilityRate { get; set; }
        public double CorrectMagicRate { get; set; }
        public double CorrectFaithRate { get; set; }
    }
}