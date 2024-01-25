const prompt = require('prompt-sync')();
const integerRegx = /^-?\d+$/
const floatRegx = /^-?\d+\.\d+$/
// we also have Number.isInteger(number)
const validator = (num)=>{
        if(Number.isInteger(num)){
            console.log('INteger');
        }
        if(num.match(integerRegx)){
            console.log('Is Integer');
        }else if (num.match(floatRegx)){
            console.log("Is Float");
        }else{
            // console.log("Not a Valid Number");
            throw new Error("Not Valid")// Throws new Error Obj
            // throw "not valid" //Throws on given string -> not valid
        }
   
    
    

}

let num = prompt("Enter Num: ")
console.log(typeof(num));
try{
    validator(num)
}catch (err){
    console.log(err.message);
    // console.log(err);
}

