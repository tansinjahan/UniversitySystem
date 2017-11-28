Feature: Temporal relationship 
Scenario Outline: Temporal relationship between creation of student, course, registration valid
	Given the university is initialized
	And the term is started
	And the user inputs <option>
	When the clerk logs in with admin
	And the clerk input create course with <title> and <code> and <capacity> and <hasFinal> and <assignment> and <midterm> and <prerequisite> and <hasProject>
	Then the course is created
	When the clerk input create student with <name> and <number> and <email> and <pass> and <status> properly
	Then the student is created
	And the clerk input create course with <title2> and <code2> and <capacity2> and <hasFinal2> and <assignment2> and <midterm2> and <prerequisite2> and <hasProject2>
	Then the course is created
	When the clerk input create student with <name2> and <number2> and <email2> and <pass2> and <status2> properly
	Then the student is created
	And the clerk input delete student with number <number1>
	Then the student is deleted
	When the clerk input create student with <name3> and <number3> and <email3> and <pass3> and <status3> properly
	Then the student is created
	And the clerk input create course with <title3> and <code3> and <capacity3> and <hasFinal3> and <assignment3> and <midterm3> and <prerequisite3> and <hasProject3>
	Then the course is created
	And the clerk input cancel course with code <code1>
	Then the course is deleted
	And the user inputs <logOut>
	Given the university is initialized
	And the course registration period starts
	And the user inputs <soption>
    When the student logs in with <semail2> <spassword2>
    Then the student is logged in
    And the student take course with code <coursecode2>
    And the user inputs <logOut>
	Given the university is initialized
	And the user inputs <soption>
    When the student logs in with <semail3> <spassword3>
    Then the student is logged in
    And the student take course with code <coursecode3>
    And the user inputs <logOut>
	Given the university is initialized
	And the user inputs <soption>
    When the student logs in with <semail3> <spassword3>
    Then the student is logged in
    And the student take course with code <coursecode2>
    And the user inputs <logOut>
	Given the university is initialized
	And the user inputs <soption>
    When the student logs in with <semail2> <spassword2>
    Then the student is logged in
    And the student take course with code <coursecode3>
    And the user inputs <logOut>
	Given the university is initialized
	And the user inputs <soption>
	When the student logs in with <semail3> <spassword3>
    Then the student is logged in
	And student register course for code <coursecode2>
    Then the student is registered for course
    And the user inputs <logOut>
	Given the university is initialized
	And the user inputs <soption>
	When the student logs in with <semail2> <spassword2>
    Then the student is logged in
	And student register course for code <coursecode3>
    Then the student is registered for course
    And the user inputs <logOut>
	Given the university is initialized
	And the user inputs <soption>
	When the student logs in with <semail3> <spassword3>
    Then the student is logged in
	And student register course for code <coursecode3>
    Then the student is registered for course
    And the user inputs <logOut>
	Given the university is initialized
	And the user inputs <soption>
	When the student logs in with <semail2> <spassword2>
    Then the student is logged in
	And student register course for code <coursecode2>
    Then the student is registered for course
    And the user inputs <logOut>
	Given the university is initialized
	And the term properly started
	And the user inputs <soption>
	When the student logs in with <semail2> <spassword2>
    Then the student is logged in
    And the student attempts to deregister course <coursecode3>
    Then the student degistered from the course
    And the deregistration period is over
    And the user inputs <logOut>
	Given the university is initialized
	And the user inputs <soption>
	When the student logs in with <semail2> <spassword2>
    Then the student is logged in
    And the student drop course for <coursecode2>
    Then the course has been dropped by student
    Then the term end event occurs
	
	Examples:
	|option|title|code|capacity|hasFinal|assignment|midterm|prerequisite|hasProject|name|number|email|pass|status|title2|code2|capacity2|hasFinal2|assignment2|midterm2|prerequisite2|hasProject2|name2|number2|email2|pass2|status2|number1|name3|number3|email3|pass3|status3|title3|code3|capacity3|hasFinal3|assignment3|midterm3|prerequisite3|hasProject3|code1|logOut|soption|semail2|spassword2|coursecode2|semail3|spassword3|coursecode3|
	|clerk|OOP|112347|27|true|2|1|false|true|tansin|56789|ta@gmail|12345|full time|Data Science|110347|28|true|2|1|false|true|Shishir|16780|an@gmail|12345|full time|56789|Tonnee|16380|ton@gmail|12345|full time|Software|102348|26|false|2|1|false|true|112347|log out|student|an@gmail|12345|110347|ton@gmail|12345|102348|