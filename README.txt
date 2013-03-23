SQS6-Dev-Better-Start

This is a demo project to get a better working template start for the SquareSpace 6 developer platform using Twitter Bootstrap.

Live demo: http://dsm-bootstrap.sqsp.com

This project is not intented to be a custom template. Very little design will be applied.

The goal of the project is to give the user a choice of navigation and style (through template.conf) to match any of the current Bootstrap examples. 

To change bootstrap styles, open template.conf and change line 8.

For top fixed navigation:

      "regions" : [ "header-1", "full-width", "footer-1" ]

For Narrow marketing:

      "regions" : [ "header-2", "full-width", "footer-2" ]

For Justified nav:

      "regions" : [ "header-3", "full-width", "footer-3" ]


To enable CSS for each layout, on Line 17, change the base-#.less file to match the regions number.