class Person {
    constructor(name,age,country){
        this.name = name 
        this.age = age
        this.country = country
    }

    display(){
        console.log(`Hello ${this.name} of Age ${this.age} from ${this.country}`);
    }
}

const p1 = new Person('ak',23,'India')
const p2 = new Person('bk',25,'India')
p1.display()
p2.display()