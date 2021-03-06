// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        `Hello my name is ${this.name}, I am from ${this.location}`

    }//speak method
}//Person class

class Instructor extends Person {
    constructor(instAttributes){
        super(instAttributes);
        this.speciality = instAttributes.speciality;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;      
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }//demo method
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }//grade method
    changeGrade(student){
       return student.grade - Math.random();
        
        }//changeGrade method
}//Instructor class

class Student extends Person {
    constructor(stuAttributes){
        super(stuAttributes);
        this.previousBackground = stuAttributes.previousBackground;
        this.className = stuAttributes.className;
        this.favSubjects = stuAttributes.favSubjects;
        this.grade = stuAttributes.grade;    
    }
    listsSubjects(){
         this.favSubjects.forEach(item => {
            console.log(item);
        });
        
    }//listsSubjects method
    PRAssignment(subject){
       return `${this.name} has submitted a PR for ${subject}`

    }//PRAssignment method
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }//sprintChallenge method

    graduate(){
        if (this.grade > 70){
            return `Congrates you will be able to graduate!`
        }
    }//graduate method
}//Student class

class PM extends Instructor {
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }//standUp method
    debugsCode(student, subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}`
    }//debugsCode method
}//PM class

//Instructors//

const dan = new Instructor ({
    name: "Dan",
    age: 39,
    location: "California",
    favLanguage: "C#",
    speciality: "Front-end",
    catchPhrase: "Google it!",
})

const shelly = new Instructor({
    name: "Shelly",
    age: 38,
    location: "Texas",
    favLanguage: "JS",
    speciality: "Back-end",
    catchPhrase: "Figure it out",
})

//Students//

const joe = new Student ({
    name: "Joe",
    age: 25,
    location: "Canada",
    previousBackground: "dancer",
    className: "Web15",
    favSubjects: ["math", "python", "physics"],
    grade: 88,
})

const diane = new Student ({
    name: "Diane",
    age: 28,
    location: "Georgia",
    previousBackground: "painter",
    className: "Web14",
    favSubjects: ["javascript", "CSS", "HTML"],
    grade: 90,
})

//PMs//

const fred = new PM ({
    name: "Fred",
    age: 30,
    location: "Maine",
    speciality: "CSS",
    favLanguage: "elm",
    catchPhrase: "love it",
    gradClassName: "Web19",
    favInstructor: "Josh",
})

const lily = new PM ({
    name: "Lily",
    age: 33,
    location: "Detroit",
    speciality: "react",
    favLanguage: "Ruby",
    catchPhrase: "awesome job",
    gradClassName: "CS18",
    favInstructor: "Josh",
})


console.log(dan.changeGrade(diane));
