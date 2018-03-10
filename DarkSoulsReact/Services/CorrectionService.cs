using DarkSoulsReact.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DarkSoulsReact.Services
{
    public class CorrectionService : ICorrectionService
    {
        private readonly DarkSoulsDbContext _context;

        public CorrectionService(DarkSoulsDbContext context)
        {
            _context = context;
        }

        //This may actually need to be client-side because we don't want to take a 
        //trip back to the server every time the user updates an attribute value
        public void CalculateCorrectionValue(int correctionType, int attribute)
        {
            int currentStageMaxVal;
            int prevStageMaxVal;
            int currentStageMaxGrowVal;
            int prevStageMaxGrowVal;

            Corrections correction = _context.Corrections.FirstOrDefault(c => c.Id == correctionType);
            if (correction == null)
            {
                throw new ArgumentException($"CorrectionType {correctionType} is not valid.");
            }
            if (attribute < 1 || attribute > 99)
            {
                throw new ArgumentException($"Attribute must be in the range [1, 99].");
            }
            if (0 < attribute && attribute <= correction.StageMaxVal1)
            {

            }
            else if (correction.StageMaxVal1 < attribute && attribute <= correction.StageMaxVal2)
            {

            }
            else if (correction.StageMaxVal2 < attribute && attribute <= correction.StageMaxVal3)
            {

            }
            else if (correction.StageMaxVal3 < attribute && attribute <= correction.StageMaxVal4)
            {

            }
        }
    }
}
