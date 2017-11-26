Feature: Student register,drop,deregister from course before term end 

Scenario Outline: Student tried to drop course after term ends invalid
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
    	And the term end event occurs
    	And the student drop course for <dropCode>
    	Then the course can not be dropped by student
    	
    	Examples:
		|option|name|number|email|pass|status|logOut|soption|semail|spassword|coursecode|courseRegisterCode|dropCode|
		|clerk|tithy|223456|tothy@gmail|12345|full time|log out|student|tothy@gmail|12345|112233|112233|112233| 
		
Scenario Outline: Student tried to deregister after term ends invalid
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
    	And the term end event occurs
    	And the student attempts to deregister course <deregisterCode>
    	Then the student can not be degistered from the course
    	
    	Examples:
		|option|name|number|email|pass|status|logOut|soption|semail|spassword|coursecode|courseRegisterCode|deregisterCode|
		|clerk|tithy|223456|tothy@gmail|12345|full time|log out|student|tothy@gmail|12345|112233|112233|112233| 