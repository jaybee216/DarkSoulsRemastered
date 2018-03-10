using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DarkSoulsReact.Models;
using DarkSoulsReact.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DarkSoulsReact.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private readonly DarkSoulsDbContext context;
        private readonly IWeaponService weaponService;

        public SampleDataController(DarkSoulsDbContext _context, IWeaponService _weaponService)
        {
            context = _context;
            weaponService = _weaponService;
        }

        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var baseWeapons = weaponService.GetBaseWeapons();

            var shortSword = baseWeapons.First(w => w.Name == "Shortsword");

            var infusions = weaponService.GetInfusionsForBaseWeapon(shortSword.BaseWeaponId);

            var magic = infusions.First(i => i.Name == "Magic");

            var magicShortsword = weaponService.GetWeapon(shortSword.BaseWeaponId, magic.InfusionId);

            var possibleUpgrades = weaponService.GetWeaponUpgrades(magic.InfusionId);

            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
