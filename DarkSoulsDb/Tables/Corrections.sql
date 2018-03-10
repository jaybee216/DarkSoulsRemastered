CREATE TABLE [dbo].[Corrections](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](255) NULL,
	[StageMaxVal0] [float] NOT NULL,
	[StageMaxVal1] [float] NOT NULL,
	[StageMaxVal2] [float] NOT NULL,
	[StageMaxVal3] [float] NOT NULL,
	[StageMaxVal4] [float] NOT NULL,
	[StageMaxGrowVal0] [float] NOT NULL,
	[StageMaxGrowVal1] [float] NOT NULL,
	[StageMaxGrowVal2] [float] NOT NULL,
	[StageMaxGrowVal3] [float] NOT NULL,
	[StageMaxGrowVal4] [float] NOT NULL,
	[AdjPt_maxGrowVal0] [float] NOT NULL,
	[AdjPt_maxGrowVal1] [float] NOT NULL,
	[AdjPt_maxGrowVal2] [float] NOT NULL,
	[AdjPt_maxGrowVal3] [float] NOT NULL,
	[AdjPt_maxGrowVal4] [float] NOT NULL,
	[Init_inclination_soul] [float] NOT NULL,
	[Adjustment_value] [float] NOT NULL,
	[Boundry_inclination_soul] [float] NOT NULL,
	[Boundry_value] [float] NOT NULL,
	[Translated Name] [nvarchar](255) NULL,
	[Japanese Name] [nvarchar](255) NULL,
 CONSTRAINT [PK_Corrections] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

