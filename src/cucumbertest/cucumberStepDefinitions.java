package cucumbertest;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import java.util.ArrayList;
import java.util.List;

import server.logic.handler.InputHandler;
import server.logic.handler.OutputHandler;
import server.logic.handler.model.Output;
import server.logic.handler.model.ServerOutput;
import tansinjahan.tdd.assignment.CourseTable;
import tansinjahan.tdd.assignment.Student;
import tansinjahan.tdd.assignment.Course;
import tansinjahan.tdd.assignment.StudentTable;
import tansinjahan.tdd.assignment.University;
import tansinjahan.tdd.assignment.University.TermState;
import tansinjahan.tdd.assignment.test.TestTermSimulator;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Test;

public class cucumberStepDefinitions {
	
	InputHandler handler = new InputHandler();
	OutputHandler o= new OutputHandler();
	ServerOutput output;
	List<Course> selectedCourse=new ArrayList<>();
	TermState termState;
	TestTermSimulator test;
	int state;
	
	@Before
	public void before() {
		output = new ServerOutput("carleton", 0);
	}
	
	
	@Given("^the university is initialized$")
	public void the_university_is_initialized() throws Exception {
	
 		University.getInstance();
		state = handler.processInput("", InputHandler.WAITING).getState();
	}
	
	@When("^the clerk logs in with (.*)$")
	public void the_clerk_logs_in_with(String admin) throws Exception {
		output = handler.processInput(admin, state);
		state = output.getState();
		
	}
	
	@Then("^the clerk is logged in$")
	public void the_clerk_is_logged_in() throws Exception {
		assertThat(state, equalTo(OutputHandler.CLERK));
		assertThat("clerk login success", equalTo(output.getMessage()));
	}
	
	@Then("^the clerk is not logged in$")
	public void the_clerk_is_not_logged_in() throws Exception {
		assertThat(state, equalTo(OutputHandler.CLERKLOGIN));
		assertThat("clerk login fails", equalTo(output.getMessage()));
	}

	@When("^the student logs in with (.*) (.*)$")
	public void the_student_logs_in_with_(String email,String pass) throws Exception {
		output = handler.processInput(email +","+ pass, state);
		state =output.getState();
		System.out.println(output.getMessage());
		
	}
	
	@Given("^the user inputs (.*)$")
	public void the_user_inputs_student(String option) throws Throwable {
		state=handler.processInput(option, state).getState();
	}

	@Then("^the student is logged in$")
	public void the_student_is_logged_in() throws Exception {
		System.out.println(state);
		assertThat(state, equalTo(OutputHandler.STUDENT));
		assertThat("student login successfully",equalTo(output.getMessage()));
	}
	
	@Then("^the student is not logged in$")
	public void the_student_is_not_logged_in() throws Exception {
	    assertThat(state, equalTo(OutputHandler.STUDENTLOGIN));
	    assertThat("student login fails",equalTo(output.getMessage()));
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
		output = handler.processInput(input, state);
		state = output.getState();
		output = handler.processInput(name+ "," +num+ "," +email+ "," +pass+ "," +status, state);
		state = output.getState();
		//System.out.println(output.getMessage());
		
	}

	@Then("^the student is created$")
	public void the_student_is_created() throws Exception {
		assertThat(state, equalTo(OutputHandler.CLERK));
		System.out.println(state);
		assertThat("student created successfully",equalTo(output.getMessage()));
	}
	
	@When("^check if the student (\\d+) is already created$")
	public void check_if_the_student_is_already_created(int studentNumber) throws Exception {
		University.getInstance().studentExist(studentNumber);
	}
	
	@Then("^the duplicate student can not be created$")
	public void the_duplicate_student_can_not_be_created() throws Exception {
		assertThat(state, equalTo(OutputHandler.CREATESTUDENT));
		assertThat("student creation fails",equalTo(output.getMessage()));
	}
	
	@When("^the clerk input (.*) with number (.*)$")
	public void the_clerk_input_delete_student_with_number(String input, String number) throws Exception {
		output = handler.processInput(input, state);
		state = output.getState();
		output = handler.processInput(number, state);
		state = output.getState();
	}
	
	@Then("^the student can not be deleted$")
	public void the_student_can_not_be_deleted() throws Exception {
	   assertThat(state, equalTo(OutputHandler.DELETESTUDENT));
	   assertThat("student can not be deleted",equalTo(output.getMessage()));
	}
	
	@Then("^the student is deleted$")
	public void the_student_is_deleted() throws Exception {
		 assertThat(state, equalTo(OutputHandler.CLERK));
		 assertThat("student has been deleted",equalTo(output.getMessage()));
	}
	
	// Course_creation and delete feature step definitions
	
	@When("^the clerk input (.*) with (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$")
	public void the_clerk_input_create_course_with_OOP_and_and_and_true_and_and_and_false_and_true(String input, String title, String code, String capacity, String hasFinal , String assignment, String midterm, String prerequisite, Boolean project) throws Exception {
		output = handler.processInput(input, state);
		state = output.getState();
		output = handler.processInput(title + "," + code + "," + capacity + "," + hasFinal + "," + assignment + "," + midterm + "," + prerequisite + "," + project, state );
		state = output.getState();
	}

	@Then("^the course is created$")
	public void the_course_is_created() throws Exception {
		assertThat(state, equalTo(OutputHandler.CLERK));
		assertThat("course created successfully",equalTo(output.getMessage()));
	}

	@When("^check if the course (\\d+) is already exists$")
	public void check_if_the_course_is_already_exists(int code) throws Exception {
	    University.getInstance().hasCourseExists(code);
	}

	@Then("^the course can not be created$")
	public void the_course_can_not_be_created() throws Exception {
		assertThat(state, equalTo(OutputHandler.CREATECOURSE));
		assertThat("course creation fails",equalTo(output.getMessage()));
	}

	@Given("^course registration term is started$")
	public void course_registration_term_is_started() throws Exception {
	    test = new TestTermSimulator(University.getInstance());
	    test.termAllowCourseRegistration();
	}
	
	@When("^the clerk input (.*) with code (\\d+)$")
	public void the_clerk_input_cancel_course_with_code(String input,String code) throws Exception {
		output = handler.processInput(input, state);
		state = output.getState();
		output = handler.processInput(code, state);
		state = output.getState();
	}

	@Then("^the course is deleted$")
	public void the_course_is_deleted() throws Exception {
		assertThat(state, equalTo(OutputHandler.CLERK));
		assertThat("delete course success",equalTo(output.getMessage()));	
	}
	
	@Given("^the term is end$")
	public void the_term_is_end() throws Exception {
		 test = new TestTermSimulator(University.getInstance());
		 test.endTerm();
	}
	
	@Then("^the course can not be deleted$")
	public void the_course_can_not_be_deleted() throws Exception {
		assertThat(state, equalTo(OutputHandler.CANCELCOURSE));
		assertThat("delete course fails",equalTo(output.getMessage()));
	}
	
	
	// iStudent Registration valid and invalid features
	
	@When("^the course registration period starts$")
	public void the_course_registration_period_starts() throws Exception {
	   test = new TestTermSimulator(University.getInstance());
	   test.termAllowCourseRegistration();
	}

	@Then("^the university registers student for the course$")
	public void the_university_registers_student_for_the_course() throws Exception {
		assertThat(state, equalTo(OutputHandler.STUDENT));
	}

	@Then("^the student (.*) with code (.*)$")
	public void the_student_take_course_with_code(String input,String code ) throws Exception {
		output = handler.processInput(input, state);
		state = output.getState();
		output = handler.processInput(code, state);
		state = output.getState();
	}

	@Then("^student (.*) for code (.*)$")
	public void student_register_course_for_code(String input,String code) throws Exception {
		output = handler.processInput(input, state);
		state = output.getState();
		output = handler.processInput(code, state);
		state = output.getState();
	}
	
	@Then("^the student tried to register course$")
	public void the_student_tried_to_register_course() throws Throwable {
		output = handler.processInput("register course", state);
		state = output.getState();
		System.out.println(output.getMessage());
	}

	@Then("^the student is registered for course$")
	public void the_student_is_registered_for_course() throws Exception {
		assertThat(state, equalTo(OutputHandler.STUDENT));  
		assertThat("student registered in the course success",equalTo(output.getMessage()));
	}
	
	@Then("^the term properly started$")
	public void the_term_properly_started() throws Exception {
		test=new TestTermSimulator(University.getInstance());
		test.startTerm();
	}

	@Then("^the student can not registered for course$")
	public void the_student_can_not_registered_for_course() throws Exception {
		assertThat(state, equalTo(OutputHandler.STUDENT)); 
		assertThat("student registered in the course fails",equalTo(output.getMessage()));
	}
	
	@Then("^student tothy@gmail already registered for four courses$")
	public void student_tothy_gmail_already_registered_for_four_courses() throws Exception {
	    
	}
	
	@When("^the clerk input create student with (\\d+) and tothy@gmail and (\\d+) and full time and student properly$")
	public void the_clerk_input_create_student_with_and_tothy_gmail_and_and_full_time_and_student_properly(int arg1, int arg2) throws Throwable {
		
	}
	
	//isDeregistration valid or invalid features
	
	@Then("^the student attempts to (.*) (.*)$")
	public void the_student_attempts_to_deregister_course(String input, String code) throws Throwable {
		output = handler.processInput(input, state);
		state = output.getState();
		output = handler.processInput(code, state);
		state = output.getState();
	}
	
	@Then("^the student tried to deregister course$")
	public void the_student_tried_to_deregister_course() throws Throwable {
		output = handler.processInput("deregister course", state);
		state = output.getState();
	}

	@Then("^the student degistered from the course$")
	public void the_student_degistered_from_the_course() throws Throwable {
	    assertThat(state, equalTo(OutputHandler.STUDENT));
		assertThat("student deregister courses success",equalTo(output.getMessage()));
	}
	
	@Then("^the student can not be degistered from the course$")
	public void the_student_can_not_be_degistered_from_the_course() throws Throwable {
		assertThat(state, equalTo(OutputHandler.STUDENT));
		assertThat("student deregister courses fails",equalTo(output.getMessage()));
	}
	
	@Then("^the deregistration period is over$")
	public void the_deregistration_period_is_over() throws Throwable {
		test=new TestTermSimulator(University.getInstance());
		test.twoWeeksPassesTillTermStarted();
	}
	
	//IsDrop Course valid or invalid
	
	@Then("^the student (.*) for (\\d+)$")
	public void the_student_drop_course_for(String input,String code) throws Throwable {
		output = handler.processInput(input, state);
		state = output.getState();
		output = handler.processInput(code, state);
		state = output.getState();
	}
	
	@Then("^the course has been dropped by student$")
	public void the_course_has_been_dropped_by_student() throws Throwable {
		assertThat(state, equalTo(OutputHandler.STUDENT));
		assertThat("student drop course success",equalTo(output.getMessage()));
	}
	
	@Then("^the course can not be dropped by student$")
	public void the_course_can_not_be_dropped_by_student() throws Throwable {
		assertThat(state, equalTo(OutputHandler.STUDENT));
		assertThat("student drop course fails",equalTo(output.getMessage()));
	}
	
	//term end event valid invalid
	
	@Then("^the term end event occurs$")
	public void the_term_end_event_occurs() throws Throwable {
		test=new TestTermSimulator(University.getInstance());
		test.endTerm();
	}
	
	@Then("^the student registered for course$")
	public void the_student_registered_for_course() throws Throwable {
	 
	}
	
	//hierarchical relationship valid or invalid
	
	@Then("^the clerk gives input for (.*) (\\d+)$")
	public void the_clerk_gives_input_for(String courseCode, int studentNum) throws Throwable {
		output = handler.processInput(courseCode +","+studentNum, state);
		state = output.getState();
	}

	@Then("^the assignment marks is generated$")
	public void the_assignment_marks_is_generated() throws Throwable {
		assertThat(state, equalTo(OutputHandler.CLERK));
		assertThat("Assignment marks generated succesfully",equalTo(output.getMessage()));
	}
	
	@Then("^the mid term mark is generated$")
	public void the_mid_term_mark_is_generated() throws Throwable {
		assertThat(state, equalTo(OutputHandler.CLERK));
		assertThat("Mid marks generation successful",equalTo(output.getMessage()));
	}
	
	@Then("^the project mark is generated$")
	public void the_project_mark_is_generated() throws Throwable {
		assertThat(state, equalTo(OutputHandler.CLERK));
		assertThat("Project marks generation successful",equalTo(output.getMessage()));
	}
	
	@Then("^the marks obtained successful$")
	public void the_marks_obtained_successful() throws Throwable {
		assertThat(state, equalTo(OutputHandler.CLERK));
		assertThat("Marks obtained successfully",equalTo(output.getMessage()));
	}
	
	@Then("^the mark can not be obtained$")
	public void the_mark_can_not_be_obtained() throws Throwable {
		assertThat(state, equalTo(OutputHandler.OBTAINSTUDENTMARKS));
		assertThat("Marks obtain unsuccessful",equalTo(output.getMessage()));
	}
	
	@Then("^the project marks can not be calculated$")
	public void the_project_marks_can_not_be_calculated() throws Throwable {
		assertThat(state, equalTo(OutputHandler.SUBMITPROJECTMARKS));
		assertThat("Project marks generation unsuccessful",equalTo(output.getMessage()));
	}
	
	@Then("^the final mark is generated$")
	public void the_final_mark_is_generated() throws Throwable {
		assertThat(state, equalTo(OutputHandler.CLERK));
		assertThat("Final marks generation successful",equalTo(output.getMessage()));
	}
	


	
}
