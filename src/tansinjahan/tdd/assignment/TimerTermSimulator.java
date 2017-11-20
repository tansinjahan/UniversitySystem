package tansinjahan.tdd.assignment;

import java.util.Timer;
import java.util.TimerTask;

import tansinjahan.tdd.assignment.TermEventListener;
import tansinjahan.tdd.assignment.TermSimulator;

public class TimerTermSimulator extends TermSimulator {
	
	private static final int CREATE_COURSE_STUDENT_DAY_LIMIT = 20;
	private static final int REGISTRATION_DAY_LIMIT = 14;
	private static final int TERM_DAY_LIMIT = 84;
	private static final int DEREGISTRATION_WINDOW_LIMIT = 14;
	
	int stimulatedDay;
	Timer timer;
	
	public TimerTermSimulator(TermEventListener listener, int stimulatedDay) {
		super(listener);
		this.stimulatedDay = stimulatedDay;
	}
	
	public void start() {
		if (timer != null) {
			timer.cancel();
		}
		
		timer = new Timer();
		
		listener.onCreate();
		
		timer.schedule(new RegistrationPossibleTask(), 
				stimulatedDay * CREATE_COURSE_STUDENT_DAY_LIMIT);
		timer.schedule(new AfterRegistrationTermStartedTask(), 
				stimulatedDay * (CREATE_COURSE_STUDENT_DAY_LIMIT + REGISTRATION_DAY_LIMIT));
		timer.schedule(new TermEndsTask(), 
				stimulatedDay * (CREATE_COURSE_STUDENT_DAY_LIMIT + REGISTRATION_DAY_LIMIT  + TERM_DAY_LIMIT));
		timer.schedule(new TwoWeeksPassedAfterTermStarted(), 
				stimulatedDay * (CREATE_COURSE_STUDENT_DAY_LIMIT + REGISTRATION_DAY_LIMIT  + DEREGISTRATION_WINDOW_LIMIT));
	}
	
	private class RegistrationPossibleTask extends TimerTask {
		@Override
		public void run() {
			listener.onRegistrationPossible();
		}
	}
	
	private class AfterRegistrationTermStartedTask extends TimerTask {
		@Override
		public void run() {
			listener.onTermProperlyStarted();
		}
	}
	
	private class TermEndsTask extends TimerTask {
		@Override
		public void run() {
			timer.cancel();
			listener.onTermEnded();
		}
	}
	
	private class TwoWeeksPassedAfterTermStarted extends TimerTask {
		@Override
		public void run() {
			listener.onTwoWeekPassedTillTermStarted();
				}
			}

}