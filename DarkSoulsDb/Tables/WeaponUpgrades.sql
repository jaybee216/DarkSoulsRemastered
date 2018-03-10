CREATE TABLE [dbo].[WeaponUpgrades](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](255) NULL,
	[English Name] [nvarchar](255) NULL,
	[InfusionId] [int] NOT NULL,
	[PhysicsAtkRate] [float] NOT NULL,
	[MagicAtkRate] [float] NOT NULL,
	[FireAtkRate] [float] NOT NULL,
	[ThunderAtkRate] [float] NOT NULL,
	[StaminaAtkRate] [float] NOT NULL,
	[SaWeaponAtkRate] [float] NOT NULL,
	[SaDurabilityRate] [float] NOT NULL,
	[CorrectStrengthRate] [float] NOT NULL,
	[CorrectAgilityRate] [float] NOT NULL,
	[CorrectMagicRate] [float] NOT NULL,
	[CorrectFaithRate] [float] NOT NULL,
	[PhysicsGuardCutRate] [float] NOT NULL,
	[MagicGuardCutRate] [float] NOT NULL,
	[FireGuardCutRate] [float] NOT NULL,
	[ThunderGuardCutRate] [float] NOT NULL,
	[PoisonGuardResistRate] [float] NOT NULL,
	[DiseaseGuardResistRate] [float] NOT NULL,
	[BloodGuardResistRate] [float] NOT NULL,
	[CurseGuardResistRate] [float] NOT NULL,
	[StaminaGuardDefRate] [float] NOT NULL,
	[SpEffectId1] [float] NOT NULL,
	[SpEffectId2] [float] NOT NULL,
	[SpEffectId3] [float] NOT NULL,
	[ResidentSpEffectId1] [float] NOT NULL,
	[ResidentSpEffectId2] [float] NOT NULL,
	[ResidentSpEffectId3] [float] NOT NULL,
	[MaterialSetId] [float] NOT NULL,
 CONSTRAINT [PK_WeaponUpgrades] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

