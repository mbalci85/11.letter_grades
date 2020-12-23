let grade = prompt('Enter your score: ');

// if/else
if (grade >= 90 && grade <= 100) alert('Your letter grade: A');
else if (grade >= 70 && grade <= 89) alert('Your letter grade: B');
else if (grade >= 60 && grade <= 69) alert('Your letter grade: C');
else if (grade >= 50 && grade <= 59) alert('Your letter grade: D');
else if (grade >= 0 && grade <= 49) alert('Your letter grade: F');

//ternary operator
grade <= 100 && grade >= 90
	? alert(`Your test score is ${grade} and your letter grade is A`)
	: grade <= 89 && grade >= 70
	? alert(`Your test score is ${grade} and your letter grade is B`)
	: grade <= 69 && grade >= 60
	? alert(`Your test score is ${grade} and your letter grade is C`)
	: grade <= 59 && grade >= 50
	? alert(`Your test score is ${grade} and your letter grade is D`)
	: grade <= 49 && grade >= 0
	? alert(`Your test score is ${grade} and your letter grade is F`)
	: alert('You entered an invalid score');
