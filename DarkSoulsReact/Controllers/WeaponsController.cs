using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DarkSoulsReact.DTO;
using DarkSoulsReact.Models;
using DarkSoulsReact.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DarkSoulsReact.Controllers
{
    [Route("api/[controller]")]
    public class WeaponsController : Controller
    {
        private readonly IWeaponService weaponService;

        public WeaponsController(IWeaponService _weaponService)
        {
            weaponService = _weaponService;
        }

        [HttpGet]
        [Route("baseWeapons")]
        [ProducesResponseType(typeof(IEnumerable<BaseWeapon>), 200)]
        public async Task<IActionResult> BaseWeapons()
        {
            IEnumerable<BaseWeapon> baseWeapons = await weaponService.GetBaseWeaponsAsync();
            return Ok(baseWeapons);
        }

        [HttpGet]
        [Route("{baseWeaponId}/infusions")]
        [ProducesResponseType(typeof(IEnumerable<Infusion>), 200)]
        public async Task<IActionResult> Infusions(int baseWeaponId)
        {
            IEnumerable<Infusion> infusions = await weaponService.GetInfusionsForBaseWeaponAsync(baseWeaponId);
            return Ok(infusions);
        }

        //TODO: Move to different controller (InfusionsController?)
        [HttpGet]
        [Route("infusions/{infusionId}/upgrades")]
        [ProducesResponseType(typeof(IEnumerable<WeaponUpgrade>), 200)]
        public async Task<IActionResult> WeaponUpgrades(int infusionId)
        {
            IEnumerable<WeaponUpgrade> upgrades = await weaponService.GetWeaponUpgradesAsync(infusionId);
            return Ok(upgrades);
        }

        [HttpGet]
        [Route("{baseWeaponId}/infusions/{infusionId}")]
        [ProducesResponseType(typeof(Weapon), 200)]
        public async Task<IActionResult> WeaponDetails(int baseWeaponId, int infusionId) {
            Weapon weapon = await weaponService.GetWeaponAsync(baseWeaponId, infusionId);
            return Ok(weapon);
        }
    }
}
