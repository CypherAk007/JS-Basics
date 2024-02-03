let person = {
    name:'Mosh',
    age:30
};

console.log(person.name); //Mosh
person.name = 'Abhishek';
console.log(person.name);//Abhishek
console.log(person['name']);//Abhishek

// Dynamic input 
let selection = 'age';
console.log(person[selection]);//30