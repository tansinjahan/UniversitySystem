Feature: Course creation

Scenario Outline: Course creation successful
	Given the university is initialized
	And the term is started
	And the user inputs <option>
	When the clerk logs in with admin
	And the clerk input create course with <title> and <code> and <capacity> and <hasFinal> and <assignment> and <midterm> and <prerequisite> and <hasProject>
	Then the course is created
	
	Examples:
	|option|title|code|capacity|hasFinal|assignment|midterm|prerequisite|hasProject|
	|clerk|OOP|112347|27|true|2|1|false|true|

Scenario Outline: Remove course success
	Given the university is initialized
	And the term is started
	And the user inputs <option>
	When the clerk logs in with admin
	And the clerk input cancel course with code <code>
	Then the course is deleted
	
	Examples:
	|option|code|
	|clerk|112233|
	
Scenario Outline: Remove non-existent course fails
	Given the university is initialized
	And the term is started
	And the user inputs <option>
	When the clerk logs in with admin
	And the clerk input cancel course with code <code>
	Then the course can not be deleted
	
	Examples:
	|option|code|
	|clerk|112247|
	

Scenario Outline: Redundant Course creation unsuccessfull
	Given the university is initialized
	And the term is started
	And the user inputs <option>
	When the clerk logs in with admin
	And the clerk input create course with <title> and <code> and <capacity> and <hasFinal> and <assignment> and <midterm> and <prerequisite> and <hasProject>
	And check if the course <code> is already exists
	Then the course can not be created
	
	Examples:
	|option|title|code|capacity|hasFinal|assignment|midterm|prerequisite|hasProject|
	|clerk|Data Structure|112233|27|true|2|2|false|true|
	
Scenario Outline: Remove course too late fails
	Given the university is initialized
	And the term is started
	And the user inputs <option>
	When the clerk logs in with admin
	And the course registration period starts
	And the clerk input cancel course with code <code>
	Then the course can not be deleted
	
	Examples:
	|option|code|
	|clerk|112233|