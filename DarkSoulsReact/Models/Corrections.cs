using System;
using System.Collections.Generic;

namespace DarkSoulsReact.Models
{
    public partial class Corrections
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double StageMaxVal0 { get; set; }
        public double StageMaxVal1 { get; set; }
        public double StageMaxVal2 { get; set; }
        public double StageMaxVal3 { get; set; }
        public double StageMaxVal4 { get; set; }
        public double StageMaxGrowVal0 { get; set; }
        public double StageMaxGrowVal1 { get; set; }
        public double StageMaxGrowVal2 { get; set; }
        public double StageMaxGrowVal3 { get; set; }
        public double StageMaxGrowVal4 { get; set; }
        public double AdjPtMaxGrowVal0 { get; set; }
        public double AdjPtMaxGrowVal1 { get; set; }
        public double AdjPtMaxGrowVal2 { get; set; }
        public double AdjPtMaxGrowVal3 { get; set; }
        public double AdjPtMaxGrowVal4 { get; set; }
        public double InitInclinationSoul { get; set; }
        public double AdjustmentValue { get; set; }
        public double BoundryInclinationSoul { get; set; }
        public double BoundryValue { get; set; }
        public string TranslatedName { get; set; }
        public string JapaneseName { get; set; }
    }
}
