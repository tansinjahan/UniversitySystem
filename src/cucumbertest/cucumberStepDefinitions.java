package cucumbertest;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;
import server.logic.handler.InputHandler;
import server.logic.handler.OutputHandler;
import tansinjahan.tdd.assignment.CourseTable;
import tansinjahan.tdd.assignment.Student;
import tansinjahan.tdd.assignment.StudentTable;
import tansinjahan.tdd.assignment.University;
import tansinjahan.tdd.assignment.University.TermState;
import tansinjahan.tdd.assignment.test.TestTermSimulator;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Test;

public class cucumberStepDefinitions {
	
	InputHandler handler = new InputHandler();
	OutputHandler o= new OutputHandler();
	TermState termState;
	TestTermSimulator test;
	int state;
	
	
	@Given("^the university is initialized$")
	public void the_university_is_initialized() throws Exception {
	
 		University.getInstance();
		state = handler.processInput("", InputHandler.WAITING).getState();
	}
	
	@Given("^the user inputs clerk$")
	public void the_user_inputs_clerk() throws Exception {
		state = handler.processInput("clerk", state).getState();
	}
	
	@When("^the clerk logs in with (.*)$")
	public void the_clerk_logs_in_with(String admin) throws Exception {
		state = handler.processInput(admin, state).getState();
	}
	
	@Then("^the clerk is logged in$")
	public void the_clerk_is_logged_in() throws Exception {
		assertThat(state, equalTo(OutputHandler.CLERK));
	}
	
	@Then("^the clerk is not logged in$")
	public void the_clerk_is_not_logged_in() throws Exception {
		assertThat(state, equalTo(OutputHandler.CLERKLOGIN));
	}
	
	@Given("^the user inputs student$")
	public void the_user_inputs_student() throws Exception {
		state = handler.processInput("student", state).getState();
		
	}

	@When("^the student logs in with (.*) (.*)$")
	public void the_student_logs_in_with_(String email,String pass) throws Exception {
		state = handler.processInput(email +","+ pass, state).getState();
		System.out.println(state);
	}

	@Then("^the student is logged in$")
	public void the_student_is_logged_in() throws Exception {
		assertThat(state, equalTo(OutputHandler.STUDENT));
	}
	

	@Then("^the student is not logged in$")
	public void the_student_is_not_logged_in() throws Exception {
	    assertThat(state, equalTo(OutputHandler.STUDENTLOGIN));
	}
	
	// Student_creation and delete feature step definitions
	
	@Given("^the term is started$")
	public void the_term_is_started() throws Exception {
		test= new TestTermSimulator(University.getInstance());
		test.termCreated();
		StudentTable.getInstance().clear();
		CourseTable.getInstance().clear();
		StudentTable.createFakeStudent();
		CourseTable.createFakeCourse();
	}

	@When("^the clerk input (.*) with (.*) and (\\d+) and (.*) and (\\d+) and (.*) properly$")
	public void the_clerk_input_create_student(String input,String name, int num,String email,String pass,String status) throws Exception {
		state = handler.processInput(input, state).getState();
		state = handler.processInput(name+ "," +num+ "," +email+ "," +pass+ "," +status, state).getState();
		System.out.println(state);
	}

	@Then("^the student is created$")
	public void the_student_is_created() throws Exception {
		assertThat(state, equalTo(OutputHandler.CLERK));
		System.out.println(state);
	}
	
	@When("^check if the student (\\d+) is already created$")
	public void check_if_the_student_is_already_created(int studentNumber) throws Exception {
		University.getInstance().studentExist(studentNumber);
	}
	
	@Then("^the duplicate student can not be created$")
	public void the_duplicate_student_can_not_be_created() throws Exception {
		assertThat(state, equalTo(OutputHandler.CREATESTUDENT));
	}
	
	@When("^the clerk input (.*) with number (.*)$")
	public void the_clerk_input_delete_student_with_number(String input, String number) throws Exception {
		state=handler.processInput(input, state).getState();
		state=handler.processInput(number, state).getState();
	}
	
	@Then("^the student can not be deleted$")
	public void the_student_can_not_be_deleted() throws Exception {
	   assertThat(state, equalTo(OutputHandler.DELETESTUDENT));
	}
	
	@Then("^the student is deleted$")
	public void the_student_is_deleted() throws Exception {
		 assertThat(state, equalTo(OutputHandler.CLERK));
	}
	
	// Course_creation and delete feature step definitions
	
	@When("^the clerk input (.*) with (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$")
	public void the_clerk_input_create_course_with_OOP_and_and_and_true_and_and_and_false_and_true(String input, String title, String code, String capacity, String hasFinal , String assignment, String midterm, String prerequisite, Boolean project) throws Exception {
		state = handler.processInput(input, state).getState();
		state = handler.processInput(title + "," + code + "," + capacity + "," + hasFinal + "," + assignment + "," + midterm + "," + prerequisite + "," + project, state ).getState();
	}

	@Then("^the course is created$")
	public void the_course_is_created() throws Exception {
		assertThat(state, equalTo(OutputHandler.CLERK));
	}

	@When("^check if the course (\\d+) is already exists$")
	public void check_if_the_course_is_already_exists(int code) throws Exception {
	    University.getInstance().hasCourseExists(code);
	}

	@Then("^the course can not be created$")
	public void the_course_can_not_be_created() throws Exception {
		assertThat(state, equalTo(OutputHandler.CREATECOURSE));
	}

	@Given("^course registration term is started$")
	public void course_registration_term_is_started() throws Exception {
	    test = new TestTermSimulator(University.getInstance());
	    test.termAllowCourseRegistration();
	}
	
	@When("^the clerk input (.*) with code (\\d+)$")
	public void the_clerk_input_cancel_course_with_code(String input,String code) throws Exception {
		state = handler.processInput(input, state).getState();
		state = handler.processInput(code, state).getState();
	}

	@Then("^the course is deleted$")
	public void the_course_is_deleted() throws Exception {
		assertThat(state, equalTo(OutputHandler.CLERK));
	}
	
	@Given("^the term is end$")
	public void the_term_is_end() throws Exception {
		 test = new TestTermSimulator(University.getInstance());
		 test.endTerm();
	}
	
	@Then("^the course can not be deleted$")
	public void the_course_can_not_be_deleted() throws Exception {
		assertThat(state, equalTo(OutputHandler.CANCELCOURSE));
	}

	
}
