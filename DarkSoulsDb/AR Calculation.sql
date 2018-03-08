--Select * from Weapons Where [English name] = 'Shortsword'

--Select * from Upgrades
--Where Name = 'Normal +15'

--Select * from Corrections
--Where Id = 0

DECLARE @WeaponId bigint = 200000
DECLARE @UpgradeId int = 15

DECLARE @STR int = 33
DECLARE @DEX int = 27
DECLARE @INT int
DECLARE @FTH int

DECLARE @CorrectionId int

DECLARE @PhysicalBase float
DECLARE @StrScaling float
DECLARE @DexScaling float

DECLARE @MagicBase float
DECLARE @IntScaling float

DECLARE @LightningBase float
DECLARE @FthScaling float

DECLARE @UpgradePhysicalModifer float
DECLARE @UpgradeStrModifier float
DECLARE @UpgradeDexModifier float

DECLARE @UpgradeMagicModifier float
DECLARE @UpgradeIntModifier float

DECLARE @UpgradeLightningModifier float
DECLARE @UpgradeFthModifier float

DECLARE @PrevStageMaxVal float
DECLARE @CurrentStageMaxVal float

DECLARE @PrevStageMaxGrowVal float
DECLARE @CurrentStageMaxGrowVal float

DECLARE @StrCorrection float
DECLARE @DexCorrection float

DECLARE @IntCorrection float
DECLARE @FthCorrection float

DECLARE @StrBonus float
DECLARE @DexBonus float

DECLARE @IntBonus float
DECLARE @FthBonus float

DECLARE @TotalAR float

-- TODO: Select Magic and Lightning

Select 
	@CorrectionId = CorrectionId,
	@PhysicalBase = PhysicalDamage,
	@StrScaling = StrengthScaling / 100,
	@DexScaling = DexterityScaling / 100
From Weapons Where Id = @WeaponId

PRINT @PhysicalBase
PRINT @StrScaling
PRINT @DexScaling

-- TODO: Select Magic and Lightning

Select
	@UpgradePhysicalModifer = PhysicalModifier,
	@UpgradeStrModifier = StrengthScaling,
	@UpgradeDexModifier = DexterityScaling
From Upgrades Where Id = @UpgradeId

PRINT @UpgradePhysicalModifer
PRINT @UpgradeStrModifier
PRINT @UpgradeDexModifier

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

-- TODO: Get INT Correction Values

-- TODO: Get FTH Correction Values

SET @PhysicalBase = @PhysicalBase * @UpgradePhysicalModifer
SET @StrBonus = @PhysicalBase * @StrScaling * @UpgradeStrModifier * (@StrCorrection / 100)
SET @DexBonus = @PhysicalBase * @DexScaling * @UpgradeDexModifier * (@DexCorrection / 100)

-- TODO: Calculate Magic and Lightning Base + Bonus

-- TODO: Factor in Magic and Lightning

SET @TotalAR = @PhysicalBase + @StrBonus + @DexBonus

PRINT @StrCorrection
PRINT @DexCorrection

PRINT @PhysicalBase
PRINT @StrBonus
PRINT @DexBonus

Print @TotalAR