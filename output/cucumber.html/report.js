$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumbertest/Deregistration.feature");
formatter.feature({
  "line": 1,
  "name": "Student Deregistration",
  "description": "",
  "id": "student-deregistration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Student deregister upto two weeks after start term success",
  "description": "",
  "id": "student-deregistration;student-deregister-upto-two-weeks-after-start-term-success",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the student take course with code \u003ccoursecode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "student register course for code \u003ccourseRegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the term properly started",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the student attempts to deregister course \u003cderegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the student degistered from the course",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "student-deregistration;student-deregister-upto-two-weeks-after-start-term-success;",
  "rows": [
    {
      "cells": [
        "option",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "logOut",
        "soption",
        "semail",
        "spassword",
        "coursecode",
        "courseRegisterCode",
        "deregisterCode"
      ],
      "line": 24,
      "id": "student-deregistration;student-deregister-upto-two-weeks-after-start-term-success;;1"
    },
    {
      "cells": [
        "clerk",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "112233",
        "112233",
        "112233"
      ],
      "line": 25,
      "id": "student-deregistration;student-deregister-upto-two-weeks-after-start-term-success;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3745780,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Student deregister upto two weeks after start term success",
  "description": "",
  "id": "student-deregistration;student-deregister-upto-two-weeks-after-start-term-success;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user inputs student",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the student take course with code 112233",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "student register course for code 112233",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the term properly started",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the student attempts to deregister course 112233",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the student degistered from the course",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 218694319,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 41751130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 3661335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 259556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 1722223,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 2435112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 83555,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 29333,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 81778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 78667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 393778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 146666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "112233",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 1316001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "112233",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 931555,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 40445,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_properly_started()"
});
formatter.result({
  "duration": 89778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 24
    },
    {
      "val": "112233",
      "offset": 42
    }
  ],
  "location": "cucumberStepDefinitions.the_student_attempts_to_deregister_course(String,String)"
});
formatter.result({
  "duration": 400444,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_degistered_from_the_course()"
});
formatter.result({
  "duration": 44445,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Student tried to deregister during the registration period invalid",
  "description": "",
  "id": "student-deregistration;student-tried-to-deregister-during-the-registration-period-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "the student take course with code \u003ccoursecode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "student register course for code \u003ccourseRegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "the student attempts to deregister course \u003cderegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the student can not be degistered from the course",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "student-deregistration;student-tried-to-deregister-during-the-registration-period-invalid;",
  "rows": [
    {
      "cells": [
        "option",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "logOut",
        "soption",
        "semail",
        "spassword",
        "coursecode",
        "courseRegisterCode",
        "deregisterCode"
      ],
      "line": 48,
      "id": "student-deregistration;student-tried-to-deregister-during-the-registration-period-invalid;;1"
    },
    {
      "cells": [
        "clerk",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "112233",
        "112233",
        "112233"
      ],
      "line": 49,
      "id": "student-deregistration;student-tried-to-deregister-during-the-registration-period-invalid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39555,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Student tried to deregister during the registration period invalid",
  "description": "",
  "id": "student-deregistration;student-tried-to-deregister-during-the-registration-period-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs student",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "the student take course with code 112233",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "student register course for code 112233",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "the student attempts to deregister course 112233",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the student can not be degistered from the course",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 34222,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 12420005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 73334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 102667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 874667,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 59556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 81778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 53778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 77333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 155555,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 67556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "112233",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 873333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "112233",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 792001,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 29333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 24
    },
    {
      "val": "112233",
      "offset": 42
    }
  ],
  "location": "cucumberStepDefinitions.the_student_attempts_to_deregister_course(String,String)"
});
formatter.result({
  "duration": 295111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_can_not_be_degistered_from_the_course()"
});
formatter.result({
  "duration": 36889,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 51,
  "name": "Student tried to deregister before the registration starts invalid",
  "description": "",
  "id": "student-deregistration;student-tried-to-deregister-before-the-registration-starts-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "the clerk input create course with \u003ctitle\u003e and \u003ccode\u003e and \u003ccapacity\u003e and \u003chasFinal\u003e and \u003cassignment\u003e and \u003cmidterm\u003e and \u003cprerequisite\u003e and \u003chasProject\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the course is created",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "the student take course with code \u003ccoursecode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the student tried to deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the student can not be degistered from the course",
  "keyword": "Then "
});
formatter.examples({
  "line": 70,
  "name": "",
  "description": "",
  "id": "student-deregistration;student-tried-to-deregister-before-the-registration-starts-invalid;",
  "rows": [
    {
      "cells": [
        "option",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "title",
        "code",
        "capacity",
        "hasFinal",
        "assignment",
        "midterm",
        "prerequisite",
        "hasProject",
        "logOut",
        "soption",
        "semail",
        "spassword",
        "coursecode"
      ],
      "line": 71,
      "id": "student-deregistration;student-tried-to-deregister-before-the-registration-starts-invalid;;1"
    },
    {
      "cells": [
        "clerk",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "OOP",
        "888888",
        "27",
        "true",
        "2",
        "1",
        "false",
        "true",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "888888"
      ],
      "line": 72,
      "id": "student-deregistration;student-tried-to-deregister-before-the-registration-starts-invalid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41777,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Student tried to deregister before the registration starts invalid",
  "description": "",
  "id": "student-deregistration;student-tried-to-deregister-before-the-registration-starts-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "the clerk input create course with OOP and 888888 and 27 and true and 2 and 1 and false and true",
  "matchedColumns": [
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the course is created",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "the user inputs log out",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "the user inputs student",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    16,
    17
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "the student take course with code 888888",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the student tried to deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the student can not be degistered from the course",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 28445,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 15003563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 69334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 207111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 844444,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 66223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    },
    {
      "val": "OOP",
      "offset": 35
    },
    {
      "val": "888888",
      "offset": 43
    },
    {
      "val": "27",
      "offset": 54
    },
    {
      "val": "true",
      "offset": 61
    },
    {
      "val": "2",
      "offset": 70
    },
    {
      "val": "1",
      "offset": 76
    },
    {
      "val": "false",
      "offset": 82
    },
    {
      "val": "true",
      "offset": 92
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_course_with_OOP_and_and_and_true_and_and_and_false_and_true(String,String,String,String,String,String,String,String,Boolean)"
});
formatter.result({
  "duration": 2839112,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_is_created()"
});
formatter.result({
  "duration": 44000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 124444,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 24889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 66666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 1389779,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 150667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "888888",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 4215557,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_tried_to_deregister_course()"
});
formatter.result({
  "duration": 55111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_can_not_be_degistered_from_the_course()"
});
formatter.result({
  "duration": 31111,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 74,
  "name": "Student tried to deregister after the deregistration period invalid",
  "description": "",
  "id": "student-deregistration;student-tried-to-deregister-after-the-deregistration-period-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "the student take course with code \u003ccoursecode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "student register course for code \u003ccourseRegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "the term properly started",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the deregistration period is over",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the student attempts to deregister course \u003cderegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "the student can not be degistered from the course",
  "keyword": "Then "
});
formatter.examples({
  "line": 97,
  "name": "",
  "description": "",
  "id": "student-deregistration;student-tried-to-deregister-after-the-deregistration-period-invalid;",
  "rows": [
    {
      "cells": [
        "option",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "logOut",
        "soption",
        "semail",
        "spassword",
        "coursecode",
        "courseRegisterCode",
        "deregisterCode"
      ],
      "line": 98,
      "id": "student-deregistration;student-tried-to-deregister-after-the-deregistration-period-invalid;;1"
    },
    {
      "cells": [
        "clerk",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "112233",
        "112233",
        "112233"
      ],
      "line": 99,
      "id": "student-deregistration;student-tried-to-deregister-after-the-deregistration-period-invalid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38666,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "Student tried to deregister after the deregistration period invalid",
  "description": "",
  "id": "student-deregistration;student-tried-to-deregister-after-the-deregistration-period-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the user inputs student",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "the student take course with code 112233",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "student register course for code 112233",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "the term properly started",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the deregistration period is over",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the student attempts to deregister course 112233",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "the student can not be degistered from the course",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 30222,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 19044897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 90222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 94222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 2337779,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 144889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 65778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 53778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 126667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 66667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 222667,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 122223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "112233",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 828001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "112233",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 762667,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 32889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_properly_started()"
});
formatter.result({
  "duration": 127111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_deregistration_period_is_over()"
});
formatter.result({
  "duration": 134667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 24
    },
    {
      "val": "112233",
      "offset": 42
    }
  ],
  "location": "cucumberStepDefinitions.the_student_attempts_to_deregister_course(String,String)"
});
formatter.result({
  "duration": 281333,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_can_not_be_degistered_from_the_course()"
});
formatter.result({
  "duration": 37778,
  "status": "passed"
});
formatter.uri("cucumbertest/DropCourse.feature");
formatter.feature({
  "line": 1,
  "name": "Student drop course",
  "description": "",
  "id": "student-drop-course",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Student drop course after 2 weeks of start term success",
  "description": "",
  "id": "student-drop-course;student-drop-course-after-2-weeks-of-start-term-success",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the student take course with code \u003ccoursecode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "student register course for code \u003ccourseRegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the term properly started",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the deregistration period is over",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the student drop course for \u003cdropCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the course has been dropped by student",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "student-drop-course;student-drop-course-after-2-weeks-of-start-term-success;",
  "rows": [
    {
      "cells": [
        "option",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "logOut",
        "soption",
        "semail",
        "spassword",
        "coursecode",
        "courseRegisterCode",
        "dropCode"
      ],
      "line": 25,
      "id": "student-drop-course;student-drop-course-after-2-weeks-of-start-term-success;;1"
    },
    {
      "cells": [
        "clerk",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "112233",
        "112233",
        "112233"
      ],
      "line": 26,
      "id": "student-drop-course;student-drop-course-after-2-weeks-of-start-term-success;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40444,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Student drop course after 2 weeks of start term success",
  "description": "",
  "id": "student-drop-course;student-drop-course-after-2-weeks-of-start-term-success;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user inputs student",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the student take course with code 112233",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "student register course for code 112233",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the term properly started",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the deregistration period is over",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the student drop course for 112233",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the course has been dropped by student",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 49778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 17948452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 79111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 85778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 804889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 53334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 93778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 24444,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 51112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 149778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 148445,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 45778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "112233",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 1971112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "112233",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 737334,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 47556,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_properly_started()"
});
formatter.result({
  "duration": 123556,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_deregistration_period_is_over()"
});
formatter.result({
  "duration": 103556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 12
    },
    {
      "val": "112233",
      "offset": 28
    }
  ],
  "location": "cucumberStepDefinitions.the_student_drop_course_for(String,String)"
});
formatter.result({
  "duration": 742223,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_has_been_dropped_by_student()"
});
formatter.result({
  "duration": 52889,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Student tried to drop course in the deregistration period invalid",
  "description": "",
  "id": "student-drop-course;student-tried-to-drop-course-in-the-deregistration-period-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "the student take course with code \u003ccoursecode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "student register course for code \u003ccourseRegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "the term properly started",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the student drop course for \u003cdropCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the course can not be dropped by student",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "student-drop-course;student-tried-to-drop-course-in-the-deregistration-period-invalid;",
  "rows": [
    {
      "cells": [
        "option",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "logOut",
        "soption",
        "semail",
        "spassword",
        "coursecode",
        "courseRegisterCode",
        "dropCode"
      ],
      "line": 50,
      "id": "student-drop-course;student-tried-to-drop-course-in-the-deregistration-period-invalid;;1"
    },
    {
      "cells": [
        "clerk",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "112233",
        "112233",
        "112233"
      ],
      "line": 51,
      "id": "student-drop-course;student-tried-to-drop-course-in-the-deregistration-period-invalid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 36444,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Student tried to drop course in the deregistration period invalid",
  "description": "",
  "id": "student-drop-course;student-tried-to-drop-course-in-the-deregistration-period-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs student",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "the student take course with code 112233",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "student register course for code 112233",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "the term properly started",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the student drop course for 112233",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the course can not be dropped by student",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 28000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 9231115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 489778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 168889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 699112,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 46666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 70667,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 29333,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 48444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 54222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 220000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 129333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "112233",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 3842669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "112233",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 646222,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 28445,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_properly_started()"
});
formatter.result({
  "duration": 682223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 12
    },
    {
      "val": "112233",
      "offset": 28
    }
  ],
  "location": "cucumberStepDefinitions.the_student_drop_course_for(String,String)"
});
formatter.result({
  "duration": 204444,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_can_not_be_dropped_by_student()"
});
formatter.result({
  "duration": 41778,
  "status": "passed"
});
formatter.uri("cucumbertest/course_creation.feature");
formatter.feature({
  "line": 1,
  "name": "Course creation",
  "description": "",
  "id": "course-creation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Course creation successful",
  "description": "",
  "id": "course-creation;course-creation-successful",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the clerk input create course with \u003ctitle\u003e and \u003ccode\u003e and \u003ccapacity\u003e and \u003chasFinal\u003e and \u003cassignment\u003e and \u003cmidterm\u003e and \u003cprerequisite\u003e and \u003chasProject\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the course is created",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "course-creation;course-creation-successful;",
  "rows": [
    {
      "cells": [
        "option",
        "title",
        "code",
        "capacity",
        "hasFinal",
        "assignment",
        "midterm",
        "prerequisite",
        "hasProject"
      ],
      "line": 12,
      "id": "course-creation;course-creation-successful;;1"
    },
    {
      "cells": [
        "clerk",
        "OOP",
        "112347",
        "27",
        "true",
        "2",
        "1",
        "false",
        "true"
      ],
      "line": 13,
      "id": "course-creation;course-creation-successful;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38222,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Course creation successful",
  "description": "",
  "id": "course-creation;course-creation-successful;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the clerk input create course with OOP and 112347 and 27 and true and 2 and 1 and false and true",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the course is created",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 30222,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 19175564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 60888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 200444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    },
    {
      "val": "OOP",
      "offset": 35
    },
    {
      "val": "112347",
      "offset": 43
    },
    {
      "val": "27",
      "offset": 54
    },
    {
      "val": "true",
      "offset": 61
    },
    {
      "val": "2",
      "offset": 70
    },
    {
      "val": "1",
      "offset": 76
    },
    {
      "val": "false",
      "offset": 82
    },
    {
      "val": "true",
      "offset": 92
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_course_with_OOP_and_and_and_true_and_and_and_false_and_true(String,String,String,String,String,String,String,String,Boolean)"
});
formatter.result({
  "duration": 2013779,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_is_created()"
});
formatter.result({
  "duration": 28445,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Remove course success",
  "description": "",
  "id": "course-creation;remove-course-success",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the clerk input cancel course with code \u003ccode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the course is deleted",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "course-creation;remove-course-success;",
  "rows": [
    {
      "cells": [
        "option",
        "code"
      ],
      "line": 24,
      "id": "course-creation;remove-course-success;;1"
    },
    {
      "cells": [
        "clerk",
        "112233"
      ],
      "line": 25,
      "id": "course-creation;remove-course-success;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34222,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Remove course success",
  "description": "",
  "id": "course-creation;remove-course-success;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the clerk input cancel course with code 112233",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the course is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 28889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 8345782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 67556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 88889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 16
    },
    {
      "val": "112233",
      "offset": 40
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_cancel_course_with_code(String,String)"
});
formatter.result({
  "duration": 788889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_is_deleted()"
});
formatter.result({
  "duration": 40889,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Remove non-existent course fails",
  "description": "",
  "id": "course-creation;remove-non-existent-course-fails",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the clerk input cancel course with code \u003ccode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the course can not be deleted",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "course-creation;remove-non-existent-course-fails;",
  "rows": [
    {
      "cells": [
        "option",
        "code"
      ],
      "line": 36,
      "id": "course-creation;remove-non-existent-course-fails;;1"
    },
    {
      "cells": [
        "clerk",
        "112247"
      ],
      "line": 37,
      "id": "course-creation;remove-non-existent-course-fails;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37778,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Remove non-existent course fails",
  "description": "",
  "id": "course-creation;remove-non-existent-course-fails;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the clerk input cancel course with code 112247",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the course can not be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 28445,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 9028448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 53333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 80445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 16
    },
    {
      "val": "112247",
      "offset": 40
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_cancel_course_with_code(String,String)"
});
formatter.result({
  "duration": 215111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_can_not_be_deleted()"
});
formatter.result({
  "duration": 45778,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "Redundant Course creation unsuccessfull",
  "description": "",
  "id": "course-creation;redundant-course-creation-unsuccessfull",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the clerk input create course with \u003ctitle\u003e and \u003ccode\u003e and \u003ccapacity\u003e and \u003chasFinal\u003e and \u003cassignment\u003e and \u003cmidterm\u003e and \u003cprerequisite\u003e and \u003chasProject\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the clerk input create course with \u003ctitle\u003e and \u003ccode\u003e and \u003ccapacity\u003e and \u003chasFinal\u003e and \u003cassignment\u003e and \u003cmidterm\u003e and \u003cprerequisite\u003e and \u003chasProject\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the course can not be created",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "course-creation;redundant-course-creation-unsuccessfull;",
  "rows": [
    {
      "cells": [
        "option",
        "title",
        "code",
        "capacity",
        "hasFinal",
        "assignment",
        "midterm",
        "prerequisite",
        "hasProject"
      ],
      "line": 50,
      "id": "course-creation;redundant-course-creation-unsuccessfull;;1"
    },
    {
      "cells": [
        "clerk",
        "Data Structure",
        "112233",
        "27",
        "true",
        "2",
        "2",
        "false",
        "true"
      ],
      "line": 51,
      "id": "course-creation;redundant-course-creation-unsuccessfull;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 33333,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Redundant Course creation unsuccessfull",
  "description": "",
  "id": "course-creation;redundant-course-creation-unsuccessfull;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the clerk input create course with Data Structure and 112233 and 27 and true and 2 and 2 and false and true",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the clerk input create course with Data Structure and 112233 and 27 and true and 2 and 2 and false and true",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the course can not be created",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 460000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 8105337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 71556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 80444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    },
    {
      "val": "Data Structure",
      "offset": 35
    },
    {
      "val": "112233",
      "offset": 54
    },
    {
      "val": "27",
      "offset": 65
    },
    {
      "val": "true",
      "offset": 72
    },
    {
      "val": "2",
      "offset": 81
    },
    {
      "val": "2",
      "offset": 87
    },
    {
      "val": "false",
      "offset": 93
    },
    {
      "val": "true",
      "offset": 103
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_course_with_OOP_and_and_and_true_and_and_and_false_and_true(String,String,String,String,String,String,String,String,Boolean)"
});
formatter.result({
  "duration": 373334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    },
    {
      "val": "Data Structure",
      "offset": 35
    },
    {
      "val": "112233",
      "offset": 54
    },
    {
      "val": "27",
      "offset": 65
    },
    {
      "val": "true",
      "offset": 72
    },
    {
      "val": "2",
      "offset": 81
    },
    {
      "val": "2",
      "offset": 87
    },
    {
      "val": "false",
      "offset": 93
    },
    {
      "val": "true",
      "offset": 103
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_course_with_OOP_and_and_and_true_and_and_and_false_and_true(String,String,String,String,String,String,String,String,Boolean)"
});
formatter.result({
  "duration": 431556,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_can_not_be_created()"
});
formatter.result({
  "duration": 38666,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "Remove course too late fails",
  "description": "",
  "id": "course-creation;remove-course-too-late-fails",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the clerk input cancel course with code \u003ccode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the course can not be deleted",
  "keyword": "Then "
});
formatter.examples({
  "line": 62,
  "name": "",
  "description": "",
  "id": "course-creation;remove-course-too-late-fails;",
  "rows": [
    {
      "cells": [
        "option",
        "code"
      ],
      "line": 63,
      "id": "course-creation;remove-course-too-late-fails;;1"
    },
    {
      "cells": [
        "clerk",
        "112233"
      ],
      "line": 64,
      "id": "course-creation;remove-course-too-late-fails;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37334,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Remove course too late fails",
  "description": "",
  "id": "course-creation;remove-course-too-late-fails;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the clerk input cancel course with code 112233",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the course can not be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 35556,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 8900004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 54667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 143556,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 121333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 16
    },
    {
      "val": "112233",
      "offset": 40
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_cancel_course_with_code(String,String)"
});
formatter.result({
  "duration": 142222,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_can_not_be_deleted()"
});
formatter.result({
  "duration": 22666,
  "status": "passed"
});
formatter.uri("cucumbertest/hierarchical.feature");
formatter.feature({
  "line": 1,
  "name": "students mark obtain",
  "description": "",
  "id": "students-mark-obtain",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "students mark obtained after assignment,final,mid,project,final calculated for course",
  "description": "",
  "id": "students-mark-obtain;students-mark-obtained-after-assignment,final,mid,project,final-calculated-for-course",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the student take course with code \u003ccoursecode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "student register course for code \u003ccourseRegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the user inputs \u003cmoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk gives input for \u003ccoursecode\u003e \u003cstudentNum\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the assignment marks is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the user inputs \u003cmidoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the clerk gives input for \u003ccoursecode\u003e \u003cstudentNum\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the mid term mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "the user inputs \u003cprojectoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the clerk gives input for \u003ccoursecode\u003e \u003cstudentNum\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the project mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "the user inputs \u003cfinaloption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk gives input for \u003ccoursecode\u003e \u003cstudentNum\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the final mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "the user inputs \u003cobtainMark\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the clerk gives input for \u003ccoursecode\u003e \u003cstudentNum\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the marks obtained successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "students-mark-obtain;students-mark-obtained-after-assignment,final,mid,project,final-calculated-for-course;",
  "rows": [
    {
      "cells": [
        "option",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "logOut",
        "soption",
        "semail",
        "spassword",
        "coursecode",
        "courseRegisterCode",
        "moption",
        "coursecode",
        "studentNum",
        "midoption",
        "projectoption",
        "finaloption",
        "obtainMark"
      ],
      "line": 41,
      "id": "students-mark-obtain;students-mark-obtained-after-assignment,final,mid,project,final-calculated-for-course;;1"
    },
    {
      "cells": [
        "clerk",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "343434",
        "343434",
        "generate assign. mark",
        "343434",
        "223456",
        "generate mid mark",
        "generate project mark",
        "generate final mark",
        "obtain mark"
      ],
      "line": 42,
      "id": "students-mark-obtain;students-mark-obtained-after-assignment,final,mid,project,final-calculated-for-course;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44000,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "students mark obtained after assignment,final,mid,project,final calculated for course",
  "description": "",
  "id": "students-mark-obtain;students-mark-obtained-after-assignment,final,mid,project,final-calculated-for-course;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user inputs student",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the student take course with code 343434",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "student register course for code 343434",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the user inputs generate assign. mark",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk gives input for 343434 223456",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the assignment marks is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the user inputs generate mid mark",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the clerk gives input for 343434 223456",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the mid term mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "the user inputs generate project mark",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the clerk gives input for 343434 223456",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the project mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "the user inputs generate final mark",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk gives input for 343434 223456",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the final mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "the user inputs obtain mark",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the clerk gives input for 343434 223456",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the marks obtained successful",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 21778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 16625341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 58667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 88889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 695556,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 47555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 44889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 17778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 41778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 48889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 129778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 41778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "343434",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 918667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "343434",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 663112,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 32000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 51111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 15556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 45778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 143556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generate assign. mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 62222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "343434",
      "offset": 26
    },
    {
      "val": "223456",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 231555,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_assignment_marks_is_generated()"
});
formatter.result({
  "duration": 44889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generate mid mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 53333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "343434",
      "offset": 26
    },
    {
      "val": "223456",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 184445,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_mid_term_mark_is_generated()"
});
formatter.result({
  "duration": 41333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generate project mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 57777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "343434",
      "offset": 26
    },
    {
      "val": "223456",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 211111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_project_mark_is_generated()"
});
formatter.result({
  "duration": 31556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generate final mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 52889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "343434",
      "offset": 26
    },
    {
      "val": "223456",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 208889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_final_mark_is_generated()"
});
formatter.result({
  "duration": 38222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "obtain mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 48889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "343434",
      "offset": 26
    },
    {
      "val": "223456",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 271112,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_marks_obtained_successful()"
});
formatter.result({
  "duration": 177334,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "Marks can not be obtained before assignment+mid+project+final is calculated",
  "description": "",
  "id": "students-mark-obtain;marks-can-not-be-obtained-before-assignment+mid+project+final-is-calculated",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "the student take course with code \u003ccoursecode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "student register course for code \u003ccourseRegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "the user inputs \u003cmoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the clerk gives input for \u003ccoursecode\u003e \u003cstudentNum\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the assignment marks is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "the user inputs \u003cmidoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the clerk gives input for \u003ccoursecode\u003e \u003cstudentNum\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the mid term mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "the user inputs \u003cobtainMark\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "the clerk gives input for \u003ccoursecode\u003e \u003cstudentNum\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the mark can not be obtained",
  "keyword": "Then "
});
formatter.examples({
  "line": 74,
  "name": "",
  "description": "",
  "id": "students-mark-obtain;marks-can-not-be-obtained-before-assignment+mid+project+final-is-calculated;",
  "rows": [
    {
      "cells": [
        "option",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "logOut",
        "soption",
        "semail",
        "spassword",
        "coursecode",
        "courseRegisterCode",
        "moption",
        "coursecode",
        "studentNum",
        "midoption",
        "obtainMark"
      ],
      "line": 75,
      "id": "students-mark-obtain;marks-can-not-be-obtained-before-assignment+mid+project+final-is-calculated;;1"
    },
    {
      "cells": [
        "clerk",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "343434",
        "343434",
        "generate assign. mark",
        "343434",
        "223456",
        "generate mid mark",
        "obtain mark"
      ],
      "line": 76,
      "id": "students-mark-obtain;marks-can-not-be-obtained-before-assignment+mid+project+final-is-calculated;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 56445,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Marks can not be obtained before assignment+mid+project+final is calculated",
  "description": "",
  "id": "students-mark-obtain;marks-can-not-be-obtained-before-assignment+mid+project+final-is-calculated;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs student",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "the student take course with code 343434",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "student register course for code 343434",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "the user inputs generate assign. mark",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the clerk gives input for 343434 223456",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the assignment marks is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "the user inputs generate mid mark",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the clerk gives input for 343434 223456",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the mid term mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "the user inputs obtain mark",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "the clerk gives input for 343434 223456",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the mark can not be obtained",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 25778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 8923115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 54222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 189333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 772001,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 100889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 62223,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 17333,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 45778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 48444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 113778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 44000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "343434",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 675556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "343434",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 713778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 29778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 54222,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 18222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 51112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 88000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generate assign. mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 51555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "343434",
      "offset": 26
    },
    {
      "val": "223456",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 165333,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_assignment_marks_is_generated()"
});
formatter.result({
  "duration": 27111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generate mid mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 49778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "343434",
      "offset": 26
    },
    {
      "val": "223456",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 164000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_mid_term_mark_is_generated()"
});
formatter.result({
  "duration": 25778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "obtain mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 47556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "343434",
      "offset": 26
    },
    {
      "val": "223456",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 234222,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_mark_can_not_be_obtained()"
});
formatter.result({
  "duration": 42222,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 78,
  "name": "Project marks of student can not be generated if the project course has not been taken",
  "description": "",
  "id": "students-mark-obtain;project-marks-of-student-can-not-be-generated-if-the-project-course-has-not-been-taken",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 79,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "the student take course with code \u003ccoursecode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "student register course for code \u003ccourseRegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "the user inputs \u003cmoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the clerk gives input for \u003ccoursecode\u003e \u003cstudentNum\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the assignment marks is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "the user inputs \u003cmidoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the clerk gives input for \u003ccoursecode\u003e \u003cstudentNum\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "the mid term mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "the user inputs \u003cprojectoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the clerk gives input for \u003ccoursecode\u003e \u003cstudentNum\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the project marks can not be calculated",
  "keyword": "Then "
});
formatter.examples({
  "line": 108,
  "name": "",
  "description": "",
  "id": "students-mark-obtain;project-marks-of-student-can-not-be-generated-if-the-project-course-has-not-been-taken;",
  "rows": [
    {
      "cells": [
        "option",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "logOut",
        "soption",
        "semail",
        "spassword",
        "coursecode",
        "courseRegisterCode",
        "moption",
        "coursecode",
        "studentNum",
        "midoption",
        "projectoption"
      ],
      "line": 110,
      "id": "students-mark-obtain;project-marks-of-student-can-not-be-generated-if-the-project-course-has-not-been-taken;;1"
    },
    {
      "cells": [
        "clerk",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "445566",
        "445566",
        "generate assign. mark",
        "445566",
        "223456",
        "generate mid mark",
        "generate project mark"
      ],
      "line": 111,
      "id": "students-mark-obtain;project-marks-of-student-can-not-be-generated-if-the-project-course-has-not-been-taken;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37333,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Project marks of student can not be generated if the project course has not been taken",
  "description": "",
  "id": "students-mark-obtain;project-marks-of-student-can-not-be-generated-if-the-project-course-has-not-been-taken;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 79,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the user inputs student",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "the student take course with code 445566",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "student register course for code 445566",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "the user inputs generate assign. mark",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the clerk gives input for 445566 223456",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the assignment marks is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "the user inputs generate mid mark",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the clerk gives input for 445566 223456",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "the mid term mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "the user inputs generate project mark",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the clerk gives input for 445566 223456",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the project marks can not be calculated",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 20889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 14661340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 98667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 492000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 624000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 57777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 60000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 20889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 51112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 56445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 126222,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 48000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "445566",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 648000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "445566",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 550667,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 27555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 49334,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 17777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 62223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 184889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generate assign. mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 53777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "445566",
      "offset": 26
    },
    {
      "val": "223456",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 164001,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_assignment_marks_is_generated()"
});
formatter.result({
  "duration": 27556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generate mid mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 52000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "445566",
      "offset": 26
    },
    {
      "val": "223456",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 168889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_mid_term_mark_is_generated()"
});
formatter.result({
  "duration": 27555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generate project mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 53777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "445566",
      "offset": 26
    },
    {
      "val": "223456",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 265333,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_project_marks_can_not_be_calculated()"
});
formatter.result({
  "duration": 43111,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 113,
  "name": "two students mark obtained for 2 courses",
  "description": "",
  "id": "students-mark-obtain;two-students-mark-obtained-for-2-courses",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "the clerk input create student with \u003cname2\u003e and \u003cnumber2\u003e and \u003cemail2\u003e and \u003cpass2\u003e and \u003cstatus2\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 124,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "the student take course with code \u003ccoursecode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "student register course for code \u003ccourseRegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the student logs in with \u003csemail1\u003e \u003cspassword1\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "the student take course with code \u003ccoursecode1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "student register course for code \u003ccourseRegisterCode1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 141,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "the user inputs \u003cmoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the clerk gives input for \u003ccoursecode\u003e \u003cstudentNum\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "the assignment marks is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "the user inputs \u003cmidoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "the clerk gives input for \u003ccoursecode1\u003e \u003cstudentNum1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "the mid term mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "the user inputs \u003cmidoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "the clerk gives input for \u003ccoursecode\u003e \u003cstudentNum\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "the mid term mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "the user inputs \u003cmoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "the clerk gives input for \u003ccoursecode1\u003e \u003cstudentNum1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "the assignment marks is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "the user inputs \u003cprojectoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "the clerk gives input for \u003ccoursecode\u003e \u003cstudentNum\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "the project mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 159,
  "name": "the user inputs \u003cfinaloption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "the clerk gives input for \u003ccoursecode\u003e \u003cstudentNum\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "the final mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 162,
  "name": "the user inputs \u003cfinaloption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "the clerk gives input for \u003ccoursecode1\u003e \u003cstudentNum1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "the final mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 165,
  "name": "the user inputs \u003cobtainMark\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "the clerk gives input for \u003ccoursecode\u003e \u003cstudentNum\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "the marks obtained successful",
  "keyword": "Then "
});
formatter.step({
  "line": 168,
  "name": "the user inputs \u003cobtainMark\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "the clerk gives input for \u003ccoursecode1\u003e \u003cstudentNum1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "the marks obtained successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 174,
  "name": "",
  "description": "",
  "id": "students-mark-obtain;two-students-mark-obtained-for-2-courses;",
  "rows": [
    {
      "cells": [
        "option",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "logOut",
        "soption",
        "semail",
        "spassword",
        "coursecode",
        "courseRegisterCode",
        "moption",
        "coursecode",
        "studentNum",
        "midoption",
        "projectoption",
        "finaloption",
        "obtainMark",
        "name2",
        "number2",
        "email2",
        "pass2",
        "status2",
        "semail1",
        "spassword1",
        "coursecode1",
        "courseRegisterCode1",
        "studentNum1"
      ],
      "line": 175,
      "id": "students-mark-obtain;two-students-mark-obtained-for-2-courses;;1"
    },
    {
      "cells": [
        "clerk",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "343434",
        "343434",
        "generate assign. mark",
        "343434",
        "223456",
        "generate mid mark",
        "generate project mark",
        "generate final mark",
        "obtain mark",
        "shishir",
        "678900",
        "an@gmail",
        "12345",
        "part time",
        "an@gmail",
        "12345",
        "223344",
        "223344",
        "678900"
      ],
      "line": 176,
      "id": "students-mark-obtain;two-students-mark-obtained-for-2-courses;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44889,
  "status": "passed"
});
formatter.scenario({
  "line": 176,
  "name": "two students mark obtained for 2 courses",
  "description": "",
  "id": "students-mark-obtain;two-students-mark-obtained-for-2-courses;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "the clerk input create student with shishir and 678900 and an@gmail and 12345 and part time properly",
  "matchedColumns": [
    19,
    20,
    21,
    22,
    23
  ],
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 124,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "the user inputs student",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "the student take course with code 343434",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "student register course for code 343434",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "the user inputs student",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the student logs in with an@gmail 12345",
  "matchedColumns": [
    24,
    25
  ],
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "the student take course with code 223344",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "student register course for code 223344",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 141,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "the user inputs generate assign. mark",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the clerk gives input for 343434 223456",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "the assignment marks is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "the user inputs generate mid mark",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "the clerk gives input for 223344 678900",
  "matchedColumns": [
    26,
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "the mid term mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "the user inputs generate mid mark",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "the clerk gives input for 343434 223456",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "the mid term mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "the user inputs generate assign. mark",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "the clerk gives input for 223344 678900",
  "matchedColumns": [
    26,
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "the assignment marks is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "the user inputs generate project mark",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "the clerk gives input for 343434 223456",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "the project mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 159,
  "name": "the user inputs generate final mark",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "the clerk gives input for 343434 223456",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "the final mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 162,
  "name": "the user inputs generate final mark",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "the clerk gives input for 223344 678900",
  "matchedColumns": [
    26,
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "the final mark is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 165,
  "name": "the user inputs obtain mark",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "the clerk gives input for 343434 223456",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "the marks obtained successful",
  "keyword": "Then "
});
formatter.step({
  "line": 168,
  "name": "the user inputs obtain mark",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "the clerk gives input for 223344 678900",
  "matchedColumns": [
    26,
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "the marks obtained successful",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 20000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 9108448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 70667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 59112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 582667,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 49333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "shishir",
      "offset": 36
    },
    {
      "val": "678900",
      "offset": 48
    },
    {
      "val": "an@gmail",
      "offset": 59
    },
    {
      "val": "12345",
      "offset": 72
    },
    {
      "val": "part time",
      "offset": 82
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 4077779,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 128889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 846222,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 20000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 107111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 85778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 223556,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 107556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "343434",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 644890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "343434",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 639556,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 28000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 49777,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 35112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 47556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "an@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 105334,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 37778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "223344",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 566667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "223344",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 624000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 26222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 48444,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 2798668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 95555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 1676890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generate assign. mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 54223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "343434",
      "offset": 26
    },
    {
      "val": "223456",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 252444,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_assignment_marks_is_generated()"
});
formatter.result({
  "duration": 22667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generate mid mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 638222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "223344",
      "offset": 26
    },
    {
      "val": "678900",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 199112,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_mid_term_mark_is_generated()"
});
formatter.result({
  "duration": 21333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generate mid mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 42223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "343434",
      "offset": 26
    },
    {
      "val": "223456",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 153778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_mid_term_mark_is_generated()"
});
formatter.result({
  "duration": 22667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 45334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generate assign. mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 32000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "223344",
      "offset": 26
    },
    {
      "val": "678900",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 139111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_assignment_marks_is_generated()"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generate project mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 44000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "343434",
      "offset": 26
    },
    {
      "val": "223456",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 1280001,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_project_mark_is_generated()"
});
formatter.result({
  "duration": 25333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generate final mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 76445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "343434",
      "offset": 26
    },
    {
      "val": "223456",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 533778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_final_mark_is_generated()"
});
formatter.result({
  "duration": 26667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "generate final mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 46223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "223344",
      "offset": 26
    },
    {
      "val": "678900",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 243556,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_final_mark_is_generated()"
});
formatter.result({
  "duration": 24444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "obtain mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 45333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "343434",
      "offset": 26
    },
    {
      "val": "223456",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 228889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_marks_obtained_successful()"
});
formatter.result({
  "duration": 27112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "obtain mark",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 52000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "223344",
      "offset": 26
    },
    {
      "val": "678900",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_gives_input_for(String,int)"
});
formatter.result({
  "duration": 411111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_marks_obtained_successful()"
});
formatter.result({
  "duration": 89777,
  "status": "passed"
});
formatter.uri("cucumbertest/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Clerk login success",
  "description": "",
  "id": "login;clerk-login-success",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the clerk is logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login;clerk-login-success;",
  "rows": [
    {
      "cells": [
        "option"
      ],
      "line": 10,
      "id": "login;clerk-login-success;;1"
    },
    {
      "cells": [
        "clerk"
      ],
      "line": 11,
      "id": "login;clerk-login-success;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1530667,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Clerk login success",
  "description": "",
  "id": "login;clerk-login-success;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the clerk is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 19555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 42222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 152000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_is_logged_in()"
});
formatter.result({
  "duration": 39556,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Clerk login fail",
  "description": "",
  "id": "login;clerk-login-fail",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the clerk logs in with \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the clerk is not logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login;clerk-login-fail;",
  "rows": [
    {
      "cells": [
        "option",
        "password"
      ],
      "line": 20,
      "id": "login;clerk-login-fail;;1"
    },
    {
      "cells": [
        "clerk",
        "123456"
      ],
      "line": 21,
      "id": "login;clerk-login-fail;;2"
    },
    {
      "cells": [
        "clerk",
        "asdfgh"
      ],
      "line": 22,
      "id": "login;clerk-login-fail;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 48444,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Clerk login fail",
  "description": "",
  "id": "login;clerk-login-fail;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the clerk logs in with 123456",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the clerk is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 58666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 40889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 73333,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_is_not_logged_in()"
});
formatter.result({
  "duration": 34667,
  "status": "passed"
});
formatter.before({
  "duration": 24889,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Clerk login fail",
  "description": "",
  "id": "login;clerk-login-fail;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the clerk logs in with asdfgh",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the clerk is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 18223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 44889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdfgh",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 69778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_clerk_is_not_logged_in()"
});
formatter.result({
  "duration": 25778,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Student login success",
  "description": "",
  "id": "login;student-login-success",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the student logs in with \u003cemail\u003e \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "login;student-login-success;",
  "rows": [
    {
      "cells": [
        "option",
        "email",
        "password"
      ],
      "line": 32,
      "id": "login;student-login-success;;1"
    },
    {
      "cells": [
        "student",
        "lee@gotham",
        "12345"
      ],
      "line": 33,
      "id": "login;student-login-success;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25334,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Student login success",
  "description": "",
  "id": "login;student-login-success;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the user inputs student",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the student logs in with lee@gotham 12345",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 17333,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 9963116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 45778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lee@gotham",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 36
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 769334,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 51112,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Student login fails",
  "description": "",
  "id": "login;student-login-fails",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the student logs in with \u003cemail\u003e \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "login;student-login-fails;",
  "rows": [
    {
      "cells": [
        "option",
        "email",
        "password"
      ],
      "line": 42,
      "id": "login;student-login-fails;;1"
    },
    {
      "cells": [
        "student",
        "j@gotham",
        "12345"
      ],
      "line": 43,
      "id": "login;student-login-fails;;2"
    },
    {
      "cells": [
        "student",
        "l@gotham",
        "12345"
      ],
      "line": 44,
      "id": "login;student-login-fails;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23111,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Student login fails",
  "description": "",
  "id": "login;student-login-fails;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the user inputs student",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the student logs in with j@gotham 12345",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 16000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 40889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "j@gotham",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 109777,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 35555,
  "status": "passed"
});
formatter.before({
  "duration": 22666,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Student login fails",
  "description": "",
  "id": "login;student-login-fails;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the user inputs student",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the student logs in with l@gotham 12345",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 14666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 47555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "l@gotham",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 99111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 20000,
  "status": "passed"
});
formatter.uri("cucumbertest/registration.feature");
formatter.feature({
  "line": 1,
  "name": "Student registration in courses",
  "description": "",
  "id": "student-registration-in-courses",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "student register for courses before deadline valid",
  "description": "",
  "id": "student-registration-in-courses;student-register-for-courses-before-deadline-valid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the student take course with code \u003ccoursecode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "student register course for code \u003ccourseRegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "student-registration-in-courses;student-register-for-courses-before-deadline-valid;",
  "rows": [
    {
      "cells": [
        "option",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "logOut",
        "soption",
        "semail",
        "spassword",
        "coursecode",
        "courseRegisterCode"
      ],
      "line": 22,
      "id": "student-registration-in-courses;student-register-for-courses-before-deadline-valid;;1"
    },
    {
      "cells": [
        "clerk",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "112233",
        "112233"
      ],
      "line": 23,
      "id": "student-registration-in-courses;student-register-for-courses-before-deadline-valid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27112,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "student register for courses before deadline valid",
  "description": "",
  "id": "student-registration-in-courses;student-register-for-courses-before-deadline-valid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs student",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the student take course with code 112233",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "student register course for code 112233",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 31111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 7552892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 47111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 156000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 608000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 99556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 45778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 12889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 114667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 43111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 682222,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 100445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "112233",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 658223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "112233",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 599556,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 23556,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "student register for courses after deadline invalid",
  "description": "",
  "id": "student-registration-in-courses;student-register-for-courses-after-deadline-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "the clerk input create course with \u003ctitle\u003e and \u003ccode\u003e and \u003ccapacity\u003e and \u003chasFinal\u003e and \u003cassignment\u003e and \u003cmidterm\u003e and \u003cprerequisite\u003e and \u003chasProject\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the course is created",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the user inputs \u003csoptions\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "the student take course with code \u003ccoursecode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the term properly started",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "student register course for code \u003ccourseRegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the student can not registered for course",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "student-registration-in-courses;student-register-for-courses-after-deadline-invalid;",
  "rows": [
    {
      "cells": [
        "option",
        "title",
        "code",
        "capacity",
        "hasFinal",
        "assignment",
        "midterm",
        "prerequisite",
        "hasProject",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "logOut",
        "soptions",
        "semail",
        "spassword",
        "coursecode",
        "courseRegisterCode"
      ],
      "line": 46,
      "id": "student-registration-in-courses;student-register-for-courses-after-deadline-invalid;;1"
    },
    {
      "cells": [
        "clerk",
        "OOP",
        "112347",
        "27",
        "true",
        "2",
        "1",
        "false",
        "true",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "112347",
        "112347"
      ],
      "line": 47,
      "id": "student-registration-in-courses;student-register-for-courses-after-deadline-invalid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26666,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "student register for courses after deadline invalid",
  "description": "",
  "id": "student-registration-in-courses;student-register-for-courses-after-deadline-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "the clerk input create course with OOP and 112347 and 27 and true and 2 and 1 and false and true",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the course is created",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs log out",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the user inputs student",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    16,
    17
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "the student take course with code 112347",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the term properly started",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "student register course for code 112347",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the student can not registered for course",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 20000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 6950225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 49333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 65333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    },
    {
      "val": "OOP",
      "offset": 35
    },
    {
      "val": "112347",
      "offset": 43
    },
    {
      "val": "27",
      "offset": 54
    },
    {
      "val": "true",
      "offset": 61
    },
    {
      "val": "2",
      "offset": 70
    },
    {
      "val": "1",
      "offset": 76
    },
    {
      "val": "false",
      "offset": 82
    },
    {
      "val": "true",
      "offset": 92
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_course_with_OOP_and_and_and_true_and_and_and_false_and_true(String,String,String,String,String,String,String,String,Boolean)"
});
formatter.result({
  "duration": 4656891,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_is_created()"
});
formatter.result({
  "duration": 27555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 761779,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 49333,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 40889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 110223,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 12444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 64889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 563112,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 47111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "112347",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 938667,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_properly_started()"
});
formatter.result({
  "duration": 123556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "112347",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 516000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_can_not_registered_for_course()"
});
formatter.result({
  "duration": 36445,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 49,
  "name": "student register for courses before selecting courses invalid",
  "description": "",
  "id": "student-registration-in-courses;student-register-for-courses-before-selecting-courses-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "the clerk input create course with \u003ctitle\u003e and \u003ccode\u003e and \u003ccapacity\u003e and \u003chasFinal\u003e and \u003cassignment\u003e and \u003cmidterm\u003e and \u003cprerequisite\u003e and \u003chasProject\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the course is created",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "the user inputs \u003csoptions\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "the student tried to register course",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the student can not registered for course",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "student-registration-in-courses;student-register-for-courses-before-selecting-courses-invalid;",
  "rows": [
    {
      "cells": [
        "option",
        "title",
        "code",
        "capacity",
        "hasFinal",
        "assignment",
        "midterm",
        "prerequisite",
        "hasProject",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "logOut",
        "soptions",
        "semail",
        "spassword",
        "courseRegisterCode"
      ],
      "line": 69,
      "id": "student-registration-in-courses;student-register-for-courses-before-selecting-courses-invalid;;1"
    },
    {
      "cells": [
        "clerk",
        "OOP",
        "100000",
        "27",
        "true",
        "2",
        "1",
        "false",
        "true",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "100000"
      ],
      "line": 70,
      "id": "student-registration-in-courses;student-register-for-courses-before-selecting-courses-invalid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 49778,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "student register for courses before selecting courses invalid",
  "description": "",
  "id": "student-registration-in-courses;student-register-for-courses-before-selecting-courses-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "the clerk input create course with OOP and 100000 and 27 and true and 2 and 1 and false and true",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the course is created",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs log out",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "the user inputs student",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    16,
    17
  ],
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "the student tried to register course",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the student can not registered for course",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 13778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 7501781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 43556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 184889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    },
    {
      "val": "OOP",
      "offset": 35
    },
    {
      "val": "100000",
      "offset": 43
    },
    {
      "val": "27",
      "offset": 54
    },
    {
      "val": "true",
      "offset": 61
    },
    {
      "val": "2",
      "offset": 70
    },
    {
      "val": "1",
      "offset": 76
    },
    {
      "val": "false",
      "offset": 82
    },
    {
      "val": "true",
      "offset": 92
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_course_with_OOP_and_and_and_true_and_and_and_false_and_true(String,String,String,String,String,String,String,String,Boolean)"
});
formatter.result({
  "duration": 4115557,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_is_created()"
});
formatter.result({
  "duration": 23111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 580444,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 98667,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 73778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 36444,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 8000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 28445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 4409779,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 90667,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_tried_to_register_course()"
});
formatter.result({
  "duration": 105333,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_can_not_registered_for_course()"
});
formatter.result({
  "duration": 198223,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 73,
  "name": "student register for courses before registration period starts invalid",
  "description": "",
  "id": "student-registration-in-courses;student-register-for-courses-before-registration-period-starts-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "the clerk input create course with \u003ctitle\u003e and \u003ccode\u003e and \u003ccapacity\u003e and \u003chasFinal\u003e and \u003cassignment\u003e and \u003cmidterm\u003e and \u003cprerequisite\u003e and \u003chasProject\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the course is created",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "the user inputs \u003csoptions\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "the student take course with code \u003ccoursecode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "student register course for code \u003ccourseRegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the student can not registered for course",
  "keyword": "Then "
});
formatter.examples({
  "line": 92,
  "name": "",
  "description": "",
  "id": "student-registration-in-courses;student-register-for-courses-before-registration-period-starts-invalid;",
  "rows": [
    {
      "cells": [
        "option",
        "title",
        "code",
        "capacity",
        "hasFinal",
        "assignment",
        "midterm",
        "prerequisite",
        "hasProject",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "logOut",
        "soptions",
        "semail",
        "spassword",
        "coursecode",
        "courseRegisterCode"
      ],
      "line": 93,
      "id": "student-registration-in-courses;student-register-for-courses-before-registration-period-starts-invalid;;1"
    },
    {
      "cells": [
        "clerk",
        "OOP",
        "112347",
        "27",
        "true",
        "2",
        "1",
        "false",
        "true",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "112347",
        "112347"
      ],
      "line": 94,
      "id": "student-registration-in-courses;student-register-for-courses-before-registration-period-starts-invalid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 51111,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "student register for courses before registration period starts invalid",
  "description": "",
  "id": "student-registration-in-courses;student-register-for-courses-before-registration-period-starts-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "the clerk input create course with OOP and 112347 and 27 and true and 2 and 1 and false and true",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the course is created",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "the user inputs log out",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "the user inputs student",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    16,
    17
  ],
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "the student take course with code 112347",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "student register course for code 112347",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the student can not registered for course",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 15111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 7712447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 160889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 44889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    },
    {
      "val": "OOP",
      "offset": 35
    },
    {
      "val": "112347",
      "offset": 43
    },
    {
      "val": "27",
      "offset": 54
    },
    {
      "val": "true",
      "offset": 61
    },
    {
      "val": "2",
      "offset": 70
    },
    {
      "val": "1",
      "offset": 76
    },
    {
      "val": "false",
      "offset": 82
    },
    {
      "val": "true",
      "offset": 92
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_course_with_OOP_and_and_and_true_and_and_and_false_and_true(String,String,String,String,String,String,String,String,Boolean)"
});
formatter.result({
  "duration": 1691112,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_is_created()"
});
formatter.result({
  "duration": 24444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 532889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 35555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 29334,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 9778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 32889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 181778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 458667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "112347",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 563111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "112347",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 236444,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_can_not_registered_for_course()"
});
formatter.result({
  "duration": 24889,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 96,
  "name": "Full time student tried to register for more than four courses invalid",
  "description": "",
  "id": "student-registration-in-courses;full-time-student-tried-to-register-for-more-than-four-courses-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 97,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "the clerk input create course with \u003ctitle\u003e and \u003ccode\u003e and \u003ccapacity\u003e and \u003chasFinal\u003e and \u003cassignment\u003e and \u003cmidterm\u003e and \u003cprerequisite\u003e and \u003chasProject\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the course is created",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 108,
  "name": "the user inputs \u003csoptions\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "the student take course with code \u003ccoursecode1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "student register course for code \u003cRegisterCode1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "the student take course with code \u003ccoursecode2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "student register course for code \u003cRegisterCode2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "the student take course with code \u003ccoursecode3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "student register course for code \u003cRegisterCode3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "the student take course with code \u003ccoursecode4\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "student register course for code \u003cRegisterCode4\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "the student take course with code \u003ccoursecode5\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "student register course for code \u003ccourseRegisterCode5\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "the student can not registered for course",
  "keyword": "Then "
});
formatter.examples({
  "line": 123,
  "name": "",
  "description": "",
  "id": "student-registration-in-courses;full-time-student-tried-to-register-for-more-than-four-courses-invalid;",
  "rows": [
    {
      "cells": [
        "option",
        "title",
        "code",
        "capacity",
        "hasFinal",
        "assignment",
        "midterm",
        "prerequisite",
        "hasProject",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "logOut",
        "soptions",
        "semail",
        "spassword",
        "coursecode1",
        "RegisterCode1",
        "coursecode2",
        "RegisterCode2",
        "coursecode3",
        "RegisterCode3",
        "coursecode4",
        "RegisterCode4",
        "coursecode5",
        "courseRegisterCode5"
      ],
      "line": 124,
      "id": "student-registration-in-courses;full-time-student-tried-to-register-for-more-than-four-courses-invalid;;1"
    },
    {
      "cells": [
        "clerk",
        "OOP",
        "999999",
        "27",
        "true",
        "2",
        "1",
        "false",
        "true",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "112233",
        "112233",
        "223344",
        "223344",
        "334455",
        "334455",
        "445566",
        "445566",
        "999999",
        "999999"
      ],
      "line": 125,
      "id": "student-registration-in-courses;full-time-student-tried-to-register-for-more-than-four-courses-invalid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27111,
  "status": "passed"
});
formatter.scenario({
  "line": 125,
  "name": "Full time student tried to register for more than four courses invalid",
  "description": "",
  "id": "student-registration-in-courses;full-time-student-tried-to-register-for-more-than-four-courses-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 97,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "the clerk input create course with OOP and 999999 and 27 and true and 2 and 1 and false and true",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the course is created",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the user inputs log out",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 108,
  "name": "the user inputs student",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    16,
    17
  ],
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "the student take course with code 112233",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "student register course for code 112233",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "the student take course with code 223344",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "student register course for code 223344",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "the student take course with code 334455",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "student register course for code 334455",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "the student take course with code 445566",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "student register course for code 445566",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "the student take course with code 999999",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "student register course for code 999999",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "the student can not registered for course",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 14222,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 7098225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 35111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 117777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    },
    {
      "val": "OOP",
      "offset": 35
    },
    {
      "val": "999999",
      "offset": 43
    },
    {
      "val": "27",
      "offset": 54
    },
    {
      "val": "true",
      "offset": 61
    },
    {
      "val": "2",
      "offset": 70
    },
    {
      "val": "1",
      "offset": 76
    },
    {
      "val": "false",
      "offset": 82
    },
    {
      "val": "true",
      "offset": 92
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_course_with_OOP_and_and_and_true_and_and_and_false_and_true(String,String,String,String,String,String,String,String,Boolean)"
});
formatter.result({
  "duration": 1676001,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_is_created()"
});
formatter.result({
  "duration": 25778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 1152890,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 464444,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 85333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 35111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 9333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 29778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 202667,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 118667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "112233",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 834223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "112233",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 575556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "223344",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 1022667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "223344",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 808445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "334455",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 665334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "334455",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 988889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "445566",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 627112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "445566",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 4640446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "999999",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 65841363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "999999",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 1292889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_can_not_registered_for_course()"
});
formatter.result({
  "duration": 22667,
  "status": "passed"
});
formatter.uri("cucumbertest/student_creation.feature");
formatter.feature({
  "line": 1,
  "name": "Student creation",
  "description": "",
  "id": "student-creation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Student creation successful",
  "description": "",
  "id": "student-creation;student-creation-successful",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs \u003coptions\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "student-creation;student-creation-successful;",
  "rows": [
    {
      "cells": [
        "options",
        "name",
        "number",
        "email",
        "pass",
        "status"
      ],
      "line": 12,
      "id": "student-creation;student-creation-successful;;1"
    },
    {
      "cells": [
        "clerk",
        "tansin",
        "56789",
        "ta@gmail",
        "12345",
        "full time"
      ],
      "line": 13,
      "id": "student-creation;student-creation-successful;;2"
    },
    {
      "cells": [
        "clerk",
        "anwar",
        "34567",
        "a@gmail",
        "12345",
        "full time"
      ],
      "line": 14,
      "id": "student-creation;student-creation-successful;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25334,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Student creation successful",
  "description": "",
  "id": "student-creation;student-creation-successful;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the clerk input create student with tansin and 56789 and ta@gmail and 12345 and full time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 15111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 7258670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 32889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 118222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tansin",
      "offset": 36
    },
    {
      "val": "56789",
      "offset": 47
    },
    {
      "val": "ta@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 70
    },
    {
      "val": "full time",
      "offset": 80
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 580445,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 90667,
  "status": "passed"
});
formatter.before({
  "duration": 25778,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Student creation successful",
  "description": "",
  "id": "student-creation;student-creation-successful;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the clerk input create student with anwar and 34567 and a@gmail and 12345 and full time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 8889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 6520892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 26667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 111111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "anwar",
      "offset": 36
    },
    {
      "val": "34567",
      "offset": 46
    },
    {
      "val": "a@gmail",
      "offset": 56
    },
    {
      "val": "12345",
      "offset": 68
    },
    {
      "val": "full time",
      "offset": 78
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 549334,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 76889,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Delete student success",
  "description": "",
  "id": "student-creation;delete-student-success",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the clerk input delete student with number \u003cnumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the student is deleted",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "student-creation;delete-student-success;",
  "rows": [
    {
      "cells": [
        "option",
        "number"
      ],
      "line": 25,
      "id": "student-creation;delete-student-success;;1"
    },
    {
      "cells": [
        "clerk",
        "123123"
      ],
      "line": 26,
      "id": "student-creation;delete-student-success;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 50222,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Delete student success",
  "description": "",
  "id": "student-creation;delete-student-success;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the clerk input delete student with number 123123",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the student is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 11555,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 36407572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 10222227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 160889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 16
    },
    {
      "val": "123123",
      "offset": 43
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_delete_student_with_number(String,String)"
});
formatter.result({
  "duration": 604889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_deleted()"
});
formatter.result({
  "duration": 27556,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Remove non-existent student fails",
  "description": "",
  "id": "student-creation;remove-non-existent-student-fails",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the clerk input delete student with number \u003cnumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the student can not be deleted",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "student-creation;remove-non-existent-student-fails;",
  "rows": [
    {
      "cells": [
        "option",
        "number"
      ],
      "line": 37,
      "id": "student-creation;remove-non-existent-student-fails;;1"
    },
    {
      "cells": [
        "clerk",
        "122123"
      ],
      "line": 38,
      "id": "student-creation;remove-non-existent-student-fails;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 30223,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Remove non-existent student fails",
  "description": "",
  "id": "student-creation;remove-non-existent-student-fails;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the clerk input delete student with number 122123",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the student can not be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 8444,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 14734673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 27556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 112889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 16
    },
    {
      "val": "122123",
      "offset": 43
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_delete_student_with_number(String,String)"
});
formatter.result({
  "duration": 225334,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_can_not_be_deleted()"
});
formatter.result({
  "duration": 32444,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "Redundant student creation fails",
  "description": "",
  "id": "student-creation;redundant-student-creation-fails",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the duplicate student can not be created",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "student-creation;redundant-student-creation-fails;",
  "rows": [
    {
      "cells": [
        "option",
        "name",
        "number",
        "email",
        "pass",
        "status"
      ],
      "line": 50,
      "id": "student-creation;redundant-student-creation-fails;;1"
    },
    {
      "cells": [
        "clerk",
        "jim",
        "123123",
        "jim@gotham",
        "12345",
        "part time"
      ],
      "line": 51,
      "id": "student-creation;redundant-student-creation-fails;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 30223,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Redundant student creation fails",
  "description": "",
  "id": "student-creation;redundant-student-creation-fails;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the clerk input create student with jim and 123123 and jim@gotham and 12345 and part time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "the clerk input create student with jim and 123123 and jim@gotham and 12345 and part time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the duplicate student can not be created",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 10223,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 8150226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 30667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 105333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "jim",
      "offset": 36
    },
    {
      "val": "123123",
      "offset": 44
    },
    {
      "val": "jim@gotham",
      "offset": 55
    },
    {
      "val": "12345",
      "offset": 70
    },
    {
      "val": "part time",
      "offset": 80
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 249777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "jim",
      "offset": 36
    },
    {
      "val": "123123",
      "offset": 44
    },
    {
      "val": "jim@gotham",
      "offset": 55
    },
    {
      "val": "12345",
      "offset": 70
    },
    {
      "val": "part time",
      "offset": 80
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 313778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_duplicate_student_can_not_be_created()"
});
formatter.result({
  "duration": 33333,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "Delete student too late fails",
  "description": "",
  "id": "student-creation;delete-student-too-late-fails",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "course registration term is started",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "the clerk input delete student with number \u003cnumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the student can not be deleted",
  "keyword": "Then "
});
formatter.examples({
  "line": 62,
  "name": "",
  "description": "",
  "id": "student-creation;delete-student-too-late-fails;",
  "rows": [
    {
      "cells": [
        "option",
        "code"
      ],
      "line": 63,
      "id": "student-creation;delete-student-too-late-fails;;1"
    },
    {
      "cells": [
        "clerk",
        "123123"
      ],
      "line": 64,
      "id": "student-creation;delete-student-too-late-fails;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 28444,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Delete student too late fails",
  "description": "",
  "id": "student-creation;delete-student-too-late-fails;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "course registration term is started",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "the clerk input delete student with number \u003cnumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the student can not be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 8445,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 39032906,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.course_registration_term_is_started()"
});
formatter.result({
  "duration": 44001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 34667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 16
    },
    {
      "val": "\u003cnumber\u003e",
      "offset": 43
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_delete_student_with_number(String,String)"
});
formatter.result({
  "duration": 175555,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_can_not_be_deleted()"
});
formatter.result({
  "duration": 18223,
  "status": "passed"
});
formatter.uri("cucumbertest/temporal.feature");
formatter.feature({
  "line": 1,
  "name": "Temporal relationship",
  "description": "",
  "id": "temporal-relationship",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Temporal relationship between creation of student, course, registration valid",
  "description": "",
  "id": "temporal-relationship;temporal-relationship-between-creation-of-student,-course,-registration-valid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the clerk input create course with \u003ctitle\u003e and \u003ccode\u003e and \u003ccapacity\u003e and \u003chasFinal\u003e and \u003cassignment\u003e and \u003cmidterm\u003e and \u003cprerequisite\u003e and \u003chasProject\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the course is created",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the clerk input create course with \u003ctitle2\u003e and \u003ccode2\u003e and \u003ccapacity2\u003e and \u003chasFinal2\u003e and \u003cassignment2\u003e and \u003cmidterm2\u003e and \u003cprerequisite2\u003e and \u003chasProject2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the course is created",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the clerk input create student with \u003cname2\u003e and \u003cnumber2\u003e and \u003cemail2\u003e and \u003cpass2\u003e and \u003cstatus2\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the clerk input delete student with number \u003cnumber1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the student is deleted",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "the clerk input create student with \u003cname3\u003e and \u003cnumber3\u003e and \u003cemail3\u003e and \u003cpass3\u003e and \u003cstatus3\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the clerk input create course with \u003ctitle3\u003e and \u003ccode3\u003e and \u003ccapacity3\u003e and \u003chasFinal3\u003e and \u003cassignment3\u003e and \u003cmidterm3\u003e and \u003cprerequisite3\u003e and \u003chasProject3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the course is created",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "the clerk input cancel course with code \u003ccode1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the course is deleted",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the student logs in with \u003csemail2\u003e \u003cspassword2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "the student take course with code \u003ccoursecode2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the student logs in with \u003csemail3\u003e \u003cspassword3\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "the student take course with code \u003ccoursecode3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student logs in with \u003csemail3\u003e \u003cspassword3\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "the student take course with code \u003ccoursecode2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the student logs in with \u003csemail2\u003e \u003cspassword2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "the student take course with code \u003ccoursecode3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the student logs in with \u003csemail3\u003e \u003cspassword3\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "student register course for code \u003ccoursecode2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the student logs in with \u003csemail2\u003e \u003cspassword2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "student register course for code \u003ccoursecode3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the student logs in with \u003csemail3\u003e \u003cspassword3\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "student register course for code \u003ccoursecode3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the student logs in with \u003csemail2\u003e \u003cspassword2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "student register course for code \u003ccoursecode2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "the term properly started",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the student logs in with \u003csemail2\u003e \u003cspassword2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "the student attempts to deregister course \u003ccoursecode3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the student degistered from the course",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "the deregistration period is over",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the student logs in with \u003csemail2\u003e \u003cspassword2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "the student drop course for \u003ccoursecode2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "the course has been dropped by student",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "the term end event occurs",
  "keyword": "Then "
});
formatter.examples({
  "line": 94,
  "name": "",
  "description": "",
  "id": "temporal-relationship;temporal-relationship-between-creation-of-student,-course,-registration-valid;",
  "rows": [
    {
      "cells": [
        "option",
        "title",
        "code",
        "capacity",
        "hasFinal",
        "assignment",
        "midterm",
        "prerequisite",
        "hasProject",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "title2",
        "code2",
        "capacity2",
        "hasFinal2",
        "assignment2",
        "midterm2",
        "prerequisite2",
        "hasProject2",
        "name2",
        "number2",
        "email2",
        "pass2",
        "status2",
        "number1",
        "name3",
        "number3",
        "email3",
        "pass3",
        "status3",
        "title3",
        "code3",
        "capacity3",
        "hasFinal3",
        "assignment3",
        "midterm3",
        "prerequisite3",
        "hasProject3",
        "code1",
        "logOut",
        "soption",
        "semail2",
        "spassword2",
        "coursecode2",
        "semail3",
        "spassword3",
        "coursecode3"
      ],
      "line": 95,
      "id": "temporal-relationship;temporal-relationship-between-creation-of-student,-course,-registration-valid;;1"
    },
    {
      "cells": [
        "clerk",
        "OOP",
        "112347",
        "27",
        "true",
        "2",
        "1",
        "false",
        "true",
        "tansin",
        "56789",
        "ta@gmail",
        "12345",
        "full time",
        "Data Science",
        "110347",
        "28",
        "true",
        "2",
        "1",
        "false",
        "true",
        "Shishir",
        "16780",
        "an@gmail",
        "12345",
        "full time",
        "56789",
        "Tonnee",
        "16380",
        "ton@gmail",
        "12345",
        "full time",
        "Software",
        "102348",
        "26",
        "false",
        "2",
        "1",
        "false",
        "true",
        "112347",
        "log out",
        "student",
        "an@gmail",
        "12345",
        "110347",
        "ton@gmail",
        "12345",
        "102348"
      ],
      "line": 96,
      "id": "temporal-relationship;temporal-relationship-between-creation-of-student,-course,-registration-valid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 32000,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Temporal relationship between creation of student, course, registration valid",
  "description": "",
  "id": "temporal-relationship;temporal-relationship-between-creation-of-student,-course,-registration-valid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the clerk input create course with OOP and 112347 and 27 and true and 2 and 1 and false and true",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the course is created",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the clerk input create student with tansin and 56789 and ta@gmail and 12345 and full time properly",
  "matchedColumns": [
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the clerk input create course with Data Science and 110347 and 28 and true and 2 and 1 and false and true",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    21,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the course is created",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the clerk input create student with Shishir and 16780 and an@gmail and 12345 and full time properly",
  "matchedColumns": [
    22,
    23,
    24,
    25,
    26
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the clerk input delete student with number 56789",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the student is deleted",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "the clerk input create student with Tonnee and 16380 and ton@gmail and 12345 and full time properly",
  "matchedColumns": [
    32,
    28,
    29,
    30,
    31
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the clerk input create course with Software and 102348 and 26 and false and 2 and 1 and false and true",
  "matchedColumns": [
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the course is created",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "the clerk input cancel course with code 112347",
  "matchedColumns": [
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the course is deleted",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the user inputs log out",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the user inputs student",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the student logs in with an@gmail 12345",
  "matchedColumns": [
    44,
    45
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "the student take course with code 110347",
  "matchedColumns": [
    46
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the user inputs log out",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the user inputs student",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the student logs in with ton@gmail 12345",
  "matchedColumns": [
    48,
    47
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "the student take course with code 102348",
  "matchedColumns": [
    49
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs log out",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "the user inputs student",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student logs in with ton@gmail 12345",
  "matchedColumns": [
    48,
    47
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "the student take course with code 110347",
  "matchedColumns": [
    46
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the user inputs log out",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the user inputs student",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the student logs in with an@gmail 12345",
  "matchedColumns": [
    44,
    45
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "the student take course with code 102348",
  "matchedColumns": [
    49
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the user inputs log out",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the user inputs student",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the student logs in with ton@gmail 12345",
  "matchedColumns": [
    48,
    47
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "student register course for code 110347",
  "matchedColumns": [
    46
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "the user inputs log out",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "the user inputs student",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the student logs in with an@gmail 12345",
  "matchedColumns": [
    44,
    45
  ],
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "student register course for code 102348",
  "matchedColumns": [
    49
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "the user inputs log out",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "the user inputs student",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the student logs in with ton@gmail 12345",
  "matchedColumns": [
    48,
    47
  ],
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "student register course for code 102348",
  "matchedColumns": [
    49
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "the user inputs log out",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "the user inputs student",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the student logs in with an@gmail 12345",
  "matchedColumns": [
    44,
    45
  ],
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "student register course for code 110347",
  "matchedColumns": [
    46
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "the user inputs log out",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "the term properly started",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs student",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the student logs in with an@gmail 12345",
  "matchedColumns": [
    44,
    45
  ],
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "the student attempts to deregister course 102348",
  "matchedColumns": [
    49
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the student degistered from the course",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "the deregistration period is over",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the user inputs log out",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "the user inputs student",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the student logs in with an@gmail 12345",
  "matchedColumns": [
    44,
    45
  ],
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "the student drop course for 110347",
  "matchedColumns": [
    46
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "the course has been dropped by student",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "the term end event occurs",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 42223,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 8028003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 33778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 524889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    },
    {
      "val": "OOP",
      "offset": 35
    },
    {
      "val": "112347",
      "offset": 43
    },
    {
      "val": "27",
      "offset": 54
    },
    {
      "val": "true",
      "offset": 61
    },
    {
      "val": "2",
      "offset": 70
    },
    {
      "val": "1",
      "offset": 76
    },
    {
      "val": "false",
      "offset": 82
    },
    {
      "val": "true",
      "offset": 92
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_course_with_OOP_and_and_and_true_and_and_and_false_and_true(String,String,String,String,String,String,String,String,Boolean)"
});
formatter.result({
  "duration": 19972009,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_is_created()"
});
formatter.result({
  "duration": 23555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tansin",
      "offset": 36
    },
    {
      "val": "56789",
      "offset": 47
    },
    {
      "val": "ta@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 70
    },
    {
      "val": "full time",
      "offset": 80
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 517778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 31555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    },
    {
      "val": "Data Science",
      "offset": 35
    },
    {
      "val": "110347",
      "offset": 52
    },
    {
      "val": "28",
      "offset": 63
    },
    {
      "val": "true",
      "offset": 70
    },
    {
      "val": "2",
      "offset": 79
    },
    {
      "val": "1",
      "offset": 85
    },
    {
      "val": "false",
      "offset": 91
    },
    {
      "val": "true",
      "offset": 101
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_course_with_OOP_and_and_and_true_and_and_and_false_and_true(String,String,String,String,String,String,String,String,Boolean)"
});
formatter.result({
  "duration": 1827557,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_is_created()"
});
formatter.result({
  "duration": 21777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "Shishir",
      "offset": 36
    },
    {
      "val": "16780",
      "offset": 48
    },
    {
      "val": "an@gmail",
      "offset": 58
    },
    {
      "val": "12345",
      "offset": 71
    },
    {
      "val": "full time",
      "offset": 81
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 661778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 95111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 16
    },
    {
      "val": "56789",
      "offset": 43
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_delete_student_with_number(String,String)"
});
formatter.result({
  "duration": 528889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_deleted()"
});
formatter.result({
  "duration": 21777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "Tonnee",
      "offset": 36
    },
    {
      "val": "16380",
      "offset": 47
    },
    {
      "val": "ton@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 71
    },
    {
      "val": "full time",
      "offset": 81
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 929778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 88000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    },
    {
      "val": "Software",
      "offset": 35
    },
    {
      "val": "102348",
      "offset": 48
    },
    {
      "val": "26",
      "offset": 59
    },
    {
      "val": "false",
      "offset": 66
    },
    {
      "val": "2",
      "offset": 76
    },
    {
      "val": "1",
      "offset": 82
    },
    {
      "val": "false",
      "offset": 88
    },
    {
      "val": "true",
      "offset": 98
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_course_with_OOP_and_and_and_true_and_and_and_false_and_true(String,String,String,String,String,String,String,String,Boolean)"
});
formatter.result({
  "duration": 3333335,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_is_created()"
});
formatter.result({
  "duration": 20445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 16
    },
    {
      "val": "112347",
      "offset": 40
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_cancel_course_with_code(String,String)"
});
formatter.result({
  "duration": 579556,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_is_deleted()"
});
formatter.result({
  "duration": 18667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 34667,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 5778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 112000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 29333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "an@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 227111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 68444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "110347",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 583555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 49778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 8889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 18222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ton@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 35
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 175111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 80889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "102348",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 593334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 21778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 5778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 14222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ton@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 35
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 366667,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 72889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "110347",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 571111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 28889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 7111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 18222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "an@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 172444,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 66222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "102348",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 580890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 20444,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 5777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 14222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ton@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 35
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 161778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 64444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "110347",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 1234222,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 21778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 4445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 12889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "an@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 403111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 64000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "102348",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 564889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 24445,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 5333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 24444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ton@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 35
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 224000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 66667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "102348",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 612890,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 21778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 49333,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 7556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 19112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "an@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 963556,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 98667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "110347",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 66345807,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 22222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 29778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 8000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_properly_started()"
});
formatter.result({
  "duration": 115111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "an@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 1232445,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 112889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 24
    },
    {
      "val": "102348",
      "offset": 42
    }
  ],
  "location": "cucumberStepDefinitions.the_student_attempts_to_deregister_course(String,String)"
});
formatter.result({
  "duration": 433778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_degistered_from_the_course()"
});
formatter.result({
  "duration": 17334,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_deregistration_period_is_over()"
});
formatter.result({
  "duration": 78222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 23111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 5334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 15111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "an@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 216000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 86223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 12
    },
    {
      "val": "110347",
      "offset": 28
    }
  ],
  "location": "cucumberStepDefinitions.the_student_drop_course_for(String,String)"
});
formatter.result({
  "duration": 807556,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_has_been_dropped_by_student()"
});
formatter.result({
  "duration": 22223,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_end_event_occurs()"
});
formatter.result({
  "duration": 126666,
  "status": "passed"
});
formatter.uri("cucumbertest/termEnd.feature");
formatter.feature({
  "line": 1,
  "name": "Student register,drop,deregister from course before term end",
  "description": "",
  "id": "student-register,drop,deregister-from-course-before-term-end",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Student tried to drop course after term ends invalid",
  "description": "",
  "id": "student-register,drop,deregister-from-course-before-term-end;student-tried-to-drop-course-after-term-ends-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the student take course with code \u003ccoursecode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "student register course for code \u003ccourseRegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the term properly started",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the deregistration period is over",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the term end event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the student drop course for \u003cdropCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the course can not be dropped by student",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "student-register,drop,deregister-from-course-before-term-end;student-tried-to-drop-course-after-term-ends-invalid;",
  "rows": [
    {
      "cells": [
        "option",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "logOut",
        "soption",
        "semail",
        "spassword",
        "coursecode",
        "courseRegisterCode",
        "dropCode"
      ],
      "line": 26,
      "id": "student-register,drop,deregister-from-course-before-term-end;student-tried-to-drop-course-after-term-ends-invalid;;1"
    },
    {
      "cells": [
        "clerk",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "112233",
        "112233",
        "112233"
      ],
      "line": 27,
      "id": "student-register,drop,deregister-from-course-before-term-end;student-tried-to-drop-course-after-term-ends-invalid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 28444,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Student tried to drop course after term ends invalid",
  "description": "",
  "id": "student-register,drop,deregister-from-course-before-term-end;student-tried-to-drop-course-after-term-ends-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs student",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the student take course with code 112233",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "student register course for code 112233",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the term properly started",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the deregistration period is over",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the term end event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the student drop course for 112233",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the course can not be dropped by student",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 11111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 7691114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 27112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 120444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 1080889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 168445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 28000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 5333,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 370667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 22222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 60889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 22667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "112233",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 500889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "112233",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 410222,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 372889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_properly_started()"
});
formatter.result({
  "duration": 37777,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_deregistration_period_is_over()"
});
formatter.result({
  "duration": 25778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_end_event_occurs()"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 12
    },
    {
      "val": "112233",
      "offset": 28
    }
  ],
  "location": "cucumberStepDefinitions.the_student_drop_course_for(String,String)"
});
formatter.result({
  "duration": 241778,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_can_not_be_dropped_by_student()"
});
formatter.result({
  "duration": 20000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Student tried to deregister after term ends invalid",
  "description": "",
  "id": "student-register,drop,deregister-from-course-before-term-end;student-tried-to-deregister-after-term-ends-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user inputs \u003coption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the clerk input create student with \u003cname\u003e and \u003cnumber\u003e and \u003cemail\u003e and \u003cpass\u003e and \u003cstatus\u003e properly",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "the user inputs \u003clogOut\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the user inputs \u003csoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the student logs in with \u003csemail\u003e \u003cspassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "the student take course with code \u003ccoursecode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "student register course for code \u003ccourseRegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "the term properly started",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the deregistration period is over",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the term end event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the student attempts to deregister course \u003cderegisterCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the student can not be degistered from the course",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "student-register,drop,deregister-from-course-before-term-end;student-tried-to-deregister-after-term-ends-invalid;",
  "rows": [
    {
      "cells": [
        "option",
        "name",
        "number",
        "email",
        "pass",
        "status",
        "logOut",
        "soption",
        "semail",
        "spassword",
        "coursecode",
        "courseRegisterCode",
        "deregisterCode"
      ],
      "line": 52,
      "id": "student-register,drop,deregister-from-course-before-term-end;student-tried-to-deregister-after-term-ends-invalid;;1"
    },
    {
      "cells": [
        "clerk",
        "tithy",
        "223456",
        "tothy@gmail",
        "12345",
        "full time",
        "log out",
        "student",
        "tothy@gmail",
        "12345",
        "112233",
        "112233",
        "112233"
      ],
      "line": 53,
      "id": "student-register,drop,deregister-from-course-before-term-end;student-tried-to-deregister-after-term-ends-invalid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29333,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Student tried to deregister after term ends invalid",
  "description": "",
  "id": "student-register,drop,deregister-from-course-before-term-end;student-tried-to-deregister-after-term-ends-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "the term is started",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user inputs clerk",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the clerk logs in with admin",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the clerk input create student with tithy and 223456 and tothy@gmail and 12345 and full time properly",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the student is created",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "the user inputs log out",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "the course registration period starts",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the user inputs student",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the student logs in with tothy@gmail 12345",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "the student take course with code 112233",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "student register course for code 112233",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the student is registered for course",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "the term properly started",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the deregistration period is over",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the term end event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the student attempts to deregister course 112233",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the student can not be degistered from the course",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 11556,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_is_started()"
});
formatter.result({
  "duration": 57411581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 27556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_logs_in_with(String)"
});
formatter.result({
  "duration": 111556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    },
    {
      "val": "tithy",
      "offset": 36
    },
    {
      "val": "223456",
      "offset": 46
    },
    {
      "val": "tothy@gmail",
      "offset": 57
    },
    {
      "val": "12345",
      "offset": 73
    },
    {
      "val": "full time",
      "offset": 83
    }
  ],
  "location": "cucumberStepDefinitions.the_clerk_input_create_student(String,String,int,String,String,String)"
});
formatter.result({
  "duration": 591111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_created()"
});
formatter.result({
  "duration": 104445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 27111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 8445,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_course_registration_period_starts()"
});
formatter.result({
  "duration": 240000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "cucumberStepDefinitions.the_user_inputs_student(String)"
});
formatter.result({
  "duration": 28889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tothy@gmail",
      "offset": 25
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "cucumberStepDefinitions.the_student_logs_in_with_(String,String)"
});
formatter.result({
  "duration": 179111,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 75111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "take course",
      "offset": 12
    },
    {
      "val": "112233",
      "offset": 34
    }
  ],
  "location": "cucumberStepDefinitions.the_student_take_course_with_code(String,String)"
});
formatter.result({
  "duration": 580890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register course",
      "offset": 8
    },
    {
      "val": "112233",
      "offset": 33
    }
  ],
  "location": "cucumberStepDefinitions.student_register_course_for_code(String,String)"
});
formatter.result({
  "duration": 552889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_is_registered_for_course()"
});
formatter.result({
  "duration": 32889,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_properly_started()"
});
formatter.result({
  "duration": 112888,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_deregistration_period_is_over()"
});
formatter.result({
  "duration": 82222,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_term_end_event_occurs()"
});
formatter.result({
  "duration": 67556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 24
    },
    {
      "val": "112233",
      "offset": 42
    }
  ],
  "location": "cucumberStepDefinitions.the_student_attempts_to_deregister_course(String,String)"
});
formatter.result({
  "duration": 380444,
  "status": "passed"
});
formatter.match({
  "location": "cucumberStepDefinitions.the_student_can_not_be_degistered_from_the_course()"
});
formatter.result({
  "duration": 20445,
  "status": "passed"
});
});