CREATE TABLE [dbo].[ProtectorUpgrades](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](255) NULL,
	[PhysicsDefRate] [float] NULL,
	[MagicDefRate] [float] NULL,
	[FireDefRate] [float] NULL,
	[ThunderDefRate] [float] NULL,
	[SlashDefRate] [float] NULL,
	[BlowDefRate] [float] NULL,
	[ThrustDefRate] [float] NULL,
	[ResistPoisonRate] [float] NULL,
	[ResistDiseaseRate] [float] NULL,
	[ResistBloodRate] [float] NULL,
	[ResistCurseRate] [float] NULL,
	[ResidentSpEffectId1] [float] NULL,
	[ResidentSpEffectId2] [float] NULL,
	[ResidentSpEffectId3] [float] NULL,
	[MaterialSetId] [float] NULL,
	[Translated name] [nvarchar](255) NULL,
 CONSTRAINT [PK_ProtectorUpgrades] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

