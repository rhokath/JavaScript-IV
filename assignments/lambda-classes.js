// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)

    }//speak method
}//Person class

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;      
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;    
    }
    listsSubjects(){

    }//listsSubjects method
    PRAssignment(){
       console.log(`${student.name} has submitted a PR for ${subject}`) 

    }//PRAssignment method
    sprintChallenge(){
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }//sprintChallenge method
}//Student class

class PM extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(){

    }//standUp method
    debugsCode(){

    }//debugsCode method
}//PM class