This is a customized Bootstrap setup. The grid system and some of the components didn't play nice with SQSP. 

Uncheck the following features:

1. Choose components

	// Scaffolding
		
		Normalize and reset
		Grid system
		Layouts
			
	// Base CSS
	
		Labels and badges
		Tables
		Forms
	
	// Responsive

		Narrow tablets and below (<767px)
		Tablets to desktops (767-979px)
		Large desktops (>1200px)
		
*To utilize the glyphicons, you must change the path to them in bootstrap-custom.css.

LINE 785. background-image: url("assets/img/glyphicons-halflings.png");
LINC 808. background-image: url("assets/img/glyphicons-halflings-white.png");
