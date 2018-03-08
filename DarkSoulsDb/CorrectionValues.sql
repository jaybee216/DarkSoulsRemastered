CREATE PROCEDURE [dbo].[CorrectionValues] 
	@Stat int,
	@CorrectionId int,
	@CurrentStageMaxVal float OUTPUT,
	@PrevStageMaxVal float OUTPUT,
	@CurrentStageMaxGrowVal float OUTPUT,
	@PrevStageMaxGrowVal float OUTPUT
AS
BEGIN
	SET NOCOUNT ON;

	Select 
	@CurrentStageMaxVal = 
	CASE
		WHEN 0 < @Stat AND @Stat <= StageMaxVal1
			THEN StageMaxVal1
		WHEN StageMaxVal1 < @Stat AND @Stat <= StageMaxVal2
			THEN StageMaxVal2
		WHEN StageMaxVal2 < @Stat AND @Stat <= StageMaxVal3
			THEN StageMaxVal3
		WHEN StageMaxVal3 < @Stat AND @Stat <= StageMaxVal4
			THEN StageMaxVal4
	END,
	@PrevStageMaxVal = 
	CASE
		WHEN 0 < @Stat AND @Stat <= StageMaxVal1
			THEN StageMaxVal0
		WHEN StageMaxVal1 < @Stat AND @Stat <= StageMaxVal2
			THEN StageMaxVal1
		WHEN StageMaxVal2 < @Stat AND @Stat <= StageMaxVal3
			THEN StageMaxVal2
		WHEN StageMaxVal3 < @Stat AND @Stat <= StageMaxVal4
			THEN StageMaxVal3
	END,
	@CurrentStageMaxGrowVal = 
	CASE
		WHEN 0 < @Stat AND @Stat <= StageMaxVal1
			THEN StageMaxGrowVal1
		WHEN StageMaxVal1 < @Stat AND @Stat <= StageMaxVal2
			THEN StageMaxGrowVal2
		WHEN StageMaxVal2 < @Stat AND @Stat <= StageMaxVal3
			THEN StageMaxGrowVal3
		WHEN StageMaxVal3 < @Stat AND @Stat <= StageMaxVal4
			THEN StageMaxGrowVal4
	END,
	@PrevStageMaxGrowVal = 
	CASE
		WHEN 0 < @Stat AND @Stat <= StageMaxVal1
			THEN StageMaxGrowVal0
		WHEN StageMaxVal1 < @Stat AND @Stat <= StageMaxVal2
			THEN StageMaxGrowVal1
		WHEN StageMaxVal2 < @Stat AND @Stat <= StageMaxVal3
			THEN StageMaxGrowVal2
		WHEN StageMaxVal3 < @Stat AND @Stat <= StageMaxVal4
			THEN StageMaxGrowVal3
	END
From Corrections Where Id = @CorrectionId
END