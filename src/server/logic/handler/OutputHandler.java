package server.logic.handler;

import tansinjahan.tdd.assignment.Course;
import tansinjahan.tdd.assignment.CourseTable;
import tansinjahan.tdd.assignment.Student;
import tansinjahan.tdd.assignment.StudentTable;
import tansinjahan.tdd.assignment.University;
import server.logic.handler.model.Output;
import utilities.Config;

public class OutputHandler {
	public static final int WAITING = 0;
	public static final int FINISHWAITING=1;
    public static final int CLERK = 2;
    public static final int STUDENT = 3;
    public static final int CREATESTUDENT=4;
    public static final int CREATECOURSE=5;
    public static final int CANCELCOURSE=6;
    public static final int DELETESTUDENT=7;
    public static final int CLERKLOGIN=14;
    public static final int STUDENTLOGIN=15;
    public static final int REGISTERCOURSE=16;
    public static final int DROPCOURSE=17;
    public static final int TAKECOURSE=18;
    public static final int DEREGISTERCOURSE=19;
    
    private static final String CLERK_MENU = "\nPlease select from the Menu:\nCreate Student/Course\nCancel Course\nDelete Student\nMain Menu\nLog Out";
    private static final String STUDENT_MENU = "\nPlease select from the Menu:\nRegister Course\nDrop Course\nTake Course\nDeregister Course\nMain Menu\nLog Out";

    
	public Output createStudent(String input) {
		Output output=new Output("",0);
		String[] strArray = null;   
        strArray = removeSpace(input.split(","));
        if(strArray.length!=5 || !isInteger(strArray[1]) || !strArray[2].contains("@") || strArray[3].length() == 0|| strArray[4].length() == 0){
        	output.setOutput("Your input should be in this format: 'Name, Student Number, Email, Password, status'");
        	output.setState(CREATESTUDENT);
        }else{
        	try {
        		University.getInstance().createStudent(strArray[0], Integer.parseInt(strArray[1]), strArray[2], strArray[3],strArray[4]);
        		output.setOutput("Success!");
        		output.setState(CLERK);
        		output.setMessage("student created successfully");
        	} catch (Exception e) {
        		output.setOutput("Fails: " + e.getMessage() + "\n\n" 
        					+ "Please Input Student Info: 'Name, Student Number, email, password, status'");
        		output.setState(CREATESTUDENT);
        		output.setMessage("student creation fails");
        	}
        }
		return output;
	}

	public Output createCourse(String input) {
		Output output=new Output("",0);
		String[] strArray = null;   
        strArray = input.split(",");
        strArray = removeSpace(strArray);
        if(strArray.length!=8 || !isInteger(strArray[1]) || !isInteger(strArray[2]) 
        		|| !isBoolean(strArray[3]) || !isInteger(strArray[4]) || !isInteger(strArray[5])
        		|| !isBoolean(strArray[6]) || !isBoolean(strArray[7])){
        	String msg = "Please Input Course Info as given format: " + 
       			 "\n"+
       			 "'Title, Code, Capcity Size, Has Final(True/False), Assignment Count, MidTerm Count, Enforce Prerequisites(True/False), Has Project(True/False)'";
        	output.setOutput(msg);
        	output.setState(CREATECOURSE);
        	output.setMessage("course creation fails");
        }else{
        	try {
	        	University.getInstance().createCourse("clerk", strArray[0], Integer.parseInt(strArray[1]), 
	        			Integer.parseInt(strArray[2]), Boolean.parseBoolean(strArray[3]), Integer.parseInt(strArray[4]), 
	        			Integer.parseInt(strArray[5]), Boolean.parseBoolean(strArray[6]), Boolean.parseBoolean(strArray[7]));
	        	output.setOutput("Success!");
	        	output.setState(CLERK);
	        	output.setMessage("course created successfully");
        	} catch(Exception e) {
        		output.setOutput("Fails: " 
        				+ e.getMessage() 
        				+ "\n\nPlease Input Course Info as given format: " 
        				+ "\n"
        				+ "'Title, Code, Capcity Size, Has Final(True/False), Assignment Count, MidTerm Count, Enforce Prerequisites(True/False), Has Project(True/False)'");
        		output.setState(CREATECOURSE);
        		output.setMessage("course creation fails");
        	}
        }
		return output;
	}

	public Output clerkLogin(String input) {
		Output output=new Output("",0);
		if(input.equalsIgnoreCase(Config.CLERK_PASSWORD)){
			output.setOutput(CLERK_MENU);
        	output.setState(CLERK);
        	output.setMessage("clerk login success");
		}else{
			output.setOutput("Wrong Password!Please Input The Password:");
        	output.setState(CLERKLOGIN);
        	output.setMessage("clerk login fails");
		}
		return output;
	}

	public Output studentLogin(String input) {
		Output output=new Output("",0);
		String[] strArray = null;   
        strArray = input.split(",");
        boolean email=strArray[0].contains("@");
        if(strArray.length!=2 || email!=true){
        	output.setOutput("Your input should be in this format:'email,password'");
        	output.setState(STUDENTLOGIN);
        }else{
        	Student student = StudentTable.getInstance().findByEmailPassword(strArray[0], strArray[1]);
        	if(student != null){
        		InputHandler.loggedInStudentNumber = student.getStudentNumber();
        		output.setOutput(STUDENT_MENU);
            	output.setState(STUDENT);
            	output.setMessage("student login successfully");
        	}else{
        		output.setOutput("Username or Password is wrong! Please, input the Email and Password:'email,password'");
            	output.setState(STUDENTLOGIN);
            	output.setMessage("student login fails");
        	}
        }
		return output;
	}
	
	public Output cancelCourse(String input) {
		Output output=new Output("",0);
        if(!isInteger(input)){
        	output.setOutput("Your input should be Course code:");
        	output.setState(CANCELCOURSE);
        }else{
        	int code = Integer.parseInt(input);
        	Course course = CourseTable.getInstance().findCourseByCode(code);
        	if (course == null) {
        		output.setOutput("Fails: Course not available for code: " + code 
        				+ "\n\nYour input should be Course code: ");
        		output.setState(CANCELCOURSE);
        	}
        	
        	try {
        		University.getInstance().cancelCourse(course);
        		output.setOutput("Success!");
        		output.setState(CLERK);
        		output.setMessage("delete course success");
        		
        	} catch (Exception e) {
        		output.setOutput("Fails: Course not available for code: " + code 
        				+ "\n\nYour input should be Course code: ");
        		output.setState(CANCELCOURSE);
        		output.setMessage("delete course fails");
        	}
        }
		return output;
	}
	
	public Output deleteStudent(String input) {
		Output output=new Output("",0);
        if(!isInteger(input)){
        	output.setOutput("Your input should be Student Number:");
        	output.setState(DELETESTUDENT);
        	output.setMessage("student can not be deleted");
        }else{
        	int studentNumber = Integer.parseInt(input);
        	Student student = tansinjahan.tdd.assignment.StudentTable.getInstance().findByStudentNumber(studentNumber);
        	if (student == null) {
        		output.setOutput("Fails: Student not available for student number: " + studentNumber 
        				+ "\n\nYour input should be Student Number: ");
        		output.setState(DELETESTUDENT);
        		output.setMessage("student can not be deleted");
        	}
        	
        	try {
        		University.getInstance().deleteStudent(student);
        		output.setOutput("Success!");
        		output.setState(CLERK);
        		output.setMessage("student has been deleted");
        	} catch (Exception e) {
        		output.setOutput("Fails: Student not available for student number: " + studentNumber 
        				+ "\n\nYour input should be Student Number: ");
        		output.setState(DELETESTUDENT);
        		output.setMessage("student can not be deleted");
        	}
        }
		return output;
	}
	
	public Output registerCourse(String input) {
		Output output=new Output("",0);
        if(!isInteger(input)){
        	output.setOutput("Your input should be Course Code:");
        	output.setState(REGISTERCOURSE);
        }else{
        	int courseCode = Integer.parseInt(input);
        	Course course = CourseTable.getInstance().findCourseByCode(courseCode);
        	if (course == null) {
        		output.setOutput("Fails: No course matches with the course code" 
        				+ "\n\nYour input should be Course code: ");
        		output.setState(REGISTERCOURSE);
        	} else {
	        	try {
	        		Student student = StudentTable.getInstance().findByStudentNumber(InputHandler.loggedInStudentNumber);
	        		University.getInstance().registerStudentForCourse(student, course);
	        		output.setOutput("Success!");
	        		output.setState(STUDENT);
	        		output.setMessage("student registered in the course success");
	        	} catch (Exception e) {
	        		output.setOutput("Fails: " + e.getMessage() 
	        				+ "\n\nTry again later.");
	        		output.setState(STUDENT);
	        		output.setMessage("student registered in the course fails");
	        	}
        	}
        }
		return output;
	}
	
