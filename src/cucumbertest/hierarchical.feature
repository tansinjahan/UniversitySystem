Feature: students mark obtain
Scenario Outline: students mark obtained after assignment,final,mid,project,final calculated for course
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
    	And the user inputs <logOut>
		Given the university is initialized
		And the user inputs <option>
		When the clerk logs in with admin
		And the user inputs <moption>
		And the clerk gives input for <coursecode> <studentNum>
		Then the assignment marks is generated
		And the user inputs <midoption>
		And the clerk gives input for <coursecode> <studentNum>
		Then the mid term mark is generated
		And the user inputs <projectoption>
		And the clerk gives input for <coursecode> <studentNum>
		Then the project mark is generated
		And the user inputs <finaloption>
		And the clerk gives input for <coursecode> <studentNum>
		Then the final mark is generated
		And the user inputs <obtainMark>
		And the clerk gives input for <coursecode> <studentNum>
		Then the marks obtained successful
		
		 
		
		Examples:
		|option|name|number|email|pass|status|logOut|soption|semail|spassword|coursecode|courseRegisterCode|moption|coursecode|studentNum|midoption|projectoption|finaloption|obtainMark|
		|clerk|tithy|223456|tothy@gmail|12345|full time|log out|student|tothy@gmail|12345|343434|343434|generate assign. mark|343434|223456|generate mid mark|generate project mark|generate final mark|obtain mark|

Scenario Outline: Marks can not be obtained before assignment+mid+project+final is calculated
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
    	And the user inputs <logOut>
		Given the university is initialized
		And the user inputs <option>
		When the clerk logs in with admin
		And the user inputs <moption>
		And the clerk gives input for <coursecode> <studentNum>
		Then the assignment marks is generated
		And the user inputs <midoption>
		And the clerk gives input for <coursecode> <studentNum>
		Then the mid term mark is generated
		And the user inputs <obtainMark>
		And the clerk gives input for <coursecode> <studentNum>
		Then the mark can not be obtained
		
		Examples:
		|option|name|number|email|pass|status|logOut|soption|semail|spassword|coursecode|courseRegisterCode|moption|coursecode|studentNum|midoption|obtainMark|
		|clerk|tithy|223456|tothy@gmail|12345|full time|log out|student|tothy@gmail|12345|343434|343434|generate assign. mark|343434|223456|generate mid mark|obtain mark|
		
Scenario Outline: Project marks of student can not be generated if the project course has not been taken
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
    	And the user inputs <logOut>
		Given the university is initialized
		And the user inputs <option>
		When the clerk logs in with admin
		And the user inputs <moption>
		And the clerk gives input for <coursecode> <studentNum>
		Then the assignment marks is generated
		And the user inputs <midoption>
		And the clerk gives input for <coursecode> <studentNum>
		Then the mid term mark is generated
		And the user inputs <projectoption>
		And the clerk gives input for <coursecode> <studentNum>
		Then the project marks can not be calculated
		
		Examples:
		
		|option|name|number|email|pass|status|logOut|soption|semail|spassword|coursecode|courseRegisterCode|moption|coursecode|studentNum|midoption|projectoption|
		|clerk|tithy|223456|tothy@gmail|12345|full time|log out|student|tothy@gmail|12345|445566|445566|generate assign. mark|445566|223456|generate mid mark|generate project mark|
		
Scenario Outline: two students mark obtained for 2 courses 
		Given the university is initialized
		And the term is started
		And the user inputs <option>
		When the clerk logs in with admin
		When the clerk input create student with <name> and <number> and <email> and <pass> and <status> properly
		Then the student is created
		When the clerk input create student with <name2> and <number2> and <email2> and <pass2> and <status2> properly
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
    	And the user inputs <logOut>
		Given the university is initialized
		And the user inputs <soption>
    	When the student logs in with <semail1> <spassword1>
    	Then the student is logged in
    	And the student take course with code <coursecode1>
    	And student register course for code <courseRegisterCode1>
    	Then the student is registered for course
    	And the user inputs <logOut>
		Given the university is initialized
		And the user inputs <option>
		When the clerk logs in with admin
		And the user inputs <moption>
		And the clerk gives input for <coursecode> <studentNum>
		Then the assignment marks is generated
		And the user inputs <midoption>
		And the clerk gives input for <coursecode1> <studentNum1>
		Then the mid term mark is generated
		And the user inputs <midoption>
		And the clerk gives input for <coursecode> <studentNum>
		Then the mid term mark is generated
		When the clerk logs in with admin
		And the user inputs <moption>
		And the clerk gives input for <coursecode1> <studentNum1>
		Then the assignment marks is generated
		And the user inputs <projectoption>
		And the clerk gives input for <coursecode> <studentNum>
		Then the project mark is generated
		And the user inputs <finaloption>
		And the clerk gives input for <coursecode> <studentNum>
		Then the final mark is generated
		And the user inputs <finaloption>
		And the clerk gives input for <coursecode1> <studentNum1>
		Then the final mark is generated
		And the user inputs <obtainMark>
		And the clerk gives input for <coursecode> <studentNum>
		Then the marks obtained successful
		And the user inputs <obtainMark>
		And the clerk gives input for <coursecode1> <studentNum1>
		Then the marks obtained successful
		
		 
		
		Examples:
		|option|name|number|email|pass|status|logOut|soption|semail|spassword|coursecode|courseRegisterCode|moption|coursecode|studentNum|midoption|projectoption|finaloption|obtainMark|name2|number2|email2|pass2|status2|semail1|spassword1|coursecode1|courseRegisterCode1|studentNum1|
		|clerk|tithy|223456|tothy@gmail|12345|full time|log out|student|tothy@gmail|12345|343434|343434|generate assign. mark|343434|223456|generate mid mark|generate project mark|generate final mark|obtain mark|shishir|678900|an@gmail|12345|part time|an@gmail|12345|223344|223344|678900|