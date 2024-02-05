class Vehicle{
    constructor(make,model,year){
        this.make = make
        this.model = model
        this.year = year
    }

    display(){
        console.log(this.make,this.model,this.year);
    }
}

class Car extends Vehicle{ 
    constructor(make,model,year,doors =4){
        super(make,model,year)
        this.doors =doors
    }
    display(){
        super.display()
        console.log(this.doors,this.make,this.model,this.year);
    }
}

c1 = new Car('Ford','SUV',2026,30)
c1.display()