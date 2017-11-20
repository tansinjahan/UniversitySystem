$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumbertest/course_creation.feature");
formatter.feature({
  "name": "Course creation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Course creation successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "name": "the clerk input create course with \u003ctitle\u003e and \u003ccode\u003e and \u003ccapacity\u003e and \u003chasFinal\u003e and \u003cassignment\u003e and \u003cmidterm\u003e and \u003cprerequisite\u003e and \u003chasProject\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the course is created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "hasFinal",
        "assignment",
        "midterm",
        "prerequisite",
        "hasProject"
      ]
    },
    {
      "cells": [
        "OOP",
        "112347",
        "27",
        "true",
        "2",
        "1",
        "false",
        "true"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Course creation successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk input create course with OOP and 112347 and 27 and true and 2 and 1 and false and true",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_input_create_course_with_OOP_and_and_and_true_and_and_and_false_and_true(String,String,String,String,String,String,String,String,Boolean)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the course is created",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_is_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Remove course success",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "name": "the clerk input cancel course with code \u003ccode\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the course is deleted",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "code"
      ]
    },
    {
      "cells": [
        "112233"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Remove course success",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk input cancel course with code 112233",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_input_cancel_course_with_code(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the course is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_is_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Remove non-existent course fails",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "name": "the clerk input cancel course with code \u003ccode\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the course can not be deleted",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "code"
      ]
    },
    {
      "cells": [
        "112247"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Remove non-existent course fails",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk input cancel course with code 112247",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_input_cancel_course_with_code(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the course can not be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_can_not_be_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Redundant Course creation unsuccessfull",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "name": "the clerk input create course with \u003ctitle\u003e and \u003ccode\u003e and \u003ccapacity\u003e and \u003chasFinal\u003e and \u003cassignment\u003e and \u003cmidterm\u003e and \u003cprerequisite\u003e and \u003chasProject\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "check if the course \u003ccode\u003e is already exists",
  "keyword": "And "
});
formatter.step({
  "name": "the course can not be created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "hasFinal",
        "assignment",
        "midterm",
        "prerequisite",
        "hasProject"
      ]
    },
    {
      "cells": [
        "Data Structure",
        "112233",
        "27",
        "true",
        "2",
        "2",
        "false",
        "true"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Redundant Course creation unsuccessfull",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk input create course with Data Structure and 112233 and 27 and true and 2 and 2 and false and true",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_input_create_course_with_OOP_and_and_and_true_and_and_and_false_and_true(String,String,String,String,String,String,String,String,Boolean)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check if the course 112233 is already exists",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.check_if_the_course_is_already_exists(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the course can not be created",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_can_not_be_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Remove course too late fails",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "name": "the term is end",
  "keyword": "And "
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "name": "the clerk input cancel course with code \u003ccode\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the course can not be deleted",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "code"
      ]
    },
    {
      "cells": [
        "112233"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Remove course too late fails",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the term is end",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_end()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk input cancel course with code 112233",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_input_cancel_course_with_code(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the course can not be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_can_not_be_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("cucumbertest/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Clerk login success",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Clerk login fail",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "name": "the clerk logs in with \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "the clerk is not logged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password"
      ]
    },
    {
      "cells": [
        "123456"
      ]
    },
    {
      "cells": [
        "asdfgh"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Clerk login fail",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk logs in with 123456",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_is_not_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Clerk login fail",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk logs in with asdfgh",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_is_not_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Student login success",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "name": "the student logs in with \u003cemail\u003e \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "jim@gotham",
        "12345"
      ]
    },
    {
      "cells": [
        "lee@gotham",
        "12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Student login success",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_student()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the student logs in with jim@gotham 12345",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Student login success",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_student()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the student logs in with lee@gotham 12345",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Student login fails",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "name": "the student logs in with \u003cemail\u003e \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "j@gotham",
        "12345"
      ]
    },
    {
      "cells": [
        "l@gotham",
        "12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Student login fails",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_student()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the student logs in with j@gotham 12345",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Student login fails",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_student()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the student logs in with l@gotham 12345",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("cucumbertest/student_creation.feature");
formatter.feature({
  "name": "Student creation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Student creation successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "name": "the student is created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "email",
        "pass",
        "status"
      ]
    },
    {
      "cells": [
        "tansin",
        "56789",
        "ta@gmail",
        "12345",
        "full time"
      ]
    },
    {
      "cells": [
        "anwar",
        "34567",
        "a@gmail",
        "12345",
        "full time"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Student creation successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk input create student with tansin and 56789 and ta@gmail and 12345 and full time properly",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the student is created",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Student creation successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk input create student with anwar and 34567 and a@gmail and 12345 and full time properly",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the student is created",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Delete student success",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "name": "the clerk input delete student with number \u003cnumber\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the student is deleted",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "number"
      ]
    },
    {
      "cells": [
        "123123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Delete student success",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk input delete student with number 123123",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_input_delete_student_with_number(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the student is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Remove non-existent student fails",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "name": "the clerk input delete student with number \u003cnumber\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the student can not be deleted",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "number"
      ]
    },
    {
      "cells": [
        "122123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Remove non-existent student fails",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk input delete student with number 122123",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_input_delete_student_with_number(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the student can not be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_can_not_be_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Redundant student creation fails",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "name": "check if the student \u003cnumber\u003e is already created",
  "keyword": "And "
});
formatter.step({
  "name": "the duplicate student can not be created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "email",
        "pass",
        "status"
      ]
    },
    {
      "cells": [
        "jim",
        "123123",
        "jim@gotham",
        "12345",
        "part time"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Redundant student creation fails",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk input create student with jim and 123123 and jim@gotham and 12345 and part time properly",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check if the student 123123 is already created",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.check_if_the_student_is_already_created(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the duplicate student can not be created",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_duplicate_student_can_not_be_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Delete student too late fails",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "name": "course registration term is started",
  "keyword": "And "
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "name": "the clerk input delete student with number \u003cnumber\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the student can not be deleted",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "code"
      ]
    },
    {
      "cells": [
        "123123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Delete student too late fails",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the term is started",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "course registration term is started",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.course_registration_term_is_started()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the clerk input delete student with number \u003cnumber\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_input_delete_student_with_number(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the student can not be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_can_not_be_deleted()"
});
formatter.result({
  "status": "passed"
});
});