using System;
using System.Collections.Generic;

namespace DarkSoulsReact.Models
{
    public partial class ProtectorUpgrades
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double? PhysicsDefRate { get; set; }
        public double? MagicDefRate { get; set; }
        public double? FireDefRate { get; set; }
        public double? ThunderDefRate { get; set; }
        public double? SlashDefRate { get; set; }
        public double? BlowDefRate { get; set; }
        public double? ThrustDefRate { get; set; }
        public double? ResistPoisonRate { get; set; }
        public double? ResistDiseaseRate { get; set; }
        public double? ResistBloodRate { get; set; }
        public double? ResistCurseRate { get; set; }
        public double? ResidentSpEffectId1 { get; set; }
        public double? ResidentSpEffectId2 { get; set; }
        public double? ResidentSpEffectId3 { get; set; }
        public double? MaterialSetId { get; set; }
        public string TranslatedName { get; set; }
    }
}
