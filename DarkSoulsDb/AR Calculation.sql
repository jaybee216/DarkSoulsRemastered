--Select * from Weapons Where [English name] = 'F Darksword +10'

--Select * from WeaponUpgrades Where Name = 'Occult +5'

--Select * from Corrections Where Id = 0

--TODO: Determine WeaponUpgradeId by inspecting WeaponId suffix
DECLARE @WeaponId bigint = 200900
DECLARE @WeaponUpgradeId int = 905

DECLARE @WeaponName nvarchar(255)
DECLARE @Infusion nvarchar(255)

DECLARE @STR int = 16
DECLARE @DEX int = 23
DECLARE @INT int = 50
DECLARE @FTH int = 9

DECLARE @CorrectionId int

DECLARE @PhysicalBase float
DECLARE @StrScaling float
DECLARE @DexScaling float

DECLARE @MagicBase float
DECLARE @IntScaling float

DECLARE @FireBase float

DECLARE @LightningBase float
DECLARE @FthScaling float

DECLARE @UpgradePhysicalModifer float
DECLARE @UpgradeStrModifier float
DECLARE @UpgradeDexModifier float

DECLARE @UpgradeMagicModifier float
DECLARE @UpgradeIntModifier float

DECLARE @UpgradeFireModifier float

DECLARE @UpgradeLightningModifier float
DECLARE @UpgradeFthModifier float

DECLARE @PrevStageMaxVal float
DECLARE @CurrentStageMaxVal float

DECLARE @PrevStageMaxGrowVal float
DECLARE @CurrentStageMaxGrowVal float

DECLARE @StrCorrection float
DECLARE @DexCorrection float

DECLARE @MagicCorrection float
DECLARE @FthCorrection float

DECLARE @StrBonus float
DECLARE @DexBonus float

DECLARE @MagicBonus float
DECLARE @FthBonus float

DECLARE @TotalPhysical float
DECLARE @TotalMagic float
DECLARE @TotalFire float
DECLARE @TotalLightning float
DECLARE @TotalAR float

Select 
	@WeaponName = [English Name],
	@CorrectionId = CorrectionId,
	@PhysicalBase = PhysicalDamage,
	@StrScaling = CorrectStrength / 100,
	@DexScaling = CorrectDexterity / 100,
	@MagicBase = MagicDamage,
	@IntScaling = CorrectMagic / 100,
	@FireBase = FireDamage,
	@LightningBase = LightningDamage,
	@FthScaling = CorrectFaith / 100
From Weapons Where Id = @WeaponId

Select
	@Infusion = [Name],
	@UpgradePhysicalModifer = PhysicsAtkRate,
	@UpgradeStrModifier = CorrectStrengthRate,
	@UpgradeDexModifier = CorrectDexterityRate,
	@UpgradeMagicModifier = MagicAtkRate,
	@UpgradeIntModifier = CorrectMagicRate,
	@UpgradeFireModifier = FireAtkRate,
	@UpgradeLightningModifier = ThunderAtkRate,
	@UpgradeFthModifier = CorrectFaithRate
From WeaponUpgrades Where Id = @WeaponUpgradeId

PRINT 'Weapon: ' + @WeaponName + '(' + CAST(@WeaponId as VARCHAR) + ')'
PRINT 'Infusion: ' + @Infusion

PRINT 'Correction Type: ' + CAST(@CorrectionId as VARCHAR)

PRINT 'Physical Base: ' + CAST(@PhysicalBase as VARCHAR)
PRINT 'STR Scaling: ' + CAST(@StrScaling as VARCHAR)
PRINT 'DEX Scaling: ' + CAST(@DexScaling as VARCHAR)

PRINT 'Magic Base: ' + CAST(@MagicBase as VARCHAR)
PRINT 'Fire Base: ' + CAST(@FireBase as VARCHAR)
PRINT 'Lightning Base: ' + CAST(@LightningBase as VARCHAR)

PRINT 'INT Scaling: ' + CAST(@IntScaling as VARCHAR)
PRINT 'FTH Scaling: ' + CAST(@FthScaling as VARCHAR)

PRINT 'Upgrade Physical Base Modifier: ' + CAST(@UpgradePhysicalModifer as VARCHAR)
PRINT 'Upgrade STR Scaling Modifier: ' + CAST(@UpgradeStrModifier as VARCHAR)
PRINT 'Upgrade DEX Scaling Modifier: ' + CAST(@UpgradeDexModifier as VARCHAR)
PRINT 'Upgrade Magic Base Modifier: ' + CAST(@UpgradeMagicModifier as VARCHAR)
PRINT 'Upgrade INT Scaling Modifier: ' + CAST(@UpgradeIntModifier as VARCHAR)
PRINT 'Upgrade Fire Base Modifier: ' + CAST(@UpgradeFireModifier as VARCHAR)
PRINT 'Upgrade Lightning Base Modifier: ' + CAST(@UpgradeLightningModifier as VARCHAR)
PRINT 'Upgrade FTH Scaling Modifier: ' + CAST(@UpgradeFthModifier as VARCHAR)

-- Get STR Correction Values
EXEC dbo.CorrectionValues
	@Stat = @STR,
	@CorrectionId = @CorrectionId,
	@CurrentStageMaxVal = @CurrentStageMaxVal OUTPUT,
	@PrevStageMaxVal = @PrevStageMaxVal OUTPUT,
	@CurrentStageMaxGrowVal = @CurrentStageMaxGrowVal OUTPUT,
	@PrevStageMaxGrowVal = @PrevStageMaxGrowVal OUTPUT

SET @StrCorrection = 
	@PrevStageMaxGrowVal
	+ ((@CurrentStageMaxGrowVal - @PrevStageMaxGrowVal) / (@CurrentStageMaxVal - @PrevStageMaxVal)) 
	* (@STR - @PrevStageMaxVal)

-- Get DEX Correction Values
EXEC dbo.CorrectionValues
	@Stat = @DEX,
	@CorrectionId = @CorrectionId,
	@CurrentStageMaxVal = @CurrentStageMaxVal OUTPUT,
	@PrevStageMaxVal = @PrevStageMaxVal OUTPUT,
	@CurrentStageMaxGrowVal = @CurrentStageMaxGrowVal OUTPUT,
	@PrevStageMaxGrowVal = @PrevStageMaxGrowVal OUTPUT

SET @DexCorrection = 
	@PrevStageMaxGrowVal
	+ ((@CurrentStageMaxGrowVal - @PrevStageMaxGrowVal) / (@CurrentStageMaxVal - @PrevStageMaxVal)) 
	* (@Dex - @PrevStageMaxVal)

-- Get Magic Correction Values
EXEC dbo.CorrectionValues
	@Stat = @INT,
	@CorrectionId = @CorrectionId,
	@CurrentStageMaxVal = @CurrentStageMaxVal OUTPUT,
	@PrevStageMaxVal = @PrevStageMaxVal OUTPUT,
	@CurrentStageMaxGrowVal = @CurrentStageMaxGrowVal OUTPUT,
	@PrevStageMaxGrowVal = @PrevStageMaxGrowVal OUTPUT

SET @MagicCorrection = 
	@PrevStageMaxGrowVal
	+ ((@CurrentStageMaxGrowVal - @PrevStageMaxGrowVal) / (@CurrentStageMaxVal - @PrevStageMaxVal)) 
	* (@INT - @PrevStageMaxVal)

-- Get Faith Correction Values
EXEC dbo.CorrectionValues
	@Stat = @FTH,
	@CorrectionId = @CorrectionId,
	@CurrentStageMaxVal = @CurrentStageMaxVal OUTPUT,
	@PrevStageMaxVal = @PrevStageMaxVal OUTPUT,
	@CurrentStageMaxGrowVal = @CurrentStageMaxGrowVal OUTPUT,
	@PrevStageMaxGrowVal = @PrevStageMaxGrowVal OUTPUT

SET @FthCorrection = 
	@PrevStageMaxGrowVal
	+ ((@CurrentStageMaxGrowVal - @PrevStageMaxGrowVal) / (@CurrentStageMaxVal - @PrevStageMaxVal)) 
	* (@FTH - @PrevStageMaxVal)

PRINT 'STR Correction: ' + CAST(@StrCorrection as VARCHAR)
PRINT 'DEX Correction: ' + CAST(@DexCorrection as VARCHAR)
PRINT 'Magic Correction: ' + CAST(@MagicCorrection as VARCHAR)
PRINT 'Faith Correction: ' + CAST(@FthCorrection as VARCHAR)

SET @PhysicalBase = @PhysicalBase * @UpgradePhysicalModifer
SET @StrBonus = @StrScaling * @UpgradeStrModifier * (@StrCorrection / 100)
SET @DexBonus = @DexScaling * @UpgradeDexModifier * (@DexCorrection / 100)

SET @MagicBase = @MagicBase * @UpgradeMagicModifier
SET @MagicBonus = @IntScaling * @UpgradeIntModifier * (@MagicCorrection / 100)

SET @FireBase = @FireBase * @UpgradeFireModifier

SET @LightningBase = @LightningBase * @UpgradeLightningModifier
SET @FthBonus = @FthScaling * @UpgradeFthModifier * (@FthCorrection / 100)

PRINT 'Physical Base (modified): ' + CAST(@PhysicalBase as VARCHAR)
PRINT 'Magic Base (modified): ' + CAST(@MagicBase as VARCHAR) 
PRINT 'Fire Base (modified): ' + CAST(@FireBase as VARCHAR) 
PRINT 'Lightning Base (modified): ' + CAST(@LightningBase as VARCHAR) 
PRINT 'STR Bonus: ' + CAST(@StrBonus as VARCHAR)
PRINT 'DEX Bonus: ' + CAST(@DexBonus as VARCHAR)
PRINT 'Magic Bonus: ' + CAST(@MagicBonus as VARCHAR)
PRINT 'Faith Bonus: ' + CAST(@FthBonus as VARCHAR)

SET @TotalPhysical = @PhysicalBase + (@PhysicalBase * @StrBonus) + (@PhysicalBase * @DexBonus)
SET @TotalMagic = @MagicBase + (@MagicBase * @MagicBonus) + (@MagicBase * @FthBonus)
SET @TotalFire = @FireBase + (@FireBase * @MagicBonus) + (@FireBase * @FthBonus)
SET @TotalLightning = @LightningBase + (@LightningBase * @MagicBonus) + (@LightningBase * @FthBonus)

SET @TotalAR = @TotalPhysical + @TotalMagic + @TotalFire + @TotalLightning

Print 'Total Physical: ' + CAST(@TotalPhysical as VARCHAR)
Print 'Total Magic: ' + CAST(@TotalMagic as VARCHAR)
Print 'Total Fire: ' + CAST(@TotalFire as VARCHAR)
Print 'Total Lightning: ' + CAST(@TotalLightning as VARCHAR)

Print 'Total AR: ' + CAST(@TotalAR as VARCHAR)