CREATE VIEW [dbo].[WeaponInfusions]
	AS 
	SELECT        CAST(LEFT(REPLACE(STR(Id, 7), SPACE(1), '0'), 4) AS INT) AS WeaponId, 
				  CAST(RIGHT(Id, 3) AS INT) AS InfusionId, 
				  Id, 
				  [English name]
	FROM          dbo.Weapons
	WHERE        ([English name] IS NOT NULL)
