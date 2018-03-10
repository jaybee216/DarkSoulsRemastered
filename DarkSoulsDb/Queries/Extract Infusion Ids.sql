-- Extract BaseWeaponId and InfusionId from Weapons.Id (dbo.WeaponInfusions view)
SELECT CAST(LEFT(REPLACE(STR(Id, 7), SPACE(1), '0'), 4) AS INT) as WeaponId,
CAST(RIGHT(Id, 3) AS INT) as InfusionId,
Id, [English Name]
from Weapons 
Where [English name] is not null
order by Id
GO

Update Weapons
Set BaseWeaponId = CAST(LEFT(REPLACE(STR(Id, 7), SPACE(1), '0'), 4) AS INT),
InfusionId = CAST(RIGHT(Id, 3) AS INT)
GO

-- Extract InfusionId from WeaponUpgrades.Id (dbo.WeaponUpgradeInfusions view)
Select CAST(LEFT(REPLACE(STR(Id, 4), SPACE(1), '0'), 2) + '00' AS INT) as InfusionId, * from WeaponUpgrades 
GO

Update WeaponUpgrades
Set InfusionId = CAST(LEFT(REPLACE(STR(Id, 4), SPACE(1), '0'), 2) + '00' AS INT),
[English Name] = [Name]
GO