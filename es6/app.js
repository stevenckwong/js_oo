class Person {
    __firstName;
    __lastName;
    __dob;

    constructor(firstName, lastName, dob) {
        this.__firstName = firstName;
        this.__lastName = lastName;
        this.__dob = new Date(dob);
    }

    greeting() {
        return `Hello there. My name is ${this.__firstName} ${this.__lastName}. I am ${this.getAge()} years old.`;
    }

    getAge() {
        const diff = Date.now() - this.__dob.getTime()
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() -1970);
    }

}

class Student extends Person {
    __school;
    constructor(firstName, lastName, dob, school) {
        super(firstName,lastName,dob);
        this.__school = school;
    }

    greeting() {
        return `Hey, my name is ${this.__firstName} ${this.__lastName} and I am ${this.getAge()} years old and a student at ${this.__school}`;
    }
}

function processSubmit(e) {
    e.preventDefault();

    const UIfirstName = document.getElementById('firstName');
    const UIlastName = document.getElementById('lastName');
    const UIdob = document.getElementById('dob');
    const UIschool = document.getElementById('school');
    const UImessage = document.getElementById('message');
    let message; 
    
    if (UIschool.value === '') {
        // not a student
        const person = new Person(UIfirstName.value, UIlastName.value, UIdob.value);
        message = person.greeting();
    } else {
        const student = new Student(UIfirstName.value, UIlastName.value, UIdob.value, UIschool.value);
        message = student.greeting();
    }
    
    UImessage.textContent = message;
}

// MAIN code begins here
const UIbutton = document.querySelector('.btn');
UIbutton.addEventListener('click', processSubmit);
