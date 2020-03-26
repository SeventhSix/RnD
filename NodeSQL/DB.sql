USE NodeDB
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

/****** ============================================================================================================= ******/

/****** Creation [dbo].[PlayTable] ******/

CREATE TABLE [dbo].[PlayTable] (
	[Id] [bigint] IDENTITY(1,1) PRIMARY KEY,
	[Key] [varchar](250) NOT NULL,
	[Value] [varchar](250) NOT NULL,
);
GO


/****** ============================================================================================================= ******/

/****** Destruction [dbo].[PlayTable] ******/

DROP TABLE [dbo].[PlayTable]
GO


/****** ============================================================================================================= ******/


/****** Usefull Queries Start ******/

TRUNCATE TABLE [dbo].[PlayTable]
GO

INSERT INTO [dbo].[PlayTable] ([Key], [Value])
     VALUES ('Seventh', 'Six')
GO

SELECT * FROM [dbo].[PlayTable]
GO


/****** Usefull Queries End ******

/****** ============================================================================================================= ******/
