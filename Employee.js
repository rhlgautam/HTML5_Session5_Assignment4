/*Create a Constructor Object Pattern for Employee which have the properties as username,skills and basic salary.
Create an object methods printdetails() which should display the employee details.
Create an object methods as changesalary () which will update the salary of an employee.
Display the final details of an employee after the change in salary.*/

// Function to add employee details, to print details and to update salary
function Employee(username,skills,salary)
{
	this.username=username;
	this.skills=skills;
	this.salary=salary;

	// printDetails function
	this.printDetails = function(){
	document.write(this.username +" is a developer with skill set of " +this.skills+" and his basic salary is " + this.salary+" Rs.<br>" );
	};
	//changesalary function
	this.changesalary= function(salary){
		this.salary= salary;
	};
}

//Constructor Object Pattern.
var emp=new Employee("Rahul",".Net and javascript",10000);
document.write("<h1>Welcome to Acadgild!!</h1>");
document.write("<p><i><b>Below is the result before and after salary update, To view code, please open Employee.js file.</b></i></p>");
document.write("<i>Print Details Before Salary Update:</i><br>");
// Call printDetails function
emp.printDetails();
// Update salary function call
emp.changesalary(20000);

document.write("<i>Print Details After Salary Update:</i><br>");
//Call printDetails function again
emp.printDetails();
document.write("<br>Thank You!!");