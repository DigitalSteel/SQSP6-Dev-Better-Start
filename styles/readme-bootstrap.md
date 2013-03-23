This is a customized Bootstrap setup. The grid system and some of the components didn't play nice with SQSP. 

Uncheck the following features:

1. Choose components

	// Scaffolding
		
		Normalize and reset
		Grid system
			
	// Base CSS
	
		Labels and badges
		Tables
		Forms

		
To utilize the glyphicons, you must change the path to them in bootstrap-custom.css. Search for "glyph" in bootstrap.css and bootstrap.min.css and change the filepath to:

LINE 813.  background-image: url("assets/img/glyphicons-halflings.png");
LINE 836.  background-image: url("assets/img/glyphicons-halflings-white.png");

