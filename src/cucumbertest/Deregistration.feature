Feature: Student Deregistration
Scenario Outline: Student deregister upto two weeks after start term success
		Given the university is initialized
		And the term is started
		And the user inputs <option>
		When the clerk logs in with admin
		When the clerk input create student with <name> and <number> and <email> and <pass> and <status> properly
		Then the student is created
		And the user inputs <logOut>
		Given the university is initialized
		And the course registration period starts
		And the user inputs <soption>
    	When the student logs in with <semail> <spassword>
    	Then the student is logged in
    	And the student take course with code <coursecode>
    	And student register course for code <courseRegisterCode>
    	Then the student is registered for course
    	And the term properly started
    	And the student attempts to deregister course <deregisterCode>
    	Then the student degistered from the course
		
		
		Examples:
		|option|name|number|email|pass|status|logOut|soption|semail|spassword|coursecode|courseRegisterCode|deregisterCode|
		|clerk|tithy|223456|tothy@gmail|12345|full time|log out|student|tothy@gmail|12345|112233|112233|112233| 
		
Scenario Outline: Student tried to deregister during the registration period invalid

		Given the university is initialized
		And the term is started
		And the user inputs <option>
		When the clerk logs in with admin
		When the clerk input create student with <name> and <number> and <email> and <pass> and <status> properly
		Then the student is created
		And the user inputs <logOut>
		Given the university is initialized
		And the course registration period starts
		And the user inputs <soption>
    	When the student logs in with <semail> <spassword>
    	Then the student is logged in
    	And the student take course with code <coursecode>
    	And student register course for code <courseRegisterCode>
    	Then the student is registered for course
    	And the student attempts to deregister course <deregisterCode>
    	Then the student can not be degistered from the course
    	
    	Examples:
		|option|name|number|email|pass|status|logOut|soption|semail|spassword|coursecode|courseRegisterCode|deregisterCode|
		|clerk|tithy|223456|tothy@gmail|12345|full time|log out|student|tothy@gmail|12345|112233|112233|112233| 

Scenario Outline: Student tried to deregister before the registration starts invalid
		
		Given the university is initialized
		And the term is started
		And the user inputs <option>
		When the clerk logs in with admin
		When the clerk input create student with <name> and <number> and <email> and <pass> and <status> properly
		Then the student is created
		And the clerk input create course with <title> and <code> and <capacity> and <hasFinal> and <assignment> and <midterm> and <prerequisite> and <hasProject>
		Then the course is created
		And the user inputs <logOut>
		Given the university is initialized
		And the user inputs <soption>
    	When the student logs in with <semail> <spassword>
    	Then the student is logged in
    	And the student take course with code <coursecode>
    	And the student tried to deregister course 
    	Then the student can not be degistered from the course
    	
    	Examples:
		|option|name|number|email|pass|status|title|code|capacity|hasFinal|assignment|midterm|prerequisite|hasProject|logOut|soption|semail|spassword|coursecode|
		|clerk|tithy|223456|tothy@gmail|12345|full time|OOP|888888|27|true|2|1|false|true|log out|student|tothy@gmail|12345|888888| 
		
Scenario Outline: Student tried to deregister after the deregistration period invalid
		
		Given the university is initialized
		And the term is started
		And the user inputs <option>
		When the clerk logs in with admin
		When the clerk input create student with <name> and <number> and <email> and <pass> and <status> properly
		Then the student is created
		And the user inputs <logOut>
		Given the university is initialized
		And the course registration period starts
		And the user inputs <soption>
    	When the student logs in with <semail> <spassword>
    	Then the student is logged in
    	And the student take course with code <coursecode>
    	And student register course for code <courseRegisterCode>
    	Then the student is registered for course
    	And the term properly started
    	And the deregistration period is over
    	And the student attempts to deregister course <deregisterCode>
    	Then the student can not be degistered from the course
		
		
		Examples:
		|option|name|number|email|pass|status|logOut|soption|semail|spassword|coursecode|courseRegisterCode|deregisterCode|
		|clerk|tithy|223456|tothy@gmail|12345|full time|log out|student|tothy@gmail|12345|112233|112233|112233| 