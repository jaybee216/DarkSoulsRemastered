CREATE TABLE [dbo].[Upgrades](
	[Id] [int] NOT NULL,
	[English Name] [nvarchar](255) NULL,
	[Name] [nvarchar](255) NULL,
	[InfusionId] [int] NULL,
	[MaterialId01] [float] NULL,
	[ItemNum01] [float] NULL,
	[IsDisableDispNum01] [bit] NOT NULL,
	[MaterialId02] [float] NULL,
	[ItemNum02] [float] NULL,
	[IsDisableDispNum02] [bit] NOT NULL,
	[MaterialId03] [float] NULL,
	[ItemNum03] [float] NULL,
	[IsDisableDispNum03] [bit] NOT NULL,
	[MaterialId04] [float] NULL,
	[ItemNum04] [float] NULL,
	[IsDisableDispNum04] [bit] NOT NULL,
	[MaterialId05] [float] NULL,
	[ItemNum05] [float] NULL,
	[IsDisableDispNum05] [bit] NOT NULL,
 CONSTRAINT [PK_Upgrades] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

