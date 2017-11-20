Feature: Student creation

Scenario Outline: Student creation successful
	Given the university is initialized
	And the term is started
	And the user inputs clerk
	When the clerk logs in with admin
	When the clerk input create student with <name> and <number> and <email> and <pass> and <status> properly
	Then the student is created
	
	Examples:
	|name|number|email|pass|status|
	|tansin|56789|ta@gmail|12345|full time|
	|anwar|34567|a@gmail|12345|full time|
	
Scenario Outline: Delete student success
	Given the university is initialized
	And the term is started
	And the user inputs clerk
	When the clerk logs in with admin
	And the clerk input delete student with number <number>
	Then the student is deleted
	
	Examples:
	|number|
	|123123|
	
Scenario Outline: Remove non-existent student fails
	Given the university is initialized
	And the term is started
	And the user inputs clerk
	When the clerk logs in with admin
	And the clerk input delete student with number <number>
	Then the student can not be deleted
	
	Examples:
	|number|
	|122123|
	
Scenario Outline: Redundant student creation fails
	Given the university is initialized
	And the term is started
	And the user inputs clerk
	When the clerk logs in with admin
	When the clerk input create student with <name> and <number> and <email> and <pass> and <status> properly
	And check if the student <number> is already created 
	Then the duplicate student can not be created
	
	Examples:
	|name|number|email|pass|status|
	|jim|123123|jim@gotham|12345|part time|	
	
Scenario Outline: Delete student too late fails
	Given the university is initialized
	And the term is started
	And course registration term is started
	And the user inputs clerk
	When the clerk logs in with admin
	And the clerk input delete student with number <number>
	Then the student can not be deleted
	
	Examples:
	|code|
	|123123|
	

	
	
	