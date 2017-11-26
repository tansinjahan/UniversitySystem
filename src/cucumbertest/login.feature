Feature: Login
	
  Scenario Outline: Clerk login success
    Given the university is initialized
   	And the user inputs <option>
    When the clerk logs in with admin
    Then the clerk is logged in
    
    Examples:
    |option|
    |clerk|
  
  Scenario Outline: Clerk login fail
    Given the university is initialized
    And the user inputs <option>
    When the clerk logs in with <password>
    Then the clerk is not logged in
    
    Examples:
    |option| password |
    |clerk| 123456   |
    |clerk| asdfgh   |
    
  Scenario Outline: Student login success
   	Given the university is initialized
   	And the term is started 
    And the user inputs <option>
    When the student logs in with <email> <password>
    Then the student is logged in
    
    Examples:
   	|option|email|password|
    |student|lee@gotham|12345|
 
   Scenario Outline: Student login fails
   	Given the university is initialized
   	And the user inputs <option>
    When the student logs in with <email> <password>
    Then the student is not logged in
    
    Examples:
    |option|email|password|
    |student|j@gotham|12345|
    |student|l@gotham|12345|
    
    