	public Output dropCourse(String input) {
		Output output=new Output("",0);
        if(!isInteger(input)){
        	output.setOutput("Your input should be Course Code:");
        	output.setState(DROPCOURSE);
        }else{
        	int courseCode = Integer.parseInt(input);
        	Course course = CourseTable.getInstance().findCourseByCode(courseCode);
        	if (course == null) {
        		output.setOutput("Fails: No course matches with the course code" 
        				+ "\n\nYour input should be Course code: ");
        		output.setState(DROPCOURSE);
        	} else {
	        	try {
	        		Student student = StudentTable.getInstance().findByStudentNumber(InputHandler.loggedInStudentNumber);
	        		University.getInstance().dropCourse(student, course);
	        		output.setOutput("Success!");
	        		output.setState(STUDENT);
	        		output.setMessage("student drop course success");
	        	} catch (Exception e) {
	        		output.setOutput("Fails: " + e.getMessage() 
	        				+ "\n\nTry again later.");
	        		output.setState(STUDENT);
	        		output.setMessage("student drop course fails");
	        	}
        	}
        }
		return output;
	}
	
	public Output deregisterCourse(String input) {
		Output output=new Output("",0);
        if(!isInteger(input)){
        	output.setOutput("Your input should be Course Code:");
        	output.setState(DEREGISTERCOURSE);
        	output.setMessage("student deregister courses fails because of invalid input");
        }else{
        	int courseCode = Integer.parseInt(input);
        	Course course = CourseTable.getInstance().findCourseByCode(courseCode);
        	if (course == null) {
        		output.setOutput("Fails: No course matches with the course code" 
        				+ "\n\nYour input should be Course code: ");
        		output.setState(DEREGISTERCOURSE);
        		output.setMessage("student deregister courses fails with unmatched course");
        	} else {
	        	try {
	        		Student student = StudentTable.getInstance().findByStudentNumber(InputHandler.loggedInStudentNumber);
	        		University.getInstance().deregisterCourse(course, student);
	        		output.setOutput("Success!");
	        		output.setState(STUDENT);
	        		output.setMessage("student deregister courses success");
	        	} catch (Exception e) {
	        		output.setOutput("Fails: " + e.getMessage() 
	        				+ "\n\nTry again later.");
	        		output.setState(STUDENT);
	        		output.setMessage("student deregister courses fails");
	        	}
        	}
        }
		return output;
	}
	
	
	public Output takeCourse(String input) {
		Output output=new Output("",0);
        if(!isInteger(input)){
        	output.setOutput("Your input should be Course Code:");
        	output.setState(TAKECOURSE);
        }else{
        	int courseCode = Integer.parseInt(input);
        	Course course = CourseTable.getInstance().findCourseByCode(courseCode);
        	if (course == null) {
        		output.setOutput("Fails: No course matches with the course code" 
        				+ "\n\nYour input should be Course code: ");
        		output.setState(TAKECOURSE);
        	} else {
	        	try {
	        		Student student = StudentTable.getInstance().findByStudentNumber(InputHandler.loggedInStudentNumber);
	        		University.getInstance().selectCourseForStudent(student, course);
	        		output.setOutput("Success!");
	        		output.setState(STUDENT);
	        		output.setMessage("student selected courses success");
	        	} catch (Exception e) {
	        		output.setOutput("Fails: " + e.getMessage() 
	        				+ "\n\nTry again later.");
	        		output.setState(STUDENT);
	        		output.setMessage("student selected courses fails");
	        	}
        	}
        }
		return output;
	}
	
	public static boolean isInteger(String value) {
		try {
			Integer.parseInt(value);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	public String[] removeSpace(String[] arr) {
		for (int i = 0; i < arr.length; i++) {
        	arr[i] = arr[i].trim();
        }
		return arr;
	}
	
	public boolean isBoolean(String val) {
		return val.equalsIgnoreCase("true") || val.equalsIgnoreCase("false");
	}

}