function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    // we can place a class method in here with the class declaration
    this.calculateAge = function() {
        const diff = Date.now() - this.dob.getTime();
        const utcFullYear = new Date(diff).getUTCFullYear();
        const age = Math.abs(utcFullYear - 1970);
        // console.log(diff);
        return age;
    }
}
// or we can place the methods in the prototype as well 
Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}


// INHERITANCE
function Student(firstName, lastName, dob, school) {
    Person.call(this,firstName,lastName,dob);
    this.school = school;
}
// this is needed to inherit the getFullName method which is located in the prototype
Student.prototype = Object.create(Person.prototype);
// this is needed to make the Student prototype constructor return Student
Student.prototype.constructor = Student;
Student.prototype.getSchool = function() {
    return this.school;
}


function processForm(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const school = document.getElementById('school').value;
    // console.log(firstName);
    // console.log(lastName);
    // console.log(dob);

    let greeting;
    let person;
    let student;

    if (school === '') {
        // Not a student
        person = new Person(firstName, lastName, dob);
        greeting = `Hi there, I am ${person.getFullName()} and I'm ${person.calculateAge()} years old`;
        console.log(person);
    } else {
        student = new Student(firstName, lastName, dob, school);
        greeting = `Hey, I'm ${student.getFullName()} and I'm a ${student.calculateAge()} old student attending ${student.getSchool()} school`;
        console.log(student);
    }
    // check the console to see where the 2 methods above are. 1 method is in the class and another in the prototype.
    // console.log(person);
    // check the console to see the locations of getFullName and getSchool. 
    // console.log(student);

    document.getElementById('greeting').textContent = greeting;

    
}


document.getElementById('myform').addEventListener('submit', processForm)
