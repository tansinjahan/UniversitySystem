Feature: Student registration in courses

Scenario Outline: student register for courses before deadline valid
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
		
		
		Examples:
		|option|name|number|email|pass|status|logOut|soption|semail|spassword|coursecode|courseRegisterCode|
		|clerk|tithy|223456|tothy@gmail|12345|full time|log out|student|tothy@gmail|12345|112233|112233|
		
Scenario Outline: student register for courses after deadline invalid
		Given the university is initialized
		And the term is started
		And the user inputs <option>
		When the clerk logs in with admin
		And the clerk input create course with <title> and <code> and <capacity> and <hasFinal> and <assignment> and <midterm> and <prerequisite> and <hasProject>
		And the course is created
		When the clerk input create student with <name> and <number> and <email> and <pass> and <status> properly
		Then the student is created
		And the course registration period starts
		And the user inputs <logOut>
		Given the university is initialized
		And the user inputs <soptions>
    	When the student logs in with <semail> <spassword>
    	Then the student is logged in
    	And the student take course with code <coursecode>
    	And the term properly started
    	And student register course for code <courseRegisterCode>
    	Then the student can not registered for course
		
		Examples:
		|option|title|code|capacity|hasFinal|assignment|midterm|prerequisite|hasProject|name|number|email|pass|status|logOut|soptions|semail|spassword|coursecode|courseRegisterCode|
		|clerk|OOP|112347|27|true|2|1|false|true|tithy|223456|tothy@gmail|12345|full time|log out|student|tothy@gmail|12345|112347|112347|
		
Scenario Outline: student register for courses before selecting courses invalid
		
		Given the university is initialized
		And the term is started
		And the user inputs <option>
		When the clerk logs in with admin
		And the clerk input create course with <title> and <code> and <capacity> and <hasFinal> and <assignment> and <midterm> and <prerequisite> and <hasProject>
		And the course is created
		When the clerk input create student with <name> and <number> and <email> and <pass> and <status> properly
		Then the student is created
		And the course registration period starts
		And the user inputs <logOut>
		Given the university is initialized
		And the user inputs <soptions>
    	When the student logs in with <semail> <spassword>
    	Then the student is logged in
    	And the student tried to register course
    	Then the student can not registered for course
		
		Examples:
		|option|title|code|capacity|hasFinal|assignment|midterm|prerequisite|hasProject|name|number|email|pass|status|logOut|soptions|semail|spassword|courseRegisterCode|
		|clerk|OOP|100000|27|true|2|1|false|true|tithy|223456|tothy@gmail|12345|full time|log out|student|tothy@gmail|12345|100000|
		
		
Scenario Outline: student register for courses before registration period starts invalid
		
		Given the university is initialized
		And the term is started
		And the user inputs <option>
		When the clerk logs in with admin
		And the clerk input create course with <title> and <code> and <capacity> and <hasFinal> and <assignment> and <midterm> and <prerequisite> and <hasProject>
		And the course is created
		When the clerk input create student with <name> and <number> and <email> and <pass> and <status> properly
		Then the student is created
		And the user inputs <logOut>
		Given the university is initialized
		And the user inputs <soptions>
    	When the student logs in with <semail> <spassword>
    	Then the student is logged in
    	And the student take course with code <coursecode>
    	And student register course for code <courseRegisterCode>
    	Then the student can not registered for course
    	
    	Examples:
		|option|title|code|capacity|hasFinal|assignment|midterm|prerequisite|hasProject|name|number|email|pass|status|logOut|soptions|semail|spassword|coursecode|courseRegisterCode|
		|clerk|OOP|112347|27|true|2|1|false|true|tithy|223456|tothy@gmail|12345|full time|log out|student|tothy@gmail|12345|112347|112347|
		
Scenario Outline: Full time student tried to register for more than four courses invalid
		Given the university is initialized
		And the term is started
		And the user inputs <option>
		When the clerk logs in with admin
		And the clerk input create course with <title> and <code> and <capacity> and <hasFinal> and <assignment> and <midterm> and <prerequisite> and <hasProject>
		And the course is created
		When the clerk input create student with <name> and <number> and <email> and <pass> and <status> properly
		Then the student is created
		And the course registration period starts
		And the user inputs <logOut>
		Given the university is initialized
		And the user inputs <soptions>
    	When the student logs in with <semail> <spassword>
    	Then the student is logged in
    	And the student take course with code <coursecode1>
    	And student register course for code <RegisterCode1>
    	And the student take course with code <coursecode2>
    	And student register course for code <RegisterCode2>
    	And the student take course with code <coursecode3>
    	And student register course for code <RegisterCode3>
    	And the student take course with code <coursecode4>
    	And student register course for code <RegisterCode4>
    	And the student take course with code <coursecode5>
    	And student register course for code <courseRegisterCode5>
    	Then the student can not registered for course
		
		Examples:
		|option|title|code|capacity|hasFinal|assignment|midterm|prerequisite|hasProject|name|number|email|pass|status|logOut|soptions|semail|spassword|coursecode1|RegisterCode1|coursecode2|RegisterCode2|coursecode3|RegisterCode3|coursecode4|RegisterCode4|coursecode5|courseRegisterCode5|
		|clerk|OOP|999999|27|true|2|1|false|true|tithy|223456|tothy@gmail|12345|full time|log out|student|tothy@gmail|12345|112233|112233|223344|223344|334455|334455|445566|445566|999999|999999|
		