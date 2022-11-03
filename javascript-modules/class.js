export class Person {
    constructor(name){
        this.name = name;
    }

    sayHai(name){
        console.info(`Hello ${name}, my name is ${this.name}`);
    }
}