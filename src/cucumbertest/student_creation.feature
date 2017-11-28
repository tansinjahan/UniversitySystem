Feature: Student creation

Scenario Outline: Student creation successful
	Given the university is initialized
	And the term is started
	And the user inputs <options>
	When the clerk logs in with admin
	When the clerk input create student with <name> and <number> and <email> and <pass> and <status> properly
	Then the student is created
	
	Examples:
	|options|name|number|email|pass|status|
	|clerk|tansin|56789|ta@gmail|12345|full time|
	|clerk|anwar|34567|a@gmail|12345|full time|
	
Scenario Outline: Delete student success
	Given the university is initialized
	And the term is started
	And the user inputs <option>
	When the clerk logs in with admin
	And the clerk input delete student with number <number>
	Then the student is deleted
	
	Examples:
	|option|number|
	|clerk|123123|
	
Scenario Outline: Remove non-existent student fails
	Given the university is initialized
	And the term is started
	And the user inputs <option>
	When the clerk logs in with admin
	And the clerk input delete student with number <number>
	Then the student can not be deleted
	
	Examples:
	|option|number|
	|clerk|122123|
	
Scenario Outline: Redundant student creation fails
	Given the university is initialized
	And the term is started
	And the user inputs <option>
	When the clerk logs in with admin
	When the clerk input create student with <name> and <number> and <email> and <pass> and <status> properly
	When the clerk input create student with <name> and <number> and <email> and <pass> and <status> properly
	Then the duplicate student can not be created
	
	Examples:
	|option|name|number|email|pass|status|
	|clerk|jim|123123|jim@gotham|12345|part time|	
	
Scenario Outline: Delete student too late fails
	Given the university is initialized
	And the term is started
	And course registration term is started
	And the user inputs <option>
	When the clerk logs in with admin
	And the clerk input delete student with number <number>
	Then the student can not be deleted
	
	Examples:
	|option|code|
	|clerk|123123|
	

	
	
	