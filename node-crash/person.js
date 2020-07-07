class Person{
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    greeting() {
        console.log(`${this.name} is a student of my class. His age is ${this.age}. His grade is ${this.grade}`);
    }
}

module.exports = Person;
