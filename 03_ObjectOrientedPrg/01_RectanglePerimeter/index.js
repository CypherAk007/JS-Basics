class Rectangle{
    constructor(height,width){
        this.height = height
        this.width = width

    }
    area(){
        const area = this.height*this.width
        console.log(area);
        return area
    }
    perimeter(){
        const perimeter = 2*(this.height+this.width)
        console.log(perimeter);
        return perimeter
    }
}

r1 = new Rectangle(10,10)
r1.area()
r1.perimeter()
