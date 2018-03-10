CREATE VIEW [dbo].[WeaponUpgradeInfusions]
AS
SELECT        CAST(LEFT(REPLACE(STR(Id, 4), SPACE(1), '0'), 2) + '00' AS INT) AS InfusionId, Id, Name, [English Name], InfusionId AS Expr1, PhysicsAtkRate, MagicAtkRate, FireAtkRate, ThunderAtkRate, StaminaAtkRate, SaWeaponAtkRate, 
                         SaDurabilityRate, CorrectStrengthRate, CorrectAgilityRate, CorrectMagicRate, CorrectFaithRate, PhysicsGuardCutRate, MagicGuardCutRate, FireGuardCutRate, ThunderGuardCutRate, PoisonGuardResistRate, 
                         DiseaseGuardResistRate, BloodGuardResistRate, CurseGuardResistRate, StaminaGuardDefRate, SpEffectId1, SpEffectId2, SpEffectId3, ResidentSpEffectId1, ResidentSpEffectId2, ResidentSpEffectId3, MaterialSetId
FROM            dbo.WeaponUpgrades